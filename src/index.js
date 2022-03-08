import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { DataProvider } from "./context/DataContext";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<DataProvider> {/* Provider for set the dark mode */}
			<App />
		</DataProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
