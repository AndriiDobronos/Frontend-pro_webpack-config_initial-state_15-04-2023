import {Button, DatePicker, Space, version} from "antd"
import React,{useState,useRef} from "react";
import ChooseLanguage from "../components/ChooseLanguage.jsx";
import Header from "../components/Header.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import ArticleList from "../components/ArticleList-copy.jsx";
import ElementsList from "../components/ElementsList-copy.jsx";
import Slider from "../components/Slider.jsx";
import MyCarousel from "../components/MyCarousel.jsx";
import {useSelector,useDispatch} from "react-redux";
import changeDate from "../actionCreator/changeDate.js";

const articles = [
    {id: 'erwet', name: 'Laptop', amount: 7},
    {id: 'asfg', name: 'Mobile phone', amount: 15},
    {id: 'zxcvv', name: 'Headset', amount: 3},
    {id: 'rtyu', name: 'Microphone', amount: 5}
]


export default ({headerText, initialCounter}) => {
    const [isListShown, setIsListShown] = useState(true)
    const [style, setStyle] = useState({margin: '5px 10px', background: `lightgreen`})
    const [counter, setCounter] = useState(initialCounter || 0)
    const date = useSelector(state => state.date)
    const dispatch = useDispatch()

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
        for (let index = 0; index < 4; index++) {
            setCounter(previousCounter => previousCounter + 1)
        }
    }

    const onDateChange = (value) => {
        const action = changeDate(value?.toDate())
        dispatch(action)
    }

    return <div className='' style={{display: ''}}>

        <ChooseLanguage/>
        {headerText && <Header className="header" headerText={headerText}/>}
        <p>The first react app</p>
        {headerText?.length > 10 ? <p>Long text</p> : <p>Short text</p>}
        {headerText?.length > 0 && <p>Has some text</p>}
        <div style={{display: 'flex', gap: '10px', padding: '10px'}}>
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
            <button onClick={multipleStateUpdate}>++</button>
        </div>
        <button className='btn' onClick={onToggleClick}> Toggle list</button>
        <div style={{display: isListShown ? 'none' : ''}}><h1>{"Empty field"}</h1></div>
        {isListShown && <ErrorBoundary><ArticleList style={style} articles={articles}/></ErrorBoundary>}
        <div className={"antd-demo"}>
            <h1>antd version: {version}</h1>
            <Space>
                <DatePicker onChange={onDateChange}/>
                <div style={{marginTop: 16}}>
                    Selected Date: {date ? date.toLocaleDateString() : 'None'}
                </div>
                <Button type={"primary"}>Primary Button</Button>
            </Space>
        </div>
        <Slider/>
        <MyCarousel/>
    </div>
}