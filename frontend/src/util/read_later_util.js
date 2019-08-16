import axios from 'axios'

export const createReadLater = (readLaterData) => {
    // debugger
    return axios.post(`/api/users/${readLaterData.currentUserId}/read_later`, readLaterData)
}

export const deleteReadLater = (readLaterData) => {
    // debugger
    return axios.delete(`/api/users/${readLaterData.reader}/read_later`, { data: { readLaterId: readLaterData.readLaterId } })
}