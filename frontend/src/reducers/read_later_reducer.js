import { RECEIVE_NEW_READ_LATER, DELETE_READ_LATER } from '../actions/read_later_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
    let newState
    switch (action.type) {
        case RECEIVE_NEW_READ_LATER:
            return merge({}, state, { [action.readLater.data._id]: action.readLater.data });
        case RECEIVE_CURRENT_USER:
            let tempState;
            newState = merge({}, state);
            tempState = {};
            if (action.currentUser.readArray) {
                action.currentUser.readArray.forEach((source, i) => {
                    tempState[action.currentUser.readArray[i]._id] = source
                })
            }
            return merge({}, newState, tempState)
        case DELETE_READ_LATER:
            // debugger;
            newState = merge({}, state);
            delete newState[action.readLater.data._id];
            return newState;
        default:
            return state;
    }
}
