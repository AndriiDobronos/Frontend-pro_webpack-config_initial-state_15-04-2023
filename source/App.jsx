import React from 'react'
import Header from './Header.jsx'
import './app.styles.scss'
import ArticleList from './ArticleList.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import ElementsList from "./ElementsList.jsx";

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
        headerText: ''
    }
    constructor(props) {
        super(props)
        this.state = {
            isListShown: true,
            style: {margin: '5px 10px', background:'lightgreen'},
            phrase: 'Empty field',
            counter:  props.initialCounter || 0,
            color: 555555
        }
    }
    onToggleClick = () => {
        const isListShown = !this.state.isListShown
        this.setState({
            isListShown
        })

    }
    decrement = () => {
        let {counter} = this.state
        counter--
        this.setState({
            counter
        })
    }
    increment = () => {
        let {counter} = this.state
        counter++
        this.setState({
            counter
        })
    }
    multipleStateUpdate = () => {
        for (let index = 0;index < 4; index++) {
            this.setState((previousState) => {
//                const updateState = Object.assign({},previousState, {counter: previousState.counter + 1 })
                return {counter: previousState.counter + 1}
            })
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

    render() {
        const {headerText} = this.props
        return  <div className='' style={{display: ''}} >
            {headerText && <Header className="header" headerText={headerText}/>}
            <p>The  first react app</p>
            {headerText?.length > 10 ? <p>Long text</p> : <p>Short text</p>}
            {headerText?.length > 0 && <p>Has some text</p>}
            <div style={{display:'flex',gap:'10px',padding:'10px'}}>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.counter}</span>
                <button onClick={this.increment}>+</button>
                <button onClick={this.multipleStateUpdate}>++</button>
            </div>
            <button className='btn' onClick = {this.onToggleClick}> Toggle list</button>
            <div style={{display: this.state.isListShown? 'none': ''}}><h1>{this.state.phrase}</h1></div>
            {this.state.isListShown && <ErrorBoundary><ArticleList style={this.state.style} articles={articles} /></ErrorBoundary>}
            <ElementsList />

            <button onClick={this.ix}>color+</button>
            <button onClick={this.ixi}>color-</button>
        </div>

    }
}