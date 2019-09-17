import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { fetchUser } from '../../actions/session_actions';
import {deleteFollow} from '../../actions/follow_actions';

import todayicon from './icons/logo-icon.png'
import readlatericon from './icons/read-later-icon.png'
import filtericon from './icons/filter-icon.png'
import plusicon from './icons/plus-icon.jpg'

import './user_nav_bar.css'
// import SourceArticlesShow from './source_articles_show'
// import Follow from "../../../../models/Follow"
class UserNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.articles = null;
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser);
    }

    renderFollows() {
        // debugger
        this.articles = Object.values(this.props.articles);
        let followName = []; // ['bloomberg', 'nbc', 'cnbc']
        let follows = [];

        if (this.articles.length > 0 && this.articles) {
            this.articles = this.articles.map((article, i) => {
                // debugger;
                Object.values(this.props.follows).forEach(follow => {
                    followName.push(follow.followName);
                    follows.push(follow);                    
                    });

                // Object.values(this.props.follows).forEach(follow => follows.push(follow));

                follows.forEach(follow => {
                    if (follow.followName.includes(article.name)) {
                        article.followId = follow._id;
                    }
                })
                return [];
            });
        };
            // <Link to={`/sources/articles`}><li key={source._id}>{source.followName}</li></Link>
                    // <button onClick={() => this.props.history.push(`/sources/articles`)}>{source.followName}</button>  
        return (
            <ul>    
                {this.props.follows.map(source => {
                    // debugger
                    return (
                        <li className='user-nav-feed-follow-item-container' key={source._id}>
                            {/* <SourceArticlesShow source={source} /> */}
                            < Link to = { { pathname: `/${source.followName}/articles`, state: {source: source} }}
                                    className='user-nav-feed-follow-item'>
                                    {source.followName}
                            </Link>
                            <button className='user-nav-unfollow-btn' 
                            onClick={() => this.props.deleteFollow({ followId: source._id,   currentUserId: this.props.currentUserId })}>
                                X
                            </button>
                            
                                {/* followId: article.followId, */}
                        </li>
                )})} 
            </ul>
        )
    }
    // renderReadLater() {
    //     return (
    //         <ul>    
    //             {this.props.readLater.map(source =>   
    //                 <li key={source._id}><a href={source.readLaterURL}>{source.readLaterURL}</a></li>
    //         )}
    //         </ul>
    //     )
    // }

    render() {
        if (!this.props.follows) {
            return null;
        }
        return (
            <div className="user-bar-container" >
                <div className='user-nav-bar-elements-container'>
                    <Link to={`/newsfeed`} className='user-nav-today-container element-container'>
                        <img alt='' className ='icon-user-nav-today' src={todayicon}/>
                        <div className='title-user-nav-today'>Today</div>
                    </Link>
                    <Link to={`/${this.props.currentUserId}/read_later`} className='user-nav-read-later-container element-container'>
                        <img alt='' className ='icon-user-nav-read-later' src={readlatericon}/>
                        <div className='title-user-nav-read-later'>Read later</div>
                    </Link>
                    <div className="news-api-shoutout">Live News powered by <a className="news-api-shoutout" href="https://newsapi.org/"> newsapi.org</a></div>
                    {/* <Link to={`/${this.props.currentUserId}/filters`} className='user-nav-filter-container element-container'>
                        <img alt='' className ='icon-user-nav-filter' src={filtericon}/>
                        <div className='title-user-nav-filter'>Filters</div>
                    </Link> */}
                
                    <div className='user-nav-feeds'>
                        <div className='user-nav-feeds-title'>Feeds
                            {/* <Link to={`/${this.props.currentUserId}/organize`}><div className='user-nav-settings'>⚙︎</div></Link> */}
                        </div>
                        {this.renderFollows()}
                    </div>
                    <div className="add-content-container">
                        <Link to={`/newsfeed/add`} className='user-nav-add-content'>
                            <img alt='' src={plusicon} className="plus-icon icon-user"/>
                            <div className="no-underline"> 
                                ADD CONTENT
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}


const mstp = state => {
    // debugger
    const user = state.session.user;
    let follows;
    let readLater;
    if (!user.sourcesArray) {
        follows = user.followedSources.map(id => state.entities.follows[id] )
    }
    // if (!user.readLater) {
    //     readLater = user.readLater.map(id => state.entities.readLater[id] )
    // }


    return {
        articles: state.entities.articles,
        isAuthenticated: state.session.isAuthenticated,
        currentUserId: state.session.user.id,
        currentUser: state.session.user,
        follows: follows,
        readLater: readLater
    }
}

const mdtp = dispatch => ({
    fetchUser: user => dispatch(fetchUser(user)),
    deleteFollow: follow => dispatch(deleteFollow(follow)) 
})

export default withRouter(connect(mstp, mdtp)(UserNavBar));