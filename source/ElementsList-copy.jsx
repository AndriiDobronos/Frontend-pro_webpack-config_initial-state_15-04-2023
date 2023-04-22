import React, {useState, useRef, useEffect, useContext} from "react";
import AddNewElement from "./AddNewElement-copy.jsx";
import ViewElement from "./ViewElement.jsx";
import ElementType from "./ElementType.js";
import EditElement from "./EditElement.jsx";
import LanguageContext from "./Context.jsx";
import {useNavigate} from "react-router-dom";


export default ({elements,setElements}) => {

    const [elements1, setElements1] = useState([
        {id: '1', name: 'Повербанк', description: 'Класний!', price: '2000 uah', isAvailable: true, type: ElementType.tech1 },
        {id: '2', name: 'Ручка', description: 'Зафіксує всі ваші ідеЇ', price:'30 uah',isAvailable: true, type: ElementType.stationery1},
        {id: '3', name: 'Олівець', description:'Також кльова', price:"25 uah", isAvailable: false, type: ElementType.stationery1}
    ])


    const [isAddMode, setIsAddMode] = useState(false)
//    const [isItemViewMode, setIsItemViewMode] = useState(false)
//    const [activeElementId, setActiveElementId] = useState(null)
    const [isEditMode, setIsEditMode] = useState(false)
//    const [elementIdToEdit, setElementIdToEdit] = useState(null)

    const activeElementIdRef = useRef(null)
    const elementIdToEditRef = useRef(null)
    const currentTexts = useContext(LanguageContext)
    const navigate = useNavigate()

    useEffect(() => {
        console.log('add mode has changed')
    },[isAddMode])

    useEffect(() => {
        console.log('did mount')
        const onScroll = () => {
            console.log('scroll')
        }
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    },[])

    useEffect(() => {
        console.log('did update')
        return () => {
            console.log('will unmount')
        }
    },)

    const closeAddForm = () => {
        setIsAddMode(false)
    }
//    const closeViewForm = () => {
//        setIsItemViewMode(false)
//    }
    const closeEditForm = () => {
        setIsEditMode(false)
    }
    const addNewElementToList = (elementToAdd) => {
        setElements([...elements, elementToAdd])

    }
    const updateElement = (updatedElement) => {
        const elementIndex = elements.findIndex(el => el.id === updatedElement.id)
        setElements([...elements.slice(0,elementIndex),updatedElement,...elements.slice(elementIndex + 1)])
    }

    const renderCurrentComponent = () => {
        if (isAddMode) {
            return <AddNewElement onClose={closeAddForm} onAdd={addNewElementToList}/>
        }
//        if (isItemViewMode) {
//            const element = elements.find(el => el.id === activeElementIdRef.current)
//            return <ViewElement elementToView={element} onClose={closeViewForm}/>
//        }
        if (isEditMode) {
            const element = elements.find(el => el.id === elementIdToEditRef.current)
            return <EditElement elementToEdit={element} onClose={closeEditForm} onUpdate={updateElement}/>
        }
        return renderList()
    }

    const renderList = () => {
            return elements.length ?
                elements.map(el => {
                    return <div key={el.id} >
                        {el.name}
                        <button onClick={() => {
                            activeElementIdRef.current = el.id
                            navigate('/item/'+ el.id)
                        }}>{currentTexts.viewButton}</button>
                        <button onClick={() => {
                            elementIdToEditRef.current = el.id
                            setIsEditMode(true)
                        }}>{currentTexts.editButton}</button>
                    </div>
                }):
                <p>Empty list</p>
    }

    return <div>
        {renderCurrentComponent()}
        {!isAddMode && !isEditMode &&
            <button onClick={() => setIsAddMode(true)
            }>{currentTexts.addButton}</button>}
    </div>
}
