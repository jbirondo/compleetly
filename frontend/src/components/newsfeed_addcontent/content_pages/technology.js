import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('c74b69f1594f4080902981643aa178df');

class TechnologyFeed extends React.Component {
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
        // const url = 'https://newsapi.org/v2/sources?' +
        //     'country=us&' +
        //     'category=technology&' +
        //     'apiKey=c74b69f1594f4080902981643aa178df';
        // const req = new Request(url);
        // axios(req).then(res => {
        //     this.setState({ articles: res.data.sources })
        //     console.log(res)
        // })
    }


    render() {
        let articles;
        articles = this.state.articles.map((article, i) => <li key={i}>{article.name} {article.description} {article.category}</li>)

        return (
            <div>
                {articles}
            </div>
        )
    }

};

export default withRouter(TechnologyFeed)