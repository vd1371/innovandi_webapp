import React from "react";
import HomePage from "./HomePage";
import { createRoot } from "react-dom/client";
import Footer from "./Footer";

export default function App(){
    return (<HomePage />)
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render (<App />)