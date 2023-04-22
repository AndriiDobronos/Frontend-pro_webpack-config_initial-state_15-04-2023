import React, {useState } from 'react'

export default ({style,articles}) => {
    const [isShown, setIsShown] = useState(true)
    return <div className='article-list' style={style}>
        {articles.map(article =>{
            return  <div key={article.id} className='article' style={{background:`green`}}>
                <h3>{article.name}</h3>
                <p>Remained: {article.amount}</p>
            </div>}
        )}
        {isShown ? <button onClick={() => setIsShown(!isShown)} >Toggle</button> :
            <button onClick={() => setIsShown(!isShown)} >Перемикач</button>}
        {isShown ? <p>Content</p> : <p>Контент</p>}
    </div>
}

