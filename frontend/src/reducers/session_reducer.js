import { RECEIVE_USER_LOGOUT,
   RECEIVE_CURRENT_USER,
   // RECEIVE_USER_SIGN_UP,
} from '../actions/session_actions';
import { RECEIVE_NEW_FOLLOW, DELETE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge'
import { STATES } from 'mongoose';


const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function (state = initialState, action) {
   // debugger;
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
            if (state.user.followedSources[i] != action.follow.data._id) {
               nFollows.push(state.user.followedSources[i]);
            }
         }
         newState = merge({}, state);
         // debugger;
         newState['user'].followedSources = nFollows;
         // debugger;
         return newState;

      // case REMOVE_LIKE:
      //    // debugger;
      //    let oLikes = state[action.like.photo_id].like_ids;
      //    nLikes = [];
      //    for (let i = 0; i < oLikes.length; i++) {
      //       if (oLikes[i] !== action.like.id) {
      //          nLikes.push(oLikes[i]);
      //       };
      //    };
      //    newState = merge({}, state);
      //    newState[action.like.photo_id].like_ids = nLikes;
      //    return newState;

      case RECEIVE_NEW_FOLLOW:
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

