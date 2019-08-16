import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('c74b69f1594f4080902981643aa178df');

class BusinessFeed extends React.Component {
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
            'category=business&' +
            'apiKey=c74b69f1594f4080902981643aa178df';
        const req = new Request(url);
        axios(req).then(res => {
            this.setState({ articles: res.data.sources })
            console.log(res)
        })
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
                if (follow.followName.includes(article.name)){
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
                {articles}
            </div>
        )
    }

};


const msp = state => {
    // debugger
    return ({
    // errors: state.errors.follows // don't have error reducers set up
    currentUserId: state.session.user.id,
    currentUser: state.session.user,
    entities: state.entities
    // state.session.user.followedSources = followedSources: (4) ["5d557bc811d45e62ed028963", "5d557bd911d45e62ed028965", "5d557bf111d45e62ed028966", "5d557c0e11d45e62ed028967"]
        // state.entities.follows
        // Object.keys(state.entities.follows) = (4) ["5d557bc811d45e62ed028963", "5d557bd911d45e62ed028965", "5d557bf111d45e62ed028966", "5d557c0e11d45e62ed028967"]
        // Object.values(state.entities.follows).forEach(follow => console.log(follow.followName)) = NHL News Ars Technica IGN;
})}

const mdp = dispatch => ({
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: follow => dispatch(deleteFollow(follow))
})

export default withRouter(connect(msp, mdp)(BusinessFeed));
