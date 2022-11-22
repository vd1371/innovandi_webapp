import React, { useState, useEffect, useContext} from "react";

import {useSelector, useDispatch} from "react-redux";
import { appActions } from "../../../store/app-slice";

export default function EditableCellOneKey(props){

    const editableComponent = useSelector(state=>state.click.editableComponent)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        props.handleNewValue(props.key_, e.target.value)
        dispatch(appActions.addNEditionsDDS())
    }

    if (editableComponent === props.belongsTo){
        return (
            <td>
                <input
                    name="txt"
                    defaultValue={props.valueRef}
                    onChange={handleChange}>
                </input>
            </td>
            )
    } else {
        return (
            <td>{props.valueRef}</td>
        )
    }
}