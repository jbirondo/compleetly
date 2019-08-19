import React from 'react';
import { connect } from 'react-redux';
import { deleteReadLater } from '../../actions/read_later_actions'
import { fetchUser } from '../../actions/session_actions';
import './readLater.css'
class ReadLater extends React.Component {
    constructor(props) {
        super(props);
        this.state = { read: false };
        // this.addReadClass = this.addReadClass.bind(this);
        this.disableWarning = null;
    }
    // addReadClass() {
    //     this.setState({ read: !this.state.read });
    // }

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
            please = this.props.readArray.map(source => 
                <li key={source._id} 
                    className="read-later-li">
                    <a 
                        // onClick={this.addReadClass}
                        target="_blank"
                        className="read-later-a-tag"
                        href={source.readLaterURL}>
                        <div 
                            className="read-later-li-a-tag-div-name">
                            {source.readLaterName}
                        </div>
                        <div 
                            className="read-later-li-a-tag-div-description">
                            {source.readLaterDescription}
                        </div>
                    </a>
                    <button onClick={() => this.props.deleteReadLater({
                        reader: this.props.currentUserId,
                        readLaterId: source._id
                    })}
                    className="read-later-delete-button w3-button w3-black">X</button>
                </li>
            )
        }
        
            return (
                    <ul className="read-later-ul">
                        {please}
                    </ul>
            )

    }

    render() {

        if (!this.props.readArray) {
            return null
        }

        const display = (this.props.readArray.length > 0) ? (
            <div className="read-later-list-container">
                <h4 className="read-later-latest-header">LATEST</h4>
                {this.renderReadLater()}
                <h4 className="read-later-latest-header">END OF FEED</h4>

            </div>
        ):(
            <div className="empty-read-later-container">
                <h2 className="empty-read-later-header">No Read Later Stories Yet</h2>
                <div className="empty-read-later-msg">The articles you want to read later will be here</div>
            </div>
        )
        return (
            <div className="read-later-container">
                <header className="read-later-header">Read later</header>
                {display}
            </div>
        )
    }
}


const mstp = state => {

    return {
        isAuthenticated: state.session.isAuthenticated,
        currentUserId: state.session.user.id,
        currentUser: state.session.user,
        readArray: state.session.user.readArray
    }
}

const mdtp = dispatch => ({
    fetchUser: user => dispatch(fetchUser(user)),
    deleteReadLater: readLater => dispatch(deleteReadLater(readLater))
})

export default connect(mstp, mdtp)(ReadLater);
