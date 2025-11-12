export interface IShape {
  x: number;
  y: number;
  velX: number;
  velY: number;
}

export class Shape implements IShape {
  constructor(
    public x: number,
    public y: number,
    public velX: number,
    public velY: number,
  ) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}
