import { RECEIVE_NEW_FOLLOW} from '../actions/follow_actions';
import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
    switch(action.type) {
        case RECEIVE_NEW_FOLLOW:
            return merge({}, state, {[action.follow.data._id]: action.follow.data});
        case RECEIVE_CURRENT_USER:
            let tempState;
            let newState;
            newState = merge({}, state);
            tempState = {};
            // debugger;
            if (action.currentUser.sourcesArray){
                action.currentUser.sourcesArray.forEach( (source, i) => (
                    tempState[action.currentUser.sourcesArray[i]._id] = source
                ))
            }
            // debugger;
            return merge({}, newState, tempState)
        
        default: 
            return state;
    }
}
