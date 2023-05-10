import {sum,subscription} from "./utilis/mathOperation.js"
import 'antd/dist/reset.css'
import './index.scss'
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import {BrowserRouter} from "react-router-dom";
import ElementType from "./utilis/ElementType";
import {applyMiddleware, createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import { StrictMode } from "react"
import thunk from "redux-thunk";
import getInitialItemsAsync from "./actionCreator/getInitialItemsAsync.js";
import itemsReducer from "./reducers/itemsReducer.js";
import languageReducer from "./reducers/languageReducer.js";
import dateReducer from "./reducers/dateReducer.js";


const rootEl = document.getElementById('root')
const root = ReactDom.createRoot(rootEl)


const state = {
    language: 'ua',
     elements: [],/*[
         {id: '1', name: 'Powerbank', description: 'Cool!', price: '2000 uah', isAvailable: true, type: ElementType.tech},
         {id: '2', name: 'Pen', description: 'Write all your ideas', price:'30 uah',isAvailable: true, type: ElementType.stationery},
         {id: '3', name: 'Pencil', description:'Also cool', price:"25 uah", isAvailable: false, type: ElementType.stationery}
     ]*/
    date: new Date()
}
/*
const languageReducer = (prevLanguage = 'ua',action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return  action.payload.newLanguage
        default:
            return prevLanguage
    }
}
*/
/*
const itemsReducer = (prevElements = [],action) => {
    switch (action.type) {
//        case 'CHANGE_LANGUAGE':
//            return Object.assign({},prevState,{language: action.payload.newLanguage })

        case 'ADD_NEW_ITEM':
            return [...prevElements,{...action.payload} ]
        case 'UPDATE_ITEM':
            const elementIndex = prevElements.findIndex(el => el.id === action.payload.id)
            return [...prevElements.slice(0,elementIndex),
                action.payload,
                    ...prevElements.slice(elementIndex + 1)
            ]
        case 'SET_ITEMS':
            return action.payload.items
        default:
            return prevElements
    }
}
*/
const reducer = combineReducers({
    language: languageReducer ,
    elements: itemsReducer,
    date: dateReducer
})

const store = createStore(reducer,state,applyMiddleware(thunk))
store.dispatch(getInitialItemsAsync())


/*
console.log(store.getState())
const action = createLanguageAction('en')
store.dispatch(action)
console.log(store.getState())
const addItemAction = createAddNewItemAction({id:'4',
    name:'Mouse',description: 'Optical',price:'300 uah',isAvailable:true,type:ElementType.tech})
store.dispatch(addItemAction)
console.log(store.getState())
*/

root.render(<BrowserRouter>
    <Provider store={store}>
        <ErrorBoundary>
            <App initialCounter={16}/>
        </ErrorBoundary>
    </Provider>
    </BrowserRouter>)
