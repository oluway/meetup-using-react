import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorite-context";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>
);
