import React from "react";
import AddNewElement from "./AddNewElement.jsx";
import ViewElement from "./ViewElement.jsx";
import ElementType from "../utilis/ElementType.js";
import EditElement from "./EditElement.jsx";

export default class ElementsList extends React.Component {
    state = {
        elements: [
            {id: '1', name: 'Powerbank', description: 'Cool!', price: '2000 uah', isAvailable: true, type: ElementType.tech},
            {id: '2', name: 'Pen', description: 'Write all your ideas', price:'30 uah',isAvailable: true, type: ElementType.stationery},
            {id: '3', name: 'Percil', description:'Also cool', price:"25 uah", isAvailable: false, type: ElementType.stationery}
        ], //{id, name, description, price, isAvailable, type}
        isAddMode: false,
        isItemViewMode: false,
        isEditMode: false,
    }
    activeElementId = null
    elementIdToEdit = null

    componentDidMount() {
        console.log('did mount')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update')
    }
    componentWillUnmount() {
        console.log('will unmount')
    }

    render() {
        return <div>
            {this.renderCurrentComponent()}
            {!this.state.isAddMode && !this.state.isItemViewMode && !this.state.isEditMode &&
                <button onClick={()=> this.setState({isAddMode: true})}>Add new item</button>}
        </div>
    }
    closeAddForm = () => {
        this.setState({isAddMode: false})
    }
    closeViewForm = () => {
        this.setState({isItemViewMode: false})
    }
    closeEditForm = () => {
        this.setState({isEditMode: false})
    }
    addNewElementToList = (elementToAdd) => {
        this.setState({elements: [...this.state.elements, elementToAdd]})
    }
    updateElement = (updatedElement) => {
        const elementIndex = this.state.elements.findIndex(el => el.id === updatedElement.id)
        this.setState({elements:[...this.state.elements.slice(0,elementIndex),updatedElement,...this.state.elements.slice(elementIndex + 1)]})
    }
    renderCurrentComponent() {
        if (this.state.isAddMode) {
            return <AddNewElement onClose={this.closeAddForm} onAdd={this.addNewElementToList}/>
        }
        if (this.state.isItemViewMode) {
            const element = this.state.elements.find(el => el.id === this.activeElementId)
            return <ViewElement elementToView={element} onClose={this.closeViewForm}/>
        }
        if (this.state.isEditMode) {
            const element = this.state.elements.find(el => el.id === this.state.elementIdToEdit)
            return <EditElement elementToEdit={element} onClose={this.closeEditForm} onUpdate={this.updateElement}/>
        }
        return this.renderList()
    }
    renderList() {
        return this.state.elements.length ?
            this.state.elements.map(el => {
            return <div key={el.id} >
        {el.name}
                <button onClick={() => {
                    this.activeElementId = el.id
                    this.setState({isItemViewMode: true})
                }}>View</button>
                <button onClick={() => {
                    this.elementIdToEdit = el.id
                    this.setState({isEditMode: true})
                }}>Edit</button>
            </div>
        }):
            <p>Empty list</p>
    }
}