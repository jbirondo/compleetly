import React from 'react';
import { withRouter, Link } from 'react-router-dom';


// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('c74b69f1594f4080902981643aa178df');

class AddContent extends React.Component {
    constructor(props) {
        super(props);
        this.disableWarning = null;
        // this.state = {
        //     articles: []
        // }
    };

    // componentDidMount() {
    //     this.getArticles();
    // }

    // getArticles() {
    //     const url = 'https://newsapi.org/v2/top-headlines?' +
    //         'country=us&' +
    //         'apiKey=c74b69f1594f4080902981643aa178df';
    //     const req = new Request(url);
    //     axios(req).then(res => {
    //         this.setState({ articles: res.data.articles })
    //         console.log(res)
    //     })
    // }

    // let articles;
    // this.getArticles().then(res => {
    //     articles = res.data.articles.map((article, i) => (<li key={i}>{article.title}</li>))
    // })

    render() {
        // let articles;
        // articles = this.state.articles.map((article, i) => <li key={i}>{article.title} {article.author}{article.content}</li>)
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
                {/* {articles} */}
                <Link to='/newsfeed/technology'>CLICK ME FOR TECHNOLOGY ARTICLES</Link>
                <Link to='/newsfeed/sports'>CLICK ME FOR SPORTS ARTICLES</Link>
                <Link to='/newsfeed/science'>CLICK ME FOR SCIENCE ARTICLES</Link>
                <Link to='/newsfeed/health'>CLICK ME FOR HEALTH ARTICLES</Link>
                <Link to='/newsfeed/general'>CLICK ME FOR GENERAL ARTICLES</Link>
                <Link to='/newsfeed/entertainment'>CLICK ME FOR ENTERTAINMENT ARTICLES</Link>
                <Link to='/newsfeed/business'>CLICK ME FOR BUSINESS ARTICLES</Link>
            </div>
        )
    }

};

export default withRouter(AddContent)