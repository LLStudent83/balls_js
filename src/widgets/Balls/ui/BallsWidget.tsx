import React, { useEffect, useRef } from "react";
import { Balls } from "../model/Balls";
import { Ball } from "entities/Ball";
import { EvilCircle } from "entities/EvilCircle";

interface PropsI {
  gameStarted: boolean;
  setNumberBalls: (numberBalls: number) => void;
}

export function BallsWidget(props: PropsI) {
  const { gameStarted, setNumberBalls } = props;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      new Balls(
        Ball,
        EvilCircle,
        25,
        canvasRef.current,
        gameStarted,
        setNumberBalls
      );
    }
  }, [gameStarted]);

  return (
    <section>
      <canvas ref={canvasRef}></canvas>
    </section>
  );
}
