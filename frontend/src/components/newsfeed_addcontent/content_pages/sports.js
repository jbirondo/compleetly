import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import { createFollow } from '../../../actions/follow_actions';
import { fetchCategories } from '../../../actions/source_articles_actions';

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('c74b69f1594f4080902981643aa178df');

class SportsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.articles = null;
        // this.state = {
        //     articles: []
        // }
    };

    componentDidMount() {
        // this.getArticles();
        const url = 'https://newsapi.org/v2/sources?' +
            'country=us&' +
            'category=sports&' +
            'apiKey=c74b69f1594f4080902981643aa178df';
        const req = new Request(url);
        this.props.fetchCategories(req);
    }

      componentDidUpdate() {
      this.articles = null;  
    }

    // getArticles() {
      
        // axios(req).then(res => {
        //     this.setState({ articles: res.data.sources })
        //     console.log(res)
        // })
    // }


    render() {
        this.articles = Object.values(this.props.articles);
        if (this.articles.length > 0 && this.articles) {
            this.articles = this.articles.map((article, i) => {
                return <li key={i}>{article.name} {article.url}
                    <button onClick={() => this.props.createFollow({ source: article.id, followName: article.name, followURL: article.url, currentUserId: this.props.currentUserId })}>Follow ME!</button>
                </li>
            })
        }
        return (
            <div>
                {this.articles}
            </div>
        )
    }

};

const msp = state => ({
    // errors: state.errors.follows // don't have error reducers set up
    currentUserId: state.session.user.id,
    currentUser: state.session.user,
    follows: state.entities.follows,
    articles: state.entities.articles
})

const mdp = dispatch => ({
    createFollow: follow => dispatch(createFollow(follow)),
    fetchCategories: req => dispatch(fetchCategories(req))
})

export default withRouter(connect(msp, mdp)(SportsFeed));

