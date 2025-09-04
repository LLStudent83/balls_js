import { createRoot } from "react-dom/client";
import React from "react";
import App from "app/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

if (module.hot) {
  module.hot.accept();
}
