import React, { useState, useEffect, useContext} from "react";

export default function EditButton({editable, handleEditable}){

    if (editable) {
        return (
            <button 
                className="fa-solid fa-save edit-button fa-fade"
                onClick={handleEditable}>
            </button>
        )
    } else {
        return (
            <button 
                className="fa-solid fa-pen-to-square edit-button"
                onClick={handleEditable}>
            </button>
        )
    }
}