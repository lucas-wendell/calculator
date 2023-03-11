import React from "react";
import { App } from "./pages/App";
import ReactDOM from "react-dom/client";
import { Provider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider>
			<App />
		</Provider>
	</React.StrictMode>
);
