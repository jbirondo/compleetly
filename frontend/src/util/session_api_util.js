import axios from 'axios';

export const setAuthToken = token => {
   if (token) {
      axios.defaults.headers.common['Authorization'] = token;
   } else {
      delete axios.defaults.headers.common['Authorization'];
   }
};

export const login = (userData) => {
   // debugger;
   // console.log(userData)
   return axios.post('/api/users/login', userData)
}

export const signup = (userData) => {
   // debugger;
   // console.log(userData)
   return axios.post('/api/users/register', userData)
}

window.axios = axios