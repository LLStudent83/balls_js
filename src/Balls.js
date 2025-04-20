import { random, randomRGB } from "./utils.js";

export class Balls {
  Ball;
  ballNumber;
  EvilCircle;
  Scoreboard;
  constructor(Ball, ballNumber, EvilCircle, Scoreboard) {
    this.Ball = Ball;
    this.EvilCircle = EvilCircle;
    this.Scoreboard = Scoreboard;
    // this.collisionHandler = this.collisionHandler.bind(this);

    this.ballNumber = ballNumber;
    this.balls = [];
    this.loop = this.loop.bind(this);
    this.gameStarted = false;
    this.initScoreboard();
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

  initScoreboard() {
    this.scoreboard = new this.Scoreboard({
      numberBalls: this.ballNumber,
      startGame: () => this.startGame(),
      stopGame: () => this.stopGame(),
    });
  }

  collisionHandler = (score) => {
    this.scoreboard.setScore(score);
  };

  startGame() {
    if (!this.gameStarted) {
      this.gameStarted = true;
      this.initGame();
      this.loop();
    }
  }

  stopGame() {
    this.gameStarted = false;
    this.initGame();
  }

  createBalls() {
    while (this.balls.length < this.ballNumber) {
      const size = random(10, 20);
      const ball = new this.Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size, this.width - size),
        random(0 + size, this.height - size),
        random(-7, 7),
        random(-7, 7),
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
