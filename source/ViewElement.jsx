import React from "react";

export default class ViewElement extends React.Component {
    render() {
        const {name, description, isAvailable, price, type} = this.props.elementToView
        return <div className="view-element">
            <div>
                <label htmlFor="">Name: </label>
                <label htmlFor="">{name}</label>
            </div>
            <div>
                <label htmlFor="">Description: </label>
                <div>{description}</div>
            </div>
            <div>
                <label htmlFor="">Is available: </label>
                <label htmlFor="">{isAvailable ? 'Yes': 'No'}</label>
            </div>
            <div>
                <label htmlFor="">Price: </label>
                <label htmlFor="">{price}</label>
            </div>
            <div>
                <label htmlFor="">Type: </label>
                <label htmlFor="">{type}</label>
            </div>
            <div>
                <button type='button' onClick={this.props.onClose}>Return to the list</button>
            </div>
        </div>
    }
}
