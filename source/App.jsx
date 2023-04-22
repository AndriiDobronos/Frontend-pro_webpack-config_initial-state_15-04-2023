import React, {useState} from 'react'
import './app.styles.scss'
import Header from './Header.jsx'
import ArticleList from './ArticleList-copy.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import ElementsList from "./ElementsList-copy.jsx";
import ChooseLanguage from "./ChooseLanguage.jsx";
import Slider from "./Slider.jsx";
import MyCarousel from "./MyCarousel.jsx";
import LanguageContext from "./Context.jsx";
import uaTexts from "./uaTexts.jsx";
import enTexts from "./enTexts.jsx";
import itTexts from "./itTexts.jsx";
import Home from "./Home.jsx";
import ListPage from "./ListPage.jsx";
import ImagePage from "./ImagePage.jsx";
import {Route, Routes, NavLink} from "react-router-dom";
import ElementType from "./ElementType.js";
import ListItem from "./ListItem.jsx";

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
        {headerText && <Header className="header" headerText={headerText}/>}
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
    constructor(props) {
        super(props)
        this.state = {
            isListShown: true,
            style: {margin: '5px 10px', background: `lightgreen`},
            phrase: 'Empty field',
            counter:  props.initialCounter || 0,
            color: 555555,
            language:'ua',
            elements: [
                {id: '1', name: 'Powerbank', description: 'Cool!', price: '2000 uah', isAvailable: true, type: ElementType.tech},
                {id: '2', name: 'Pen', description: 'Write all your ideas', price:'30 uah',isAvailable: true, type: ElementType.stationery},
                {id: '3', name: 'Pencil', description:'Also cool', price:"25 uah", isAvailable: false, type: ElementType.stationery}
            ]
        }
    }

    componentDidMount() {
        // component вмонтировался можно с ним что-то делать
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // component демонтировался можно с ним что-то делать
    }
    componentWillUnmount() {
        // component демонтировался из страницы
    }

    ix = () => {
        let {color} = this.state
        color +=111111
        this.setState({
            color
        })
    }
    ixi = () => {
        let {color} = this.state
        color -=111111
        this.setState({
            color
        })
    }
    onLanguageChange = (event) => {
         this.setState({language:event.target.value})
    }

    render() {
        const {headerText} = this.props
        let texts
        switch (this.state.language) {
            case 'ua':
                texts = uaTexts
                break;
            case 'en':
                texts = enTexts
                break;
            case 'it':
                texts = itTexts
                break;
            default:
                throw new Error(this.state.language +" is unhandled")
        }
        return   <LanguageContext.Provider value={texts} >
            <select value={this.state.language} onChange={this.onLanguageChange} >
                <option value="ua">Українська</option>
                <option value="en">English</option>
                <option value="it">Italiano</option>
            </select>
            <nav className="nav-menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/items">Items</NavLink>
                <NavLink to="/images">Images</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home headerText={headerText}/>}/>
                <Route path="/items" element={<ListPage elements={this.state.elements} setElements={elements => this.setState({elements})}/>}/>
                <Route path="/images" element={<ImagePage />}/>
                <Route path="/item/:itemId" element={<ListItem elements={this.state.elements}/>}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>
            <div style={{background: `#${this.state.color}`, height:'100px',width:'200px'}} ></div>
            <button onClick={this.ix}>color+</button>
            <button onClick={this.ixi}>color-</button>
        </LanguageContext.Provider>
    }
}