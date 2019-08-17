import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { fetchUser } from '../../actions/session_actions';
import {deleteFollow} from '../../actions/follow_actions';
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
                Object.values(this.props.follows).forEach(follow => followName.push(follow.followName));

                Object.values(this.props.follows).forEach(follow => follows.push(follow));

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
                        <li className='user-nav-feed-follow-item' key={source._id}>
                            {/* <SourceArticlesShow source={source} /> */}
                            <Link to={ { pathname: `/${source.followName}/articles`, state: {source: source} }}>{source.followName}</Link>
                                <button className='user-nav-unfollow-btn' onClick={() => this.props.deleteFollow({ followId: source._id,   currentUserId: this.props.currentUserId })}>Unfollow</button>
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
                    <Link to={`/newsfeed`}><div className='user-nav-today'>Today</div></Link>
                    <Link to={`/${this.props.currentUserId}/read_later`}><div className='user-nav-today'>Read later</div></Link>
                    <Link to={`/${this.props.currentUserId}/filters`}><div className='user-nav-today'>Filters</div></Link>
                    
                    <div className='user-nav-feeds'>
                        <div className='user-nav-feeds-title'>Feeds
                            <Link to={`/${this.props.currentUserId}/organize`}><div className='user-nav-settings'>⚙︎</div></Link>
                        </div>
                        {this.renderFollows()}
                    </div>
                    <Link to={`/newsfeed/add`}><div className='user-nav-add-content'>+ ADD CONTENT</div></Link>
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