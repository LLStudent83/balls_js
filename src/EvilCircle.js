import { Shape } from "./Shape.js";

export class EvilCircle extends Shape {
  color;
  size;
  constructor(x, y, ctx, width, height, balls) {
    super(x, y, 20, 20);
    this.color = "white";
    this.size = 10;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.balls = balls;
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.init();
  }

  init() {
    window.addEventListener("keydown", this.mouseDownHandler);
  }

  mouseDownHandler(e) {
    switch (e.key) {
      case "ArrowLeft":
        this.x -= this.velX;
        break;
      case "ArrowRight":
        this.x += this.velX;
        break;
      case "ArrowUp":
        this.y -= this.velY;
        break;
      case "ArrowDown":
        this.y += this.velY;
        break;
    }
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 3;
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.stroke();
  }

  checkBounds() {
    if (this.x + this.size >= this.width) {
      this.x = this.width - this.size;
    }

    if (this.x - this.size <= 0) {
      this.x = this.size;
    }

    if (this.y + this.size >= this.height) {
      this.y = this.height - this.size;
    }

    if (this.y - this.size <= 0) {
      this.y = this.size;
    }
  }

  collisionDetect() {
    for (const ball of this.balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exists = false;
        }
      }
    }
  }
}
