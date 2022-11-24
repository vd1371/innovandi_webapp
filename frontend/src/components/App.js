import React, {useEffect, useRef} from "react";
import HomePage from "./HomePage";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../store";
import ScreenIsSmallPage from "./ScreenIsSmallPage";
import useWindowDimensions from "./UseWindowsDimensions";

import {Xwrapper} from 'react-xarrows';

export default function App(){
    
    const { height, width } = useWindowDimensions();
    
    return (
        <>
        <Provider store = {store}>
            <React.StrictMode>
                <Xwrapper>
                    <HomePage hidden = {(width <= 1200)}/>
                    <ScreenIsSmallPage hidden = {(width > 1200)}/>
                </Xwrapper>
            </React.StrictMode>
        </Provider>
        </>
    )
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render (<App />)