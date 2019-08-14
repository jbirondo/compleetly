import { RECEIVE_NEW_FOLLOW} from '../actions/follow_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
    switch(action.type) {
        case RECEIVE_NEW_FOLLOW:
            return merge({}, state, action.follow.data)
        default: 
            return state
    }
}
