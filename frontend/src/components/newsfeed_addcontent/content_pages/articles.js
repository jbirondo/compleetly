import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../../../actions/follow_actions';

const Articles = ({createFollow, deleteFollow, articles, propFollows, currentUserId}) => {

    let followName = []; // ['bloomberg', 'nbc', 'cnbc']
    let follows = [];
    let dispArticles;

    dispArticles = articles.map((article, i) => {
        // debugger;
        Object.values(propFollows).forEach(follow => followName.push(follow.followName));

        Object.values(propFollows).forEach(follow => follows.push(follow));

        follows.forEach(follow => {
            if (follow.followName.includes(article.name)) {
                article.followId = follow._id;
            }
        })

        if (!!followName.includes(article.name)) {
            return <li key={i}>{article.name} {article.url}
                <button onClick={() => deleteFollow({ followId: article.followId, currentUserId: currentUserId })}>Unfollow</button>
            </li>
        } else {
            return <li key={i}>{article.name} {article.url}
                <button onClick={() => createFollow({ source: article.id, followName: article.name, followURL: article.url, currentUserId: currentUserId })}>Follow!</button>
            </li>
        }
        
    });

    return (
        dispArticles
    )
}

const msp = state => ({
    // articles: state.entities.articles
    currentUserId: state.session.user.id,
})

const mdp = dispatch => ({
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: follow => dispatch(deleteFollow(follow))
})

export default withRouter(connect(msp, mdp)(Articles))