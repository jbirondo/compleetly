import { RECEIVE_USER_LOGOUT,
   RECEIVE_CURRENT_USER,
   // RECEIVE_USER_SIGN_UP,
} from '../actions/session_actions';
import { RECEIVE_NEW_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_NEW_READ_LATER } from '../actions/read_later_actions';
import merge from 'lodash/merge'


const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function (state = initialState, action) {
   Object.freeze(state);
   let newState;
   switch (action.type) {
      case RECEIVE_USER_LOGOUT:
         return {
            isAuthenticated: false,
            user: undefined
         };
      case RECEIVE_CURRENT_USER:
         let cUser;
         cUser = action.currentUser;
         delete cUser['sourcesArray']

         return {
            ...state,
            isAuthenticated: !!action.currentUser,
            user: cUser
         };

      case RECEIVE_NEW_FOLLOW:
         let oSources;
         newState = merge({}, state)
         oSources = newState.user.followedSources;
         oSources.push(action.follow.data._id);
         newState.user.followedSources = oSources;
         return newState
      case RECEIVE_NEW_READ_LATER:
         let reads;
         newState = merge({}, state)
         reads = newState.user.readArray
         // debugger
         reads.push(action.readLater.data)
         newState.user.readArray = reads
         return newState
      default:
         return state;
   }
}

