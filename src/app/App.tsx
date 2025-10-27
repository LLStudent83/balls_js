import { GamePage } from "pages/gamePage";
import { StrictMode } from "react";
import ApiProvider from "shared/api";
import "./styles/rootStyles.css";

function App() {
	return (
		<StrictMode>
			<ApiProvider>
				<GamePage />
			</ApiProvider>
		</StrictMode>
	);
}

export default App;
