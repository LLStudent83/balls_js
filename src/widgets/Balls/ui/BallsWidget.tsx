import React, { useEffect, useRef } from "react";
import { Balls } from "../model/Balls";
import { Ball } from "entities/Ball";
import { EvilCircle } from "entities/EvilCircle";
import { Scoreboard } from "widgets/Scoreboard";

interface PropsI {}

export function BallsWidget(props: PropsI) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      new Balls(Ball, EvilCircle, Scoreboard, 25, canvasRef.current);
    }
  }, []);

  return (
    <section>
      <canvas ref={canvasRef}></canvas>
    </section>
  );
}
