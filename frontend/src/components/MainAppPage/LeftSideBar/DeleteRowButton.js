import React, { useState, useEffect, useContext} from "react";
import {useSelector, useDispatch} from "react-redux";

export default function DeleteRowButton(props){

    const editableComponent = useSelector(state=>state.click.editableComponent)

    const handleClick = () => {
        props.handleDelete(props.key_1)
    }

    return (
        <>
        {(editableComponent === props.belongsTo) &&
        <td>
            <button
                className="fa-trash fa-solid toppane-button" 
                onClick={handleClick}>
            </button>
        </td>
        }
        </>
    );
}