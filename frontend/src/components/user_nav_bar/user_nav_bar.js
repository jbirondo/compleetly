import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { fetchUser } from '../../actions/session_actions';
import {deleteFollow} from '../../actions/follow_actions';
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
                        <li key={source._id}>
                            {/* <SourceArticlesShow source={source} /> */}
                            <Link to={ { pathname: `/${source.followName}/articles`, state: {source: source} }}>{source.followName}</Link>
                                <button onClick={() => this.props.deleteFollow({ followId: source._id,   currentUserId: this.props.currentUserId })}>Unfollow</button>
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
        // debugger
        return (
            <div className="user-bar-container" >
                <Link to={`/newsfeed`}>Today</Link>
                <Link to={`/${this.props.currentUserId}/read_later`}>Read later</Link>
                <Link to={`/${this.props.currentUserId}/filters`}>Filters</Link>
                <Link to={`/${this.props.currentUserId}/read_later`}>Read Later</Link>
                <div>Feeds <Link to={`/${this.props.currentUserId}/organize`}>⚙︎</Link></div>
                {this.renderFollows()}
                
                <Link to={`/newsfeed/add`}>+ ADD CONTENT</Link>
            </div>
        );
    }
}


const mstp = state => {
    // debugger
    const user = state.session.user;
    let follows;
    // debugger;
    let readLater;
    if (!user.sourcesArray) {
        follows = user.followedSources.map(id => state.entities.follows[id] )
    }
    // debugger
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