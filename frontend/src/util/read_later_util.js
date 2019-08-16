import axios from 'axios'

export const createReadLater = (readLaterData) => {
    // debugger
    return axios.post(`/api/users/${readLaterData.currentUserId}/read_later`, readLaterData)
}