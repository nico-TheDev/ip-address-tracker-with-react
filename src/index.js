import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import MapImage from "./components/Map";
import { LocationProvider } from "./contexts/LocationContext";

ReactDOM.render(
    <LocationProvider>
        <App />
    </LocationProvider>,
    document.getElementById("root")
);

