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
        Object.values(propFollows).forEach(follow => {
            followName.push(follow.followName);
            follows.push(follow)
        });
    
    

        // Object.values(propFollows).forEach(follow => follows.push(follow));

        follows.forEach(follow => {
            if (follow.followName.includes(article.name)) {
                article.followId = follow._id;
            }
        })

        if (!!followName.includes(article.name)) {
            return <li key={i} className='articles-li'>
                <h2 className='articles-li-title'>{article.name}</h2>
                <p className='articles-li-description'>{article.description}</p>
                <p className='articles-li-url'>{article.url}</p>
                <button className='articles-li-btn' onClick={() => deleteFollow({ followId: article.followId, currentUserId: currentUserId })}>Unfollow</button>
            </li>
        } else {
            debugger;
            return <li key={i} className='articles-li'>
                <h2 className='articles-li-title'>{article.name}</h2>
                <p className='articles-li-description'>{article.description}</p>
                <p className='articles-li-url'>{article.url}</p>
                <button className='articles-li-btn' onClick={() => createFollow({ source: article.id, followName: article.name, followURL: article.url, currentUserId: currentUserId })}>Follow!</button>
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