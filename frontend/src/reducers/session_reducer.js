import { RECEIVE_USER_LOGOUT,
   RECEIVE_CURRENT_USER,
   // RECEIVE_USER_SIGN_UP,
} from '../actions/session_actions';
import { RECEIVE_NEW_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge'


const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function (state = initialState, action) {
   Object.freeze(state);
   switch (action.type) {
      case RECEIVE_USER_LOGOUT:
         return {
            isAuthenticated: false,
            user: undefined
         };
      case RECEIVE_CURRENT_USER:
         return {
            ...state,
            isAuthenticated: !!action.currentUser,
            user: action.currentUser
         };
      case RECEIVE_NEW_FOLLOW:
         let newState;
         let oSources;
         newState = merge({}, state)
         oSources = newState.user.followedSources;
         oSources.push(action.follow.data._id);
         newState.user.followedSources = oSources;
         return newState
      default:
         return state;
   }
}

