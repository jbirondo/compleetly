import React from 'react';
import { withRouter } from 'react-router';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger;
        // if (!this.props.location.state) {
        //     return null;
        // }
        // debugger;
        const options = this.props.location.state.articles.map((res, i) => {
            // debugger;
            return <li key={i}>
                {res.title}
                {res.author}
                {res.description}
            </li>
        })
        return <ul>{options}</ul>
    }
}

export default withRouter(Results);