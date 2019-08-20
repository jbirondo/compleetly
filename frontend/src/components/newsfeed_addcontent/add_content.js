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
                <div className='add-content-feed-container'>
                    <img alt="" src={rss} className="add-content-rss-sources-item" />
                    Feed
                </div>
                <div className='add-content-discover-header'>Discover the best sources for any topic</div>
                {/* {articles} */}
                <div className='add-content-links-container'>
                    <Link to='/newsfeed/technology' className='tech-content-categories-container-link'>
                        <img className='add-content-tech-image' alt=' ' src={tech} />
                        <div className='tech-image-title'>Tech</div>
                    </Link>
                    <Link to='/newsfeed/sports' className='sports-content-categories-container-link'>
                        <img className='add-content-tech-image' alt=' ' src={sports} />
                        <div className='sports-image-title'>Sports</div>
                    </Link>
                    <Link to='/newsfeed/science' className='science-content-categories-container-link'>
                        <img className='add-content-tech-image' alt=' ' src={science} />
                        <div className='science-image-title'>Science</div>
                    </Link>
                    <Link to='/newsfeed/health' className='health-content-categories-container-link'>
                        <img className='add-content-tech-image' alt=' ' src={health} />
                        <div className='health-image-title'>Health</div>
                    </Link>
                    <Link to='/newsfeed/general' className='general-content-categories-container-link'>
                        <img className='add-content-tech-image' alt=' ' src={general} />
                        <div className='general-image-title'>General</div>
                    </Link>
                    <Link to='/newsfeed/entertainment' className='entertainment-content-categories-container-link'>
                        <img className='add-content-tech-image' alt=' ' src={entertainment} />
                        <div className='entertainment-image-title'>Entertainment</div>
                    </Link>
                    <Link to='/newsfeed/business' className='business-content-categories-container-link'>
                        <img className='add-content-tech-image' alt=' ' src={business} />
                        <div className='business-image-title'>Business</div>
                    </Link>
                    
                </div>
            </div>
        )
    }

};

export default withRouter(AddContent)