import React from 'react';
import { withRouter, Link } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import { createFollow } from '../../../actions/follow_actions'
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
        const url = 'https://newsapi.org/v2/sources?' +
            'country=us&' +
            'category=technology&' +
            'apiKey=c74b69f1594f4080902981643aa178df';
        const req = new Request(url);
        axios(req).then(res => {
            this.setState({ articles: res.data.sources })
        })
    }


    render() {
        let articles;
        let followsArr;
        followsArr = Object.values(this.props.follows);
        // followsArr = this.props.currentUser.followedSources;
        articles = this.state.articles.map((article, i) => {
            // debugger;
           return <li key={i}>{article.name} {article.url}
                <button onClick={() => this.props.createFollow({followName: article.name, followURL: article.url, currentUserId: this.props.currentUserId})}>Follow ME!</button>
            </li>
        })

        return (
            <div>
                {articles}
            </div>
        )
    }

};

const msp = state => ({
    // errors: state.errors.follows // don't have error reducers set up
    currentUserId: state.session.user.id,
    currentUser: state.session.user,
    follows: state.entities.follows
})

const mdp = dispatch => ({
    createFollow: follow => dispatch(createFollow(follow)),
})

export default withRouter(connect(msp, mdp)(TechnologyFeed));