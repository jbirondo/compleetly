import { RECEIVE_USER_LOGOUT,
   RECEIVE_CURRENT_USER,
   RECEIVE_USER_SIGN_UP,
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function (state = initialState, action) {
   // debugger;
   switch (action.type) {
      case RECEIVE_USER_LOGOUT:
         return {
            isAuthenticated: false,
            user: undefined
         };
      case RECEIVE_CURRENT_USER:
         debugger;
         return {
            ...state,
            isAuthenticated: !!action.currentUser,
            user: action.currentUser
         };
      case RECEIVE_USER_SIGN_UP:
         return {
            ...state, /// do we know what the spread operator on state is doing?
            isAuthenticated: true, // shouldn't this be isAuthenticated?
            user: action.currentUser // not isSignedIn?
         }
      default:
         return state;
   }
}

