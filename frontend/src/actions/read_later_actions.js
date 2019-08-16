import * as APIUtil from '../util/read_later_util';

export const RECEIVE_NEW_READ_LATER = 'RECEIVE_NEW_READ_LATER';
export const RECEIVE_READ_LATER_ERRORS = 'RECEIVE_READ_LATER_ERRORS';

export const createReadLater = readLater => dispatch => {
    // debugger    
    return APIUtil.createReadLater(readLater).then(readLater => (
        dispatch({ type: RECEIVE_NEW_READ_LATER, readLater })))
        .catch(err => dispatch({ type: RECEIVE_READ_LATER_ERRORS, err })
        )
}