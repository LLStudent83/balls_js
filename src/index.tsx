import App from "app/App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

if (module.hot) {
  module.hot.accept();
}
