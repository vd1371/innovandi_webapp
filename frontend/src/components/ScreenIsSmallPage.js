import React, {Component} from "react";

export default function ScreenIsSmallPage(props){

    return (
        <div
            id = "screen-is-small"
            className = {props.hidden? "hidden": null}>
            <h2>
                Your screen is small for this app <br/>
                Please use a wider screen
            </h2>
        </div>
    )
}