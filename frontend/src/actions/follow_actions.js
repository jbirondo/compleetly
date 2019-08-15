import * as APIUtil from '../util/follows_api_util';

export const RECEIVE_NEW_FOLLOW = 'RECEIVE_NEW_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';
// export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

export const createFollow = follow => dispatch => (
    APIUtil.createFollow(follow).then(follow => (
        dispatch({type: RECEIVE_NEW_FOLLOW, follow})))
        .catch( err => dispatch({type: RECEIVE_FOLLOW_ERRORS, err})
    )
)