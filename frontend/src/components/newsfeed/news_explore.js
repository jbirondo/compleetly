import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
<<<<<<< HEAD
// import { link } from 'fs';
=======
import { link } from 'fs';
import './newsfeed.css';
>>>>>>> f5b4aaa25fe973779a1c74fce33e85ea6db2f811
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('c74b69f1594f4080902981643aa178df');

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
        'apiKey=c74b69f1594f4080902981643aa178df';
        const req = new Request(url);
        axios(req).then(res => {
            this.setState({articles: res.data.articles})
        })
    }
    
    // let articles;
    // this.getArticles().then(res => {
    //     articles = res.data.articles.map((article, i) => (<li key={i}>{article.title}</li>))
    // })


    render() {
        // debugger;
        let articles;
        articles = this.state.articles.map((article, i) => {

            let image;
            if (article.urlToImage) {
                image = <img className='news-explore-img' src={article.urlToImage} />
            } else {
                image = <img className='news-explore-img' src='https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' />
            }

            let author;
            if (article.author) {
                author = <h3 className='news-exlore-author'>by {article.author}</h3>
            } else {
                author = <div></div>
            }

            let description;
            if (article.description === null || article.description.length > 100) {
                description = <p className='news-explore-content'>{article.description}</p>
            } else {
                description = <p className='news-explore-content'>{article.content}</p>
            }


            return (
                <li key={i} className='news-exlore-li'>
                    {image}
                    <h2 className='news-exlore-title'>{article.title}</h2>
                    {author}
                    {description}
                </li>
            )
        })
        
        
        
        
        // var url = 'https://newsapi.org/v2/top-headlines?' +
        //     'country=us&' +
        //     'apiKey=c74b69f1594f4080902981643aa178df';
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
            
            <div>
                {articles}
            </div>
        )
    }

};

export default withRouter(NewsFeed);