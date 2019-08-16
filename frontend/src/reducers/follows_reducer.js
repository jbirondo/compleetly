import { RECEIVE_NEW_FOLLOW, DELETE_FOLLOW} from '../actions/follow_actions';
import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
    let newState;
    switch(action.type) {
        case RECEIVE_NEW_FOLLOW:
            return merge({}, state, {[action.follow.data._id]: action.follow.data});
        case DELETE_FOLLOW:
            newState = merge({}, state);
            delete newState[action.follow.data._id];
            return newState;
        case RECEIVE_CURRENT_USER:
            let tempState;
            newState = merge({}, state);
            tempState = {};
            if (action.currentUser.sourcesArray){
                action.currentUser.sourcesArray.forEach( (source, i) => (
                    tempState[action.currentUser.sourcesArray[i]._id] = source
                ))
            }
            return merge({}, newState, tempState)
        
        default: 
            return state;
    }
}
