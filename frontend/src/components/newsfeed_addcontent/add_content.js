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
                <Link className='add-content-selectors' to='/newsfeed/technology'>CLICK ME FOR TECHNOLOGY ARTICLES</Link>
                <Link className='add-content-selectors' to='/newsfeed/sports'>CLICK ME FOR SPORTS ARTICLES</Link>
                <Link className='add-content-selectors' to='/newsfeed/science'>CLICK ME FOR SCIENCE ARTICLES</Link>
                <Link className='add-content-selectors' to='/newsfeed/health'>CLICK ME FOR HEALTH ARTICLES</Link>
                <Link className='add-content-selectors' to='/newsfeed/general'>CLICK ME FOR GENERAL ARTICLES</Link>
                <Link className='add-content-selectors' to='/newsfeed/entertainment'>CLICK ME FOR ENTERTAINMENT ARTICLES</Link>
                <Link className='add-content-selectors' to='/newsfeed/business'>CLICK ME FOR BUSINESS ARTICLES</Link>
            </div>
        )
    }

};

export default withRouter(AddContent)