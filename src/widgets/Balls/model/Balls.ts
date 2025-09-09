import { IBall } from "entities/Ball";
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
    balls: IBall[]
  ) => IBall;
  EvilCircle: new (
    x: number,
    y: number,
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    balls: IBall[],
    collisionHandler: (score: number) => void
  ) => IEvilCircle;
  canvasElement: HTMLCanvasElement;
  ballNumber: number;
  balls: IBall[];
  gameStarted: boolean;
  outerGameStarted: boolean;
  canvas?: HTMLCanvasElement;
  ctx?: CanvasRenderingContext2D;
  width?: number;
  height?: number;
  evilCircle?: IEvilCircle;
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
    balls: IBall[]
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
    collisionHandler: (score: number) => void
  ) => IEvilCircle;
  gameStarted: boolean;
  outerGameStarted: boolean;
  setNumberBalls: (numberBalls: number) => void;
  balls: IBall[];
  canvas?: HTMLCanvasElement;
  ctx?: CanvasRenderingContext2D;
  width?: number;
  height?: number;
  evilCircle?: IEvilCircle;

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
      balls: IBall[]
    ) => IBall,
    EvilCircle: new (
      x: number,
      y: number,
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      balls: IBall[],
      collisionHandler: (score: number) => void
    ) => IEvilCircle,
    ballNumber: number,
    canvasElement: HTMLCanvasElement,
    gameStarted: boolean,
    setNumberBalls: (numberBalls: number) => void
  ) {
    this.Ball = Ball;
    this.EvilCircle = EvilCircle;
    this.outerGameStarted = gameStarted;
    this.gameStarted = false;
    this.ballNumber = ballNumber;
    this.balls = [];
    this.loop = this.loop.bind(this);
    this.setNumberBalls = setNumberBalls;
    this.canvasElement = canvasElement;

    if (this.outerGameStarted) {
      this.startGame();
    }
    if (!this.outerGameStarted && this.outerGameStarted !== this.gameStarted) {
      this.stopGame();
    }
  }

  initGame() {
    this.canvas = document.querySelector("canvas");
    if (!this.canvas) {
      throw new Error("Canvas not found");
    }
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;

    this.createBalls();
    this.evilCircle = new this.EvilCircle(
      this.width / 2,
      20,
      this.ctx,
      this.width,
      this.height,
      this.balls,
      this.collisionHandler
    );
  }

  collisionHandler = (score: number) => {
    this.setNumberBalls(score);
  };

  startGame() {
    if (!this.gameStarted) {
      this.initGame();
      this.loop();
    }
  }

  stopGame() {
    this.initGame();
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
        this.balls
      );

      this.balls.push(ball);
    }
  }

  loop() {
    if (!this.gameStarted) {
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
