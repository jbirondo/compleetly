import { combineReducers } from 'redux'
import follows from './follows_reducer'

const entitiesReducer = combineReducers({
    follows
})

export default entitiesReducer