import { combineReducers } from 'redux'
import follows from './follows_reducer'
import readLater from './read_later_reducer'

const entitiesReducer = combineReducers({
    follows,
    readLater
})

export default entitiesReducer