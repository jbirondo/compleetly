import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../actions/source_articles_actions';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('c74b69f1594f4080902981643aa178df');

class GeneralFeed extends React.Component {
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
            'category=general&' +
            'apiKey=c74b69f1594f4080902981643aa178df';
        const req = new Request(url);
        this.props.fetchCategories(req);
    }


    componentDidUpdate() {
        this.articles = null;  
    }

    render() {
        // debugger
        let articles;
        articles = this.state.articles.map((article, i) => {
            // debugger;
            let followName = []; // ['bloomberg', 'nbc', 'cnbc']
            Object.values(this.props.entities.follows).forEach(follow => followName.push(follow.followName));

            let follows = [];
            Object.values(this.props.entities.follows).forEach(follow => follows.push(follow));

            follows.forEach(follow => {
                if (follow.followName.includes(article.name)) {
                    article.followId = follow._id;
                }
            })

            // debugger;
            if (!!followName.includes(article.name)) {
                return (<li key={i}>{article.name} {article.url}
                    <button onClick={() => this.props.deleteFollow({ followId: article.followId, currentUserId: this.props.currentUserId })}>UNFOLLOW ME</button>
                </li>)
            } else {
                return (<li key={i}>{article.name} {article.url}
                    <button onClick={() => this.props.createFollow({ followName: article.name, followURL: article.url, currentUserId: this.props.currentUserId })}>Follow ME!</button>
                </li>)
            }
        })


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
    articles: state.entities.articles,
    entities: state.entities
})

const mdp = dispatch => ({
    createFollow: follow => dispatch(createFollow(follow)),
    fetchCategories: req => dispatch(fetchCategories(req)),
    deleteFollow: follow => dispatch(deleteFollow(follow))
})

export default withRouter(connect(msp, mdp)(GeneralFeed));
