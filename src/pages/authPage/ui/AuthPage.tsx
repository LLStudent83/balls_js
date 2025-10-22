import { useCallback, useState } from "react";
import { Layout } from "shared/ui/layout";
import { AuthForm } from "./AuthForm";
import classes from "../styleGamePage.module.scss";

export function AuthPage() {
	const [gameStarted, setGameStarted] = useState(false);

	return (
		<Layout>
			<div>
                <AuthForm />
            </div>
		</Layout>
	);
}
