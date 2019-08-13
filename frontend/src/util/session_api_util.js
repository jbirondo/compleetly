import axios from 'axios';

export const setAuthToken = token => {
   if (token) {
      axios.defaults.headers.common['Authorization'] = token;
   } else {
      delete axios.defaults.headers.common['Authorization'];
   }
};

<<<<<<< HEAD






export const signup = (userData) => {
   return axios.post('api/users/register', userData)
};
=======
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
>>>>>>> 958000ac6b4865332d6c38f64e0c68e6b70acc8b
