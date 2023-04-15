import {sum,subscription} from "./mathOperation"
import './index.scss'
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from "./ErrorBoundary.jsx";

const rootEl = document.getElementById('root')
const root = ReactDom.createRoot(rootEl)

root.render(<ErrorBoundary><App initialCounter={16}/></ErrorBoundary>)

