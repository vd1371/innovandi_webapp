import React, { useState, useEffect, useContext} from "react";

import {useSelector, useDispatch} from "react-redux";

export default function EditableCellTwoKeys(props){

    const editableComponent = useSelector(state=>state.click.editableComponent)

    const handleChange = (e) => {
        props.handleNewValue(props.key_1, props.key_2, e.target.value)
    }

    if (editableComponent === props.belongsTo){
        return (
            <td className={props.className}>
                <input
                    name="txt"
                    defaultValue={props.valueRef}
                    onChange={handleChange}>
                </input>
            </td>
            )
    } else {
        return (
            <td className={props.className}>{props.valueRef}</td>
        )
    }
}