import React, { useState, useEffect, useContext} from "react";

import {useSelector, useDispatch} from "react-redux";

export default function EditableCellOneKey(props){

    const editableComponent = useSelector(state=>state.click.editableComponent)

    const handleChange = (e) => {
        props.handleNewValue(props.key_, e.target.value)
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