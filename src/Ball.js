import { randomRGB } from "./utils.js";
import { Shape } from "./Shape.js";
export class Ball extends Shape {
  color;
  size;
  ctx;
  width;
  height;
  balls;
  constructor(x, y, velX, velY, color, size, ctx, width, height, balls) {
    super(x, y, velX, velY);
    this.color = color;
    this.size = size;
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.balls = balls;
    this.exists = true;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  update() {
    if (this.x + this.size >= this.width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= this.height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of this.balls) {
      if (this !== ball && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
