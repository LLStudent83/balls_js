import { useCallback, useState } from "react";
import { AuthForm } from "./AuthForm";
import classes from "../styleGamePage.module.scss";

export function AuthPage() {
	const [gameStarted, setGameStarted] = useState(false);

	return (
			<div>
                <AuthForm />
            </div>
	);
}
