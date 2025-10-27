import { GamePage } from "pages/gamePage";
import { StrictMode } from "react";
import ApiProvider from "shared/api";
import "./styles/rootStyles.css";
import {Button} from "@shadcn/components/ui/button"

function App() {
	return (
		<StrictMode>
			<ApiProvider>
				{/* <GamePage /> */}
				<h1 className="text-3xl font-bold underline text-black">
					Hello world!
				</h1>
<Button>Click me</Button>
			</ApiProvider>
		</StrictMode>
	);
}

export default App;
