import axios from 'axios';

export const setAuthToken = token => {
   if (token) {
      axios.defaults.headers.common['Authorization'] = token;
   } else {
      delete axios.defaults.headers.common['Authorization'];
   }
};

export const fetchUser = (userData) => {
   return axios.get(`/api/users/${userData.id}`, userData)
}

export const login = (userData) => {
   // console.log(userData)
   return axios.post('/api/users/login', userData)
}

export const signup = (userData) => {
   // console.log(userData)
   return axios.post('/api/users/register', userData)
}

// window.axios = axios;