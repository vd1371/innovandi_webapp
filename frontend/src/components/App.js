import React from "react";
import HomePage from "./HomePage";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';
import store from "../store";

export default function App(){
    return (
        <Provider store = {store}>
            <React.StrictMode>
                <HomePage />
                <Toaster position="bottom-right"/>
            </React.StrictMode>
        </Provider>
    )
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render (<App />)