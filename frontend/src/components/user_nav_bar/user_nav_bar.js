import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { receiveCurrentUser } from '../../actions/session_actions';
// import Follow from "../../../../models/Follow"
class UserNavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // debugger;
        this.props.receiveCurrentUser(this.props.currentUser);
    }

    renderFollows() {
        // debugger

        return (
            <ul>    
                {this.props.follows.map(source =>   
                    <li key={source._id}><a href={source.followURL}>{source.followName}</a></li>
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
                <Link to={`/${this.props.currentUserId}/today`}>Today</Link>
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
    // debugger;
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
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user)), 
})

export default connect(mstp, mdtp)(UserNavBar);