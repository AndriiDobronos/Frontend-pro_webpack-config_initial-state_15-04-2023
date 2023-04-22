import {sum,subscription} from "./mathOperation"
import './index.scss'
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from "./ErrorBoundary.jsx";
import {BrowserRouter} from "react-router-dom";

const rootEl = document.getElementById('root')
const root = ReactDom.createRoot(rootEl)

root.render(<BrowserRouter>
    <ErrorBoundary>
    <App initialCounter={16}/>
    </ErrorBoundary>
    </BrowserRouter>)
