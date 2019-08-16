import { RECEIVE_CURRENT_ARTICLES, RECEIVE_CATEGORY_ARTICLES } from '../actions/source_articles_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
    switch(action.type) {
        case RECEIVE_CURRENT_ARTICLES:
            // return action.articles.data.articles;
            return merge({}, state, action.articles.data.articles);
        case RECEIVE_CATEGORY_ARTICLES:
            // return action.articles.data.articles;
            return action.articles.data.sources
        default:
            return state;
    }
}

