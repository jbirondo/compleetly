import React from 'react';
import { withRouter } from 'react-router';

const Results = ({results}) => {
    const options = results.map((res, i) => {
        // debugger;
        return <li key={i}>
            {res.title}
            {res.author}
            {res.description}
        </li>
    })
    return <ul>{options}</ul>
}

export default withRouter(Results);