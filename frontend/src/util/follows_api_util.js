import axios from 'axios';

// export const setAuthToken = token => {
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = token;
//     } else {
//         delete axios.defaults.headers.common['Authorization'];
//     }
// };

export const createFollow = (followData) => {
    // debugger;
    // console.log(userData)
    return axios.post(`/api/users/${followData.currentUserId}/follow`, followData)
}

export const deleteFollow = (followData) => {
    // debugger
    // return axios.delete(`/api/users/${followData.currentUserId}/follow`, {data: {followId: `ObjectId("${followData.followId}")`} })
    return axios.delete(`/api/users/${followData.currentUserId}/follow`, { data: { followId: followData.followId } })
}


// export const getUserTweets = id => {
//     return axios.get(`/api/tweets/user/${id}`)
// };

// export const writeTweet = data => {
//     return axios.post('/api/tweets/', data)
// }

// export const signup = (userData) => {
//     // debugger;
//     // console.log(userData)
//     return axios.post('/api/users/register', userData)
// }

window.axios = axios;