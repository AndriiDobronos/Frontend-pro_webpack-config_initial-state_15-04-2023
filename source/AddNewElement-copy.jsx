import React, {useContext} from "react";
import './addNewElement.syles.scss'
import ElementType from "./ElementType.js";
import LanguageContext from "./Context.jsx";

export default ({onAdd, onClose}) => {
    const currentLanguage = useContext(LanguageContext)
    const validateAndAdd = (event) => {
        event.preventDefault()
        const newItem = {
            id: 'el-'+ new Date().getTime()
        }
        const {name, description, isAvailable, price, type} = event.currentTarget
        if(!name.value.trim()) {
            return
        }
        newItem.name = name.value.trim()

        if (!description.value.trim()) {
            return
        }
        newItem.description = description.value.trim()
        newItem.isAvailable = isAvailable.checked
        if (!price.value.trim().match(/^[1-9]\d{0,6}(\.\d{2})?(\s)?(...)?$/)) {
            return
        }
        newItem.price = price.value.trim()
        newItem.type = type.value
        onAdd(newItem)
        onClose()
    }
    return <form onSubmit={validateAndAdd} className="add-element-form">
        <div>
            <label htmlFor="">Name: </label>
            <input name="name" type="text"/>
        </div>
        <div>
            <label htmlFor="">Description: </label>
            <textarea name="description" id="" cols="20" rows="10"></textarea>
        </div>
        <div>
            <label htmlFor="">Is available: </label>
            <input type="checkbox" name="isAvailable"/>
        </div>
        <div>
            <label htmlFor="">Price: </label>
            <input name="price" type="text"/>
        </div>
        <div>
            <label htmlFor="">Type: </label>
            <select name="type" id="">
                {Object.values(ElementType).map(type => {
                    return <option key={type} value={type}>
                        {type}
                    </option>
                })}
            </select>
        </div>
        <div>
            {(currentLanguage === 'ukr') ? <button>Add</button> : <button>Додати</button>}
            {(currentLanguage === 'ukr') ? <button type='button' onClick={onClose}>Cancel</button> :
                <button type='button' onClick={onClose}>Відмінити</button>}
        </div>
    </form>
}