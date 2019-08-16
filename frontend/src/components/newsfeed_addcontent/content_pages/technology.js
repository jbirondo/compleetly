import React from 'react';
import { withRouter } from 'react-router';
// import axios from 'axios';
import { connect } from 'react-redux'
import { fetchCategories } from '../../../actions/source_articles_actions';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';
import Articles from './articles'

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
        // this.articles = null;
        const url = 'https://newsapi.org/v2/sources?' +
            'country=us&' +
            'category=technology&' +
            'apiKey=0fe3c7ee9aa4446d94b11b44f28c4b74';
        const req = new Request(url);
        this.props.fetchCategories(req).then(res => 
            this.setState({articles: this.props.articles})    
        );
    }

    render() {
        
        //     this.articles = this.articles.map((article, i) => {
        //         return <li key={i}>{article.name} {article.url}
        //             <button onClick={() => this.props.createFollow({ source: article.id, followName: article.name, followURL: article.url, currentUserId: this.props.currentUserId })}>Follow ME!</button>
        //         </li>
        //     })
        // }
        // let articles;
        // this.articles = Object.values(this.props.articles);
        // let followName = []; // ['bloomberg', 'nbc', 'cnbc']
        // let follows = [];

        // if (this.articles.length > 0 && this.articles) {
        //     this.articles = this.articles.map((article, i) => {
        //         Object.values(this.props.follows).forEach(follow => followName.push(follow.followName));

        //         Object.values(this.props.follows).forEach(follow => follows.push(follow));

        //         follows.forEach(follow => {
        //             if (follow.followName.includes(article.name)) {
        //                 article.followId = follow._id;
        //             }
        //         })

        let articles;
        if ((this.state.articles.length === 0) || !this.props.follows) {
            return null;
        } else {
            articles = <Articles articles={this.state.articles} propFollows={this.props.follows}/>
        }
         
        return ( // article componenet that only receives articles as props, only render this component if I have these props. have render component do NO fetching logic
        // only pass articles to render component when I have successfully fetched
            <div>
                {articles}
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
})

const mdp = dispatch => ({
    createFollow: follow => dispatch(createFollow(follow)),
    fetchCategories: req => dispatch(fetchCategories(req)),
    deleteFollow: follow => dispatch(deleteFollow(follow))
})

export default withRouter(connect(msp, mdp)(TechnologyFeed));