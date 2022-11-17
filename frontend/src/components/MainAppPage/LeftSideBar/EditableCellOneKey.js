import React, { useState, useEffect, useContext} from "react";

export default function EditableCellOneKey(props){

    const handleChange = (e) => {
        props.handleNewValue(props.key_, e.target.value)
    }

    if (props.editable){
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