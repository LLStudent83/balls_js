import { IShape } from "shared/Shape";

export interface IBall extends IShape {
  color: string;
  size: number;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  balls: IBall[];
  draw(): void;
  update(): void;
  collisionDetect(): void;
}
