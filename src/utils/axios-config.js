import axios from 'axios';
let options = { 
    baseURL: process.env.API_BASE_URL || 'http://127.0.0.1:8000/api',
    timeout: 12000
}

// Create an Axios instance with custom settings
const axios = axios.create(options);
api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    const tokenType = localStorage.getItem('tokenType');

    if (accessToken) options['headers'] = { authorization: tokenType + " " + accessToken }
    if (config.url != 'auth/logout') {
        H.logoutIfExpireToken()
    }
    return config
}, (error) => {
    return Promise.reject(error)
})
axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
        if (error.response.status == 401) {
            router.push({name: "login"})
        }
        return Promise.reject(error)
    }
  );

// Optionally, you can add request or response interceptors here

export default instance;
