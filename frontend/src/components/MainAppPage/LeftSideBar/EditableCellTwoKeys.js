import React, { useState, useEffect, useContext} from "react";

export default function EditableCellTwoKeys(props){

    const handleChange = (e) => {
        props.handleNewValue(props.key_1, props.key_2, e.target.value)
    }

    if (props.editable){
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