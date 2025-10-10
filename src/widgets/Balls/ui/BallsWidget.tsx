import { Ball } from "entities/Ball";
import { EvilCircle } from "entities/EvilCircle";
import { useRef } from "react";
import { useControlGame } from "../hooksBallsWidget";
import { Balls } from "../model/Balls";
import classes from "../styleBalls.module.scss";

const NUMBER_BALLS = 25;
interface PropsI {
	gameStarted: boolean;
	setNumberBalls: (numberBalls: number) => void;
}

export function BallsWidget(props: PropsI) {
	const { gameStarted, setNumberBalls } = props;

	const ballsInstanceRef = useRef(
		new Balls(Ball, EvilCircle, NUMBER_BALLS, setNumberBalls),
	);

	const { startGame, stopGame } = ballsInstanceRef.current;

	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useControlGame({
		startGame,
		stopGame,
		canvasElement: canvasRef.current,
		gameStarted,
	});

	return (
		<section>
			<canvas ref={canvasRef} className={classes.canvas}></canvas>
		</section>
	);
}
