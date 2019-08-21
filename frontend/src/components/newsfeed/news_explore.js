import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { createReadLater } from "../../actions/read_later_actions"
import axios from 'axios';
// import { link } from 'fs';
// import { link } from 'fs';
import addreadlatericon from "../user_nav_bar/icons/add-read-later-icon.png"
import './newsfeed.css';
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('0fe3c7ee9aa4446d94b11b44f28c4b74');

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    };

    componentDidMount() {
        this.getArticles();
    }
    
    getArticles() {
        const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=e7cee6371dc3402f80bc03f623f8c410';
        const req = new Request(url);
        axios(req).then(res => {
            this.setState({articles: res.data.articles})
            // console.log(res)
        })
    }
    
    // let articles;
    // this.getArticles().then(res => {
    //     articles = res.data.articles.map((article, i) => (<li key={i}>{article.title}</li>))
    // })
    
    
    render() {
        // if (!this.props.user) {
        //     return null
        // }
        let readLaterArray;

        if (!this.props.user.readLater){
            readLaterArray = []
        } else {
            readLaterArray = this.props.user.readLater.map(ele => {return ele.readLaterURL});
        }

        let articles;
        articles = this.state.articles.map((article, i) => {
            let image;
            if (article.urlToImage) {
                image = <img alt={article.title} className='news-explore-img' src={article.urlToImage} />
            } else {
                image = <img alt='stock-photograph' className='news-explore-img' src='https://images.unsplash.com/photo-1560177112-fbfd5fde9566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' />
            }

            let compName;
            if (article.source.name && article.author) {
                compName = ` | ${article.source.name}`;
            } else if (article.source.name) {
                compName = `by ${article.source.name}`
            } else {
                compName = '';
            }

            let author;
            if (article.author) {
                author = <h3 className='news-explore-author'>by {article.author}</h3>
                author = <h3 className='news-explore-author'>by {article.author} {compName}</h3>
            } else {
                author = <div></div>
                author = <h3 className='news-explore-author'>{compName}</h3>
            }

            let description;
            if (article.description === null) {
                description = <p className='news-explore-content'>{article.content}</p>
            } else if (article.description.length > 100) {
                description = <p className='news-explore-content'>{article.description}</p>
            } else if (article.content === null) {
                description = <p className='news-explore-content'>{article.description}</p>
            } else if (article.content.includes('+')) {
                description = <p className='news-explore-content'>{article.content.slice(0, -13)}</p>
            } else {
                description = <p className='news-explore-content'>{article.content}</p>
            }

            let button;
            button = <button 
                        onClick={() => this.props.createReadLater({
                            readLaterURL: article.url,
                            readLaterName: article.source.name,
                            readLaterDescription: article.description,
                            reader: this.props.user.id
                        })}
                            className="source-read-later-button">
                            <img 
                                src={addreadlatericon}
                                className="add-source-read-later-icon"
                                alt=" "
                                 />
                        </button>



            return (
                <li key={i} className='news-explore-li'>
                    <a target='_blank' rel="noopener noreferrer" href={article.url} className='a-tag'>
                    <div className='img-div'>
                        {image}
                    </div>
                    <div className='title-author-desc-div'>
                        <h2 className='news-explore-title'>{article.title}</h2>
                        {author}
                        {description}
                    </div>
                    </a>
                    {button}
                    {/* <button onClick={() => this.props.createReadLater({
                        readLaterURL: article.url,
                        readLaterName: article.source.name,
                        readLaterDescription: article.description,
                        reader: this.props.user.id
                    })}>Read Later</button> */}
                </li>
            )
        })
        
        
        
        
        // var url = 'https://newsapi.org/v2/top-headlines?' +
        //     'country=us&' +
        //     'apiKey=0fe3c7ee9aa4446d94b11b44f28c4b74';
        // var req = new Request(url);
        // fetch(req)
        //     .then(function (response) {
        //         console.log(response.json());
        //         console.log(req.body);
        //         console.log(response);
        //         console.log(response.url);
        //         console.log(response.body);
        //     })

        // let articles;
        // fetch(req)
        //     .then((res) => {
        //         return res.json();
        //     }).then( res => (console.log(res)))
        // let articles = axios(req).then((res) => (
            // console.log(res.data.articles)
            // let articles = res.data.articles
            // res.data.articles.map((article, i) => {
            //     return <li key={i}>{article.title}</li>
        //     })
        // ))
        

        // console.log(articles)
        // console.log(articles().then(res => (res.data.articles)))
        // articles = articles.map(article => (
        //     <li key={article.id}>{article.title}</li>
        // ))
        // console.log(articles)
        return (
            
            <div className="today-container">
                <h1 className='today-header'>Today</h1>
                <h3 className='desc-header'>The insights you need to get the inside edge</h3>
                {articles}
            </div>
        )
    }

};

const msp = state => {
    return {
        user: state.session.user
    }
}

const mdp = dispatch => ({
    createReadLater: readLater => dispatch(createReadLater(readLater)),
})
export default withRouter(connect(msp,mdp)(NewsFeed));