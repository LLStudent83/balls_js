import type { IBall } from "entities/Ball";
import type { IEvilCircle } from "entities/EvilCircle";
import { randomNumber, randomRGB } from "shared/functions";

export interface IBalls {
	Ball: new (
		x: number,
		y: number,
		velX: number,
		velY: number,
		color: string,
		size: number,
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		balls: IBall[],
	) => IBall;
	EvilCircle: new (
		x: number,
		y: number,
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		balls: IBall[],
		collisionHandler: (score: number) => void,
	) => IEvilCircle;
	canvasElement: HTMLCanvasElement;
	ballNumber: number;
	balls: IBall[];
	gameStarted: boolean;
	ctx?: CanvasRenderingContext2D;
	width?: number;
	height?: number;
	evilCircle?: IEvilCircle;
	animationActive: boolean;
}

export class Balls implements IBalls {
	Ball: new (
		x: number,
		y: number,
		velX: number,
		velY: number,
		color: string,
		size: number,
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		balls: IBall[],
	) => IBall;
	ballNumber: number;
	canvasElement: HTMLCanvasElement;
	EvilCircle: new (
		x: number,
		y: number,
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		balls: IBall[],
		collisionHandler: (score: number) => void,
	) => IEvilCircle;
	gameStarted: boolean;
	setNumberBalls: (numberBalls: number) => void;
	balls: IBall[];
	ctx?: CanvasRenderingContext2D;
	width?: number;
	height?: number;
	evilCircle?: IEvilCircle;
	animationActive: boolean;

	constructor(
		Ball: new (
			x: number,
			y: number,
			velX: number,
			velY: number,
			color: string,
			size: number,
			ctx: CanvasRenderingContext2D,
			width: number,
			height: number,
			balls: IBall[],
		) => IBall,
		EvilCircle: new (
			x: number,
			y: number,
			ctx: CanvasRenderingContext2D,
			width: number,
			height: number,
			balls: IBall[],
			collisionHandler: (score: number) => void,
		) => IEvilCircle,
		ballNumber: number,
		setNumberBalls: (numberBalls: number) => void,
	) {
		this.Ball = Ball;
		this.EvilCircle = EvilCircle;
		this.ballNumber = ballNumber;
		this.balls = [];
		this.loop = this.loop.bind(this);
		this.startGame = this.startGame.bind(this);
		this.stopGame = this.stopGame.bind(this);
		this.setNumberBalls = setNumberBalls;
		this.animationActive = null;
	}

	initGame(canvas: HTMLCanvasElement) {
		if (!canvas) {
			throw new Error("Canvas not found");
		}
		this.ctx = canvas.getContext("2d");
		this.width = canvas.width = Math.trunc(
			canvas.getBoundingClientRect().width,
		);
		this.height = canvas.height = Math.trunc(
			canvas.getBoundingClientRect().height,
		);

		this.createBalls();
		this.evilCircle = new this.EvilCircle(
			this.width / 2,
			20,
			this.ctx,
			this.width,
			this.height,
			this.balls,
			this.collisionHandler,
		);
	}

	collisionHandler = (score: number) => {
		this.setNumberBalls(score);
	};

	startGame(canvas: HTMLCanvasElement) {
		this.animationActive = true;
		this.initGame(canvas);
		this.setNumberBalls(this.ballNumber);

		this.loop();
	}

	stopGame() {
		this.animationActive = false;
		this.balls = [];
		this.evilCircle = undefined;
		this.setNumberBalls(0);

		if (this.ctx && this.width && this.height) {
			this.ctx.clearRect(0, 0, this.width, this.height);
		}
	}

	createBalls() {
		while (this.balls.length < this.ballNumber) {
			const size = randomNumber(10, 20);
			const ball = new this.Ball(
				randomNumber(0 + size, this.width - size),
				randomNumber(0 + size, this.height - size),
				randomNumber(-7, 7),
				randomNumber(-7, 7),
				randomRGB(),
				size,
				this.ctx,
				this.width,
				this.height,
				this.balls,
			);

			this.balls.push(ball);
		}
	}

	loop() {
		if (!this.animationActive) {
			return;
		}
		this.ctx.fillStyle = "rgb(0 0 0 / 25%)";
		this.ctx.fillRect(0, 0, this.width, this.height);

		for (const ball of this.balls) {
			ball.draw();
			ball.update();
			ball.collisionDetect();
		}

		this.evilCircle.draw();
		this.evilCircle.checkBounds();
		this.evilCircle.collisionDetect();

		requestAnimationFrame(this.loop);
	}
}
