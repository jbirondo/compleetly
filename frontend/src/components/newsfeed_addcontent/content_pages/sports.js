import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../actions/source_articles_actions';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';

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

        //     this.articles = this.articles.map((article, i) => {
        //         return <li key={i}>{article.name} {article.url}
        //             <button onClick={() => this.props.createFollow({ source: article.id, followName: article.name, followURL: article.url, currentUserId: this.props.currentUserId })}>Follow ME!</button>
        //         </li>
        //     })
        // }
        // debugger
        // let articles;
        this.articles = Object.values(this.props.articles);
        let followName = []; // ['bloomberg', 'nbc', 'cnbc']
        let follows = [];

        if (this.articles.length > 0 && this.articles) {
            this.articles = this.articles.map((article, i) => {
                // debugger;
                Object.values(this.props.follows).forEach(follow => followName.push(follow.followName));

                Object.values(this.props.follows).forEach(follow => follows.push(follow));

                follows.forEach(follow => {
                    if (follow.followName.includes(article.name)) {
                        article.followId = follow._id;
                    }
                })

                if (!!followName.includes(article.name)) {
                    return <li key={i}>{article.name} {article.url}
                        <button onClick={() => this.props.deleteFollow({ followId: article.followId, currentUserId: this.props.currentUserId })}>Unfollow</button>
                    </li>
                } else {
                    return <li key={i}>{article.name} {article.url}
                        <button onClick={() => this.props.createFollow({ source: article.id, followName: article.name, followURL: article.url, currentUserId: this.props.currentUserId })}>Follow!</button>
                    </li>
                }
            });
        };

        return (
            <div>
                {this.articles}
            </div>
        )
    }
}

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

export default withRouter(connect(msp, mdp)(SportsFeed));

