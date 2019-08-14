import { RECEIVE_NEW_FOLLOW} from '../actions/follow_actions';
import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
    switch(action.type) {
        case RECEIVE_NEW_FOLLOW:
            return merge({}, state, {[action.follow.data._id]: action.follow.data});
        case RECEIVE_CURRENT_USER:
            // debugger;
            return state;
        default: 
            return state;
    }
}
