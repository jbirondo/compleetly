import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createReadLater } from "../../actions/read_later_actions";
import { deleteReadLater } from "../../actions/read_later_actions";
import axios from 'axios';
// import { link } from 'fs';
// import { link } from 'fs';
import NewsFeedIndexItem from './news_article_index_item'
import addreadlatericon from "../user_nav_bar/icons/add-read-later-icon.png"
import './newsfeed.css';
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('0fe3c7ee9aa4446d94b11b44f28c4b74');

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
        // this.markedForReadLater = false;
    };

    componentDidMount() {
        this.getArticles();
    }
    
    getArticles() {
        const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=e7cee6371dc3402f80bc03f623f8c410';
        const req = new Request(url);
        axios(req).then(res => {
            this.setState({articles: res.data.articles})
            // console.log(res)
        })
    }
    
    // let articles;
    // this.getArticles().then(res => {
    //     articles = res.data.articles.map((article, i) => (<li key={i}>{article.title}</li>))
    // })
    
    
    render() {
        // if (!this.props.user) {
        //     return null
        // }
       
    
        // debugger;
        let articles;
        // console.log(readLaterArray)
        
        articles = this.state.articles.map((article, i) => {
            // debugger;
            return <NewsFeedIndexItem article={article} key={i} />
        })
               
        return (
            
            <div className="today-container">
                <h1 className='today-header'>Today</h1>
                <h3 className='desc-header'>The insights you need to get the inside edge</h3>
                {articles}
            </div>
        )
    }

};

const msp = state => {
    // debugger;
    return {
        user: state.session.user
    }
}

const mdp = dispatch => ({
  createReadLater: readLater => dispatch(createReadLater(readLater)),
  deleteReadLater: readLater => dispatch(deleteReadLater(readLater))
});
export default withRouter(connect(msp,mdp)(NewsFeed));




