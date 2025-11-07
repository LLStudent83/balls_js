import { useCallback, useState } from "react";
import { BallsWidget } from "widgets/Balls";
import { ScoreboardWidget } from "widgets/Scoreboard";

export function GamePage() {
	const [gameStarted, setGameStarted] = useState(false);
	const [numberBalls, setNumberBalls] = useState(0);

	const handleStartGame = useCallback(() => {
		setGameStarted(true);
	}, []);

	const handleStopGame = useCallback(() => {
		setGameStarted(false);
	}, []);

	const handleSetNumberBalls = useCallback((numberBalls: number) => {
		setNumberBalls(numberBalls);
	}, []);

	return (
		<>
			<ScoreboardWidget
				numberBalls={numberBalls}
				startGame={handleStartGame}
				stopGame={handleStopGame}
			/>
			<BallsWidget
				gameStarted={gameStarted}
				setNumberBalls={handleSetNumberBalls}
			/>
		</>
	);
}
