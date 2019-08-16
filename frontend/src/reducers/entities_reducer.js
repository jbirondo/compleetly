import { combineReducers } from 'redux';
import follows from './follows_reducer';
import articles from './articles_reducer';

const entitiesReducer = combineReducers({
    follows,
    articles
})

export default entitiesReducer