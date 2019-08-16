import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { fetchUser } from '../../actions/session_actions';
// import SourceArticlesShow from './source_articles_show'
// import Follow from "../../../../models/Follow"
class UserNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser);
    }

    renderFollows() {

            // <Link to={`/sources/articles`}><li key={source._id}>{source.followName}</li></Link>
                    // <button onClick={() => this.props.history.push(`/sources/articles`)}>{source.followName}</button>  
        return (
            <ul>    
                {this.props.follows.map(source =>
                <li key={source._id}>
                    {/* <SourceArticlesShow source={source} /> */}
                    <Link to={ { pathname: `/${source.followName}/articles`, state: {source: source} }}>{source.followName}</Link>
                </li>
                )}
            </ul>
        )
    }

    render() {
        if (!this.props.follows) {
            return null;
        }
        return (
            <div className="user-bar-container" >
                <Link to={`/newsfeed`}>Today</Link>
                <Link to={`/${this.props.currentUserId}/read_later`}>Read later</Link>
                <Link to={`/${this.props.currentUserId}/filters`}>Filters</Link>
                <div>Feeds <Link to={`/${this.props.currentUserId}/organize`}>⚙︎</Link></div>
                {this.renderFollows()}
                  
                <Link to={`/newsfeed/add`}>+ ADD CONTENT</Link>
            </div>
        );
    }
}


const mstp = state => {
    const user = state.session.user;
    let follows;
    if (!user.sourcesArray) {
        follows = user.followedSources.map(id => state.entities.follows[id] )
    }

    return {
        isAuthenticated: state.session.isAuthenticated,
        currentUserId: state.session.user.id,
        currentUser: state.session.user,
        follows: follows
    }
}

const mdtp = dispatch => ({
    fetchUser: user => dispatch(fetchUser(user)), 
})

export default withRouter(connect(mstp, mdtp)(UserNavBar));