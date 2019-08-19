import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import tech from './tech.png';
import sports from './sports.png';
import science from './science.png';
import health from './health.png';
import general from './general.png';
import entertainment from './entertainment.png';
import business from './business.png';
import rss from '../main/icons/rss-feed-icon.png';
import './add_content.css';

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('0fe3c7ee9aa4446d94b11b44f28c4b74');

class AddContent extends React.Component {
    constructor(props) {
        super(props);
        this.disableWarning = null;
  
    };

    render() {

        return (
            <div className='add-content-page-container'>
                <div className='rss-icon-container'>
                    
                    <div className="add-content-rss-sources-item" ><img alt=" " src={rss} className="add-content-rss-sources-item-image" /> Sources to Follow</div>
                </div>
                <div className='add-content-discover-header'>Discover the best sources for any topic</div>
                <div className='add-content-categories-container'>
                    <Link to='/newsfeed/technology'><img className='add-content-tech-image' alt=' ' src={tech} /><div className='category-title'>Tech></div></Link>
                    <Link to='/newsfeed/sports'><img className='add-content-sports-image' alt=' ' src={sports} />Sports</Link>
                    <Link to='/newsfeed/science'><img className='add-content-science-image' alt=' ' src={science} />Science</Link>
                    <Link to='/newsfeed/health'><img className='add-content-health-image' alt=' ' src={health} />Health</Link>
                    <Link to='/newsfeed/general'><img className='add-content-general-image' alt=' ' src={general} />General</Link>
                    <Link to='/newsfeed/entertainment'><img className='add-content-entertainment-image' alt=' ' src={entertainment} />Entertainment</Link>
                    <Link to='/newsfeed/business'><div className='category-title-container'><img className='add-content-business-image' alt=' ' src={business} /><div className='category-title'>Business</div></div></Link>
                </div>
            </div>
        )
    }

};

export default withRouter(AddContent)