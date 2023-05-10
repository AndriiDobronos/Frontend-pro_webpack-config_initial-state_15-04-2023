import React from "react";
import {useNavigate, useParams } from "react-router-dom";
import ViewElement from "./ViewElement.jsx";
import {useSelector} from "react-redux";

export default () => {
    const navigate = useNavigate()
    const {itemId} = useParams()
    const elements = useSelector(state => state.elements)
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