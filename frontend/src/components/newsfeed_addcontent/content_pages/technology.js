import React from 'react';
import { withRouter, Link } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import { fetchCategories } from '../../../actions/source_articles_actions';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('c74b69f1594f4080902981643aa178df');

class TechnologyFeed extends React.Component {
    constructor(props) {
        super(props);
        this.articles = null;
        // this.state = {
        //     articles: []
        // }
    };
    //this.props.fetchArticles
    componentDidMount() {
        const url = 'https://newsapi.org/v2/sources?' +
            'country=us&' +
            'category=technology&' +
            'apiKey=c74b69f1594f4080902981643aa178df';
        const req = new Request(url);
        this.props.fetchCategories(req);
        // this.getArticles();
    }

    componentDidUpdate() {
      this.articles = null;  
    }
    // getArticles() {
        //make thunk action creator for articles and add/clear out every time you receieve all articles


        // axios(req).then(res => {
        //     this.setState({ articles: res.data.sources })
            // console.log(res.data.sources) /// when we comment out line 31 and comment back in 30
            // we get rid of the memory leak error, need articles slice of state
        // })
    // }


    render() {
        // this.articles = Object.values(this.props.articles);
        // if (this.articles.length > 0 && this.articles) {
        //     this.articles = this.articles.map((article, i) => {
        //         return <li key={i}>{article.name} {article.url}
        //             <button onClick={() => this.props.createFollow({ source: article.id, followName: article.name, followURL: article.url, currentUserId: this.props.currentUserId })}>Follow ME!</button>
        //         </li>
        //     })
        // }
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

export default withRouter(connect(msp, mdp)(TechnologyFeed));