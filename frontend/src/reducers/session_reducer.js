import { RECEIVE_USER_LOGOUT,
   RECEIVE_CURRENT_USER,
   // RECEIVE_USER_SIGN_UP,
} from '../actions/session_actions';
import { RECEIVE_NEW_READ_LATER, DELETE_READ_LATER } from '../actions/read_later_actions';
import { RECEIVE_NEW_FOLLOW, DELETE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge'
// import { STATES } from 'mongoose';


const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function (state = initialState, action) {

   let newState;
   Object.freeze(state);
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

      case DELETE_FOLLOW:
         let oFollows = state.user.followedSources;
         let nFollows = [];
         // debugger;
         for (let i = 0; i < oFollows.length; i++) {
            if (state.user.followedSources[i] !== action.follow.data._id) {
               nFollows.push(state.user.followedSources[i]);
            }
         }
         newState = merge({}, state);
         // debugger;
         newState['user'].followedSources = nFollows;
         // debugger;
         return newState;

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
         reads.push(action.readLater.data)
         newState.user.readArray = reads
         return newState
      case DELETE_READ_LATER:
         // debugger
         let oReads = state.user.readArray;
         let nReads = [];
         for (let i = 0; i < oReads.length; i++) {
            // debugger;
            if (state.user.readArray[i]._id !== action.readLater.data._id) {
               nReads.push(state.user.readArray[i]);
            }
         }
         newState = merge({}, state);
         newState['user'].readArray = nReads;
         return newState;
      default:
         return state;
   }
}

