import { RECEIVE_NEW_READ_LATER } from '../actions/read_later_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_NEW_READ_LATER:
            // debugger
            return merge({}, state, { [action.readLater.data._id]: action.readLater.data });
        case RECEIVE_CURRENT_USER:
            let tempState;
            let newState;
            newState = merge({}, state);
            tempState = {};
            // debugger;
            if (action.currentUser.readArray) {
                // debugger
                action.currentUser.readArray.forEach((source, i) => {
                    // debugger
                    tempState[action.currentUser.readArray[i]._id] = source
                })
            }
            // debugger;
            return merge({}, newState, tempState)

        default:
            return state;
    }
}
