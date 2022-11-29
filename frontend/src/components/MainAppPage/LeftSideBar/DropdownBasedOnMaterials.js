import React, { useState, useEffect, useContext} from "react";
import {useSelector, useDispatch} from "react-redux";

export default function DropdownBasedOnMaterials(props){

    const nEditions = useSelector(state=>state.app.nEditions)
    const nEditionsForDropDownSelector = useSelector(state=>state.app.nEditionsForDropDownSelector)
    const editableComponent = useSelector(state=>state.click.editableComponent)
    const listOfItems = ["N/A"].concat(props.projectObject.getWasteNames())
    const [value, setValue] = useState(props.valueRef)

    const changeStatus = (e) => {
        setValue(e.target.value)
        props.handleNewValue(props.key_1, props.key_2, e.target.value)
    }

    return (
        <>
            {(listOfItems.length > 0) && (editableComponent === "flow") &&
                <td>
                    <div className="dropdown">
                    <select value={value} onChange={changeStatus}>
                        {listOfItems.map((item)=>{
                            return (
                                <option value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
            </td>
            }
            {(editableComponent !== "flow") && <td>{props.valueRef}</td>}
        </>

        
    );
}