import React from "react";
import './addNewElement.syles.scss'
import ElementType from "../utilis/ElementType.js";
import {connect } from "react-redux";
import updateItem from "../actionCreator/updateItem.js";

class EditElement extends React.Component {
    constructor(props) {
        super(props)

        this.state = Object.assign({},props.elementToEdit)
    }
    changeProp = (event) => {
        const {name, value, type, checked} = event.currentTarget
        if (type === "checkbox") {
            this.setState({[name]: checked})
        }
        else {
            this.setState({[name]: value})
        }
    }
    render() {
        return <form onSubmit={this.validateAndUpdate} className="add-element-form">
            <div>
                <label htmlFor="">Name: </label>
                <input name="name" type="text" value={this.state.name} onChange={this.changeProp} />
            </div>
            <div>
                <label htmlFor="">Description: </label>
                <textarea name="description" value={this.state.description} onChange={this.changeProp}></textarea>
            </div>
            <div>
                <label htmlFor="">Is available: </label>
                <input type="checkbox" name="isAvailable" checked={this.state.isAvailable} onChange={this.changeProp}/>
            </div>
            <div>
                <label htmlFor="">Price: </label>
                <input name="price" type="text" value={this.state.price} onChange={this.changeProp}/>
            </div>
            <div>
                <label htmlFor="">Type: </label>
                <select name="type" value={this.state.type} onChange={this.changeProp}>
                    {Object.values(ElementType).map(type => {
                        return <option key={type} value={type}>
                            {type}
                        </option>
                    })}
                </select>
            </div>
            <div>
                <button>Update</button>
                <button type='button' onClick={this.props.onClose}>Cancel</button>
            </div>
        </form>
    }
    validateAndUpdate = (event) => {
        event.preventDefault()
        const {id, name, description, isAvailable, price, type} = this.state
        const updatedItem = {id, isAvailable, type}
        if(!name.trim()) {
            return
        }
        updatedItem.name = name.trim()

        if (!description.trim()) {
            return
        }
        updatedItem.description = description.trim()
        if (!price.trim().match(/^[1-9]\d{0,6}(\.\d{2})?(\s)?(uah)?$/)) {
            return
        }
        updatedItem.price = price.trim()
        const action = updateItem(updatedItem)
        this.props.dispatch(action)
//        this.props.update(action)
        this.props.onClose()
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
//        update: (action) => dispatch(action),
        dispatch
    }
}
export default connect(null,mapDispatchToProps)(EditElement)