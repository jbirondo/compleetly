import * as APIUtil from '../util/read_later_util';

export const RECEIVE_NEW_READ_LATER = 'RECEIVE_NEW_READ_LATER';
export const RECEIVE_READ_LATER_ERRORS = 'RECEIVE_READ_LATER_ERRORS';
export const DELETE_READ_LATER = 'DELETE_READ_LATER';


export const createReadLater = readLater => dispatch => {
    return APIUtil.createReadLater(readLater).then(readLater => (
        dispatch({ type: RECEIVE_NEW_READ_LATER, readLater })))
        .catch(err => dispatch({ type: RECEIVE_READ_LATER_ERRORS, err })
        )
}

export const deleteReadLater = readLater => dispatch => {
    return (
        APIUtil.deleteReadLater(readLater)
            .then(readLater => {
                return dispatch({ type: DELETE_READ_LATER, readLater })
            })
            .catch(err => dispatch({ type: RECEIVE_READ_LATER_ERRORS, err })
        )
    )
}