import React, { useState, useEffect, useContext} from "react";
import {useSelector, useDispatch} from "react-redux";

import uuid from "react-uuid"

export default function DropdownSelector(props){

    const editableComponent = useSelector(state=>state.click.editableComponent)
    const [value, setValue] = useState(props.valueRef)

    let listOfValues = ["N/A"].concat(props.listOfValues)

    const changeStatus = (e) => {
        setValue(e.target.value);
        props.handleNewValue(e.target.value, props)
    }

    return (
        <>
            {(editableComponent === props.belongsTo) &&
            <td>
                <div className="dropdown">
                    <select value={value} onChange={changeStatus}>
                        {listOfValues.map((item)=>{
                            return (
                                <option key = {uuid()} value={item}>
                                    {item}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </td>}

            {(editableComponent !== props.belongsTo) && <td>{props.valueRef}</td>}
        </>
    );
}