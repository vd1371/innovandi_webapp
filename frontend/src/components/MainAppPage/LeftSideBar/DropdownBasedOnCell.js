import React, { useState, useEffect, useContext} from "react";
import {useSelector, useDispatch} from "react-redux";

export default function DropdownBasedOnCell(props){

    const nEditions = useSelector(state=>state.app.nEditions)
    const nEditionsForDropDownSelector = useSelector(state=>state.app.nEditionsForDropDownSelector)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const inputNames = props.projectObject.getInputNames(props.id_)
    const [value, setValue] = useState(props.valueRef)

    const changeStatus = (e) => {
        setValue(e.target.value);
        props.handleNewValue(props.key_1, props.key_2, e.target.value)
    }

    return (
        <>
            {(inputNames.length > 0) && (editableComponent === "process") &&
            <div className="dropdown">
                <select value={value} onChange={changeStatus}>
                    {inputNames.map((item)=>{
                        return (
                            <option value={item}>{item}</option>
                        )
                    })}
                </select>
            </div>}

            {(editableComponent !== "process") && <td>{props.valueRef}</td>}
        </>

        
    );
}