import React, { useState, useEffect, useRef} from "react";
import EditButton from "../EditButton";
import {useSelector, useDispatch} from "react-redux";
import { clickActions } from "../../../store/click-slice";
import toast from 'react-hot-toast';

export default function AppNotification(props){

    const clickNotification = useSelector((state) => state.click.clickNotification)
    const dispatch = useDispatch()
    const [contents, setContents] = useState()

    useEffect(() => {
        if (clickNotification){
            toast(clickNotification)
            dispatch(clickActions.clearClickNotification())
        }
    }, [clickNotification])

    return (
        <>
        </>
    )
}