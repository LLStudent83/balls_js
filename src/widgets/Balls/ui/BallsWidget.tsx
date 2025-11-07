import { Ball } from "entities/Ball";
import { EvilCircle } from "entities/EvilCircle";
import { useRef } from "react";
import { useControlGame } from "../hooksBallsWidget";
import { Balls } from "../model/Balls";

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
		<section className="flex-1">
			<canvas ref={canvasRef} className="block"></canvas>
		</section>
	);
}
