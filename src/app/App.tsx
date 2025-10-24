import { StrictMode } from "react";
import { AppRoutes } from "./routing";
import "./styles/rootStyles.scss";
import ApiProvider from "shared/api";
import "../shared/ui/shadcn/globals.css";

function App() {
	return (
		<StrictMode>
			<ApiProvider>
				<AppRoutes />
			</ApiProvider>
		</StrictMode>
	);
}

export default App;
