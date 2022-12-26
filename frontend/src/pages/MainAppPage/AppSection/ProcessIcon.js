import React, { useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import { appActions } from "../../../store/app-slice";
import { clickActions } from "../../../store/click-slice";

export default function ProcessIcon({processType}){
    
    let img_address = process.env.PUBLIC_URL + "/images/ProcessesIcons/" + processType + ".png"

    return (
        <img className="img-fluid no-click" width="60" src={img_address}></img>
    )
    
}