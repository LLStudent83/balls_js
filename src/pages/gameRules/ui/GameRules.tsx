import { Button } from "@shadcn/components/ui/button";
import { useNavigate } from "react-router";
import { setUserSeenRules } from "../../../shared/functions/LSUtils/rulesUtils";

export function GameRules() {
	const navigate = useNavigate();

	const handleAcceptRules = () => {
		// Устанавливаем флаг, что пользователь видел правила
		setUserSeenRules();
		// Перенаправляем на игру
		navigate("/game");
	};

	return (
		<div className="container mx-auto p-6 max-w-2xl">
			<div className="space-y-7 p-5 border border-border rounded-xl text-lg">
				<h1 className="text-2xl font-bold text-center mb-6">Правила игры</h1>

				<div className="space-y-4">
					<h2 className="text-xl font-semibold">Цель игры</h2>
					<p>
						Представьте что вам представилась возможность управлять черной
						дырой. Ваша задача за максимально короткое время поглотить все
						планеты в вашей звёздной системе.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-xl font-semibold">Управление</h2>
					<ul className="list-disc list-inside space-y-2">
						<li>
							Используйте <strong>стрелки </strong> для перемещения черной дыры.
						</li>
					</ul>
				</div>

				<div className="pt-6 text-center">
					<Button onClick={handleAcceptRules} size="lg">
						Приступить к игре
					</Button>
				</div>
			</div>
		</div>
	);
}
