import React from 'react'

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        console.log('ArticleList constructor')
    }
    componentDidMount() {
        console.log('ArticleList  did Mount')
    }

    render() {
        console.log('ArticleList render')
        return <div className='article-list' style={this.props.style}>
            {this.props.articles.map(article =>{
                return  <div key={article.id} className='article'>
                    <h3>{article.name}</h3>
                    <p>Remained: {article.amount}</p>
                </div>}
          )}
        </div>
    }
}
