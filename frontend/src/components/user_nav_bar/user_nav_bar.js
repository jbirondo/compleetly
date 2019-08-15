import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// import Follow from "../../../../models/Follow"
class UserNavBar extends React.Component {
    constructor(props) {
        super(props);

    }
    renderFollows() {
        // debugger
        return (
            <ul>    
                {this.props.currentUser.followedSources.map(
                    source =>   
                    <li key={source}>{source}</li>
                )}
            </ul>
        )
    }

    render() {
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
    // debugger
    return {
        isAuthenticated: state.session.isAuthenticated,
        currentUserId: state.session.user.id,
        currentUser: state.session.user
    }
}

const mdtp = dispatch => {

}

export default connect(mstp, mdtp)(UserNavBar);