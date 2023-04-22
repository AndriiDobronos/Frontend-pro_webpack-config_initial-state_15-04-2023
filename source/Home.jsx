import React,{useState } from "react";
import ChooseLanguage from "./ChooseLanguage.jsx";
import Header from "./Header.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import ArticleList from "./ArticleList-copy.jsx";
import ElementsList from "./ElementsList-copy.jsx";
import Slider from "./Slider.jsx";
import MyCarousel from "./MyCarousel.jsx";

const articles = [
    {id: 'erwet', name: 'Laptop', amount: 7},
    {id: 'asfg', name: 'Mobile phone', amount: 15},
    {id: 'zxcvv', name: 'Headset', amount: 3},
    {id: 'rtyu', name: 'Microphone', amount: 5}
]


export default ({headerText, initialCounter}) =>{
    const [isListShown,setIsListShown] = useState(true)
    const [style, setStyle] = useState({margin: '5px 10px', background: `lightgreen`})
    const [counter, setCounter] = useState(initialCounter || 0)

    const onToggleClick = () => {
       setIsListShown(!isListShown)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const increment = () => {
        setCounter(counter + 1)
    }

    const multipleStateUpdate = () => {
        for (let index = 0;index < 4; index++) {
            setCounter(previousCounter => previousCounter + 1)
        }
    }

    return   <div className='' style={{display: ''}} >
        <ChooseLanguage />
        {headerText && <Header className="header" headerText={headerText}/>}
        <p>The  first react app</p>
        {headerText?.length > 10 ? <p>Long text</p> : <p>Short text</p>}
        {headerText?.length > 0 && <p>Has some text</p>}
        <div style={{display:'flex',gap:'10px',padding:'10px'}}>
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
            <button onClick={multipleStateUpdate}>++</button>
        </div>
        <button className='btn' onClick = {onToggleClick}> Toggle list</button>
        <div style={{display: isListShown? 'none': ''}}><h1>{"Empty field"}</h1></div>
        {isListShown && <ErrorBoundary><ArticleList style={style} articles={articles} /></ErrorBoundary>}

        <Slider />
        <MyCarousel/>
    </div>

}