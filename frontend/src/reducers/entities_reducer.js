import { combineReducers } from 'redux';
import follows from './follows_reducer';
import articles from './articles_reducer';
import readLater from './read_later_reducer'

const entitiesReducer = combineReducers({
    follows,
    articles,
    readLater
})

export default entitiesReducer