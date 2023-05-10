import React, {useState} from 'react'
import './app.styles.scss'
import Header from './components/Header.jsx'
import ArticleList from './components/ArticleList-copy.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import ElementsList from "./components/ElementsList-copy.jsx";
import ChooseLanguage from "./components/ChooseLanguage.jsx";
import Slider from "./components/Slider.jsx";
import MyCarousel from "./components/MyCarousel.jsx";
import LanguageContext from "./Context.jsx";
import Home from "./pages/Home.jsx";
import ListPage from "./pages/ListPage.jsx";
import ImagePage from "./pages/ImagePage.jsx";
import {Route, Routes, NavLink, Link} from "react-router-dom";
import ElementType from "./utilis/ElementType.js";
import ListItem from "./components/ListItem.jsx";
import About from "./pages/About.jsx"
import AboutItems from "./pages/AboutItems.jsx"
import AboutImages from "./pages/AboutImages.jsx"
import SharedLayout from "./pages/SharedLayout.jsx";
import Layout from "./Layout.jsx";
import { ReactDimmer } from 'react-dimmer'

const articles = [
    {id: 'erwet', name: 'Laptop', amount: 7},
    {id: 'asfg', name: 'Mobile phone', amount: 15},
    {id: 'zxcvv', name: 'Headset', amount: 3},
    {id: 'rtyu', name: 'Microphone', amount: 5}
]

/*
let showList = 'block'
const collectionStyle  = {margin: '5px 10px', background:'lightgreen',display: showList ? '':'none'}
export default ({headerText}) => {
    return  <div className='fdfd'>
        {headerText && <Headers className="header" headerText={headerText}/>}
        <p>The  first react app</p>
        {headerText?.length > 10 ? <p>Long text</p> : <p>Short text</p>}
        {headerText?.length > 0 && <p>Has some text</p>}
        <button onClick = {(event) => {
          showList =  !showList
        }}> Toggle list</button>
        <div className='article-list' style={collectionStyle }>
            {articles.map(article =>{
                return  <div key={articles.id} className='article'>
                    <h3>{article.name}</h3>
                    <p>Remained: {article.amount}</p>
                </div>
            })}
        </div>
    </div>
}
 */

export default class App extends React.Component{
    static defaultProps = {
        headerText: '',
    }
    render() {
        return <Routes>

            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home headerText={"headerText"}/>}/>
                <Route path="items" element={<ListPage />}/>
                <Route path="images" element={<ImagePage />}/>
                <Route path="item/:itemId" element={<ListItem />}/>
                <Route path ="about" element={<About/>}>
                    <Route path ="items" element={<AboutItems/>}/>
                    <Route path ="images" element={<AboutImages/>}/>
                </Route >
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Route>
        </Routes>
    }
}