import { random, randomRGB } from "./utils.js";

export class Balls {
  constructor(Ball, ballNumber) {
    this.Ball = Ball;
    this.ballNumber = ballNumber;
    this.balls = [];
    this.loop = this.loop.bind(this);
    this.init();
  }

  init() {
    const canvas = document.querySelector("canvas");
    if (!canvas) {
      throw new Error("Canvas not found");
    }
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;

    this.createBalls();
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
    this.ctx.fillStyle = "rgb(0 0 0 / 25%)";
    this.ctx.fillRect(0, 0, this.width, this.height);

    for (const ball of this.balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }

    requestAnimationFrame(this.loop);
  }
}
