import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER } from '../actions/session_actions';

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
         return {
            isAuthenticated: true,
            user: action.user.id
         };
      default:
         return state;
   }
}

