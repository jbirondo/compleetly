import React from 'react';
import { withRouter, Link } from 'react-router-dom';


// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('0fe3c7ee9aa4446d94b11b44f28c4b74');

class AddContent extends React.Component {
    constructor(props) {
        super(props);
        this.disableWarning = null;
  
    };


    render() {

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