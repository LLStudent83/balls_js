import { GamePage } from "pages/gamePage";
import { StrictMode } from "react";
import "./styles/rootStyles.scss";
import ApiProvider from "shared/api";

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
