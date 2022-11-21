import React from "react";
import HomePage from "./HomePage";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../store";

export default function App(){
    return (
        <Provider store = {store}>
            <React.StrictMode>
                <HomePage />
            </React.StrictMode>
        </Provider>
    )
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render (<App />)