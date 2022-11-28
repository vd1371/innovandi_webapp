import React, {Component} from "react";

export default function ScreenIsSmallPage(props){

    return (
        <div
            id = "screen-is-small-container"
            className = {props.hidden? "hidden": null}>
            <div id="screen-is-small">
                <h2>
                    Your screen is small for this app. <br/><br/>
                    Use a wider screen and reload the page.
                </h2>
            </div>
        </div>
    )
}