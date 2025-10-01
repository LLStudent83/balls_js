import App from "app/App";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

if (rootElement) {
	const root = createRoot(rootElement);
	root.render(<App />);
} else {
	throw new Error('Элемент с id "root" не найден');
}

if (module.hot) {
	module.hot.accept();
}
