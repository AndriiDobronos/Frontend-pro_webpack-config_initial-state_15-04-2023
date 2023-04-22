import React from "react";
import {useNavigate, useParams } from "react-router-dom";
import ViewElement from "./ViewElement.jsx";

export default ({elements}) => {
    const navigate = useNavigate()
    const {itemId} = useParams()
    const backToList = () => {
        navigate('/items')
    }
    const element = elements.find(el  => el.id === itemId)
    return element?
        <ViewElement elementToView={element} onClose={backToList}/> :
        <div>
            <p>No such Item</p>
            <button onClick={backToList}>Back to the list</button>
        </div>

}