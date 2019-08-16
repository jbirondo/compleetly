import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';
class ReadLater extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser);
    }

    // componentDidUpdate(prevProps){
    //     if (this.props.readArray){
    //         if (this.props.readArray.length !== prevProps.readArray.length) {
    //             this.props.fetchUser(this.props.currentUser);
    //         }
    //     }
    // }

    renderReadLater() {
        let please;
        if (this.props.readArray){
            debugger
          
            please = this.props.readArray.map(source =>   
                <li key={source._id}><a href={source.readLaterURL}>{source.readLaterURL.slice(0, 20)} {source.readLaterDescription.slice(0, 150)}</a></li>
            )
        }
        
            return (
                <ul>
                    {please}
                </ul>
            )

    }

    render() {
        // debugger

        if (!this.props.readArray) {
            return null
        }

        const display = (this.props.readArray.length > 0) ? (
            <div>
                {this.renderReadLater()}
            </div>
        ):(
            <div>
                <div>No Read Later Stories Yet</div>
                <div>The articles you want to read later will be here</div>
            </div>
        )
        return (
            <div>
                <header>Read later</header>
                {display}
            </div>
        )
    }
}


const mstp = state => {

    // debugger
    return {
        isAuthenticated: state.session.isAuthenticated,
        currentUserId: state.session.user.id,
        currentUser: state.session.user,
        readArray: state.session.user.readArray
    }
}

const mdtp = dispatch => ({
    fetchUser: user => dispatch(fetchUser(user)),

})

export default connect(mstp, mdtp)(ReadLater);