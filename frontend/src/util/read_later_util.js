import axios from 'axios'

export const createReadLater = (readLaterData) => {
    return axios.post(`/api/users/${readLaterData.currentUserId}/read_later`, readLaterData)
}

export const deleteReadLater = (readLaterData) => {
    return axios.delete(`/api/users/${readLaterData.reader}/read_later`, { data: { readLaterId: readLaterData.readLaterId } })
}