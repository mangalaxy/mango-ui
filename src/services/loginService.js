import API from "../constants/apiRoutes";
import decode from 'jwt-decode';
import axios from 'axios';

let intercept = null;

const login = async (email, password) => {
    return axios.post(API.login, {email, password})
}

const setToken = token => {
    intercept = axios.interceptors.request.use(config => {
        config.headers = {'Authorization': token ? `Bearer ${token}` : ''}
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
}

const getRole = token => {
    let payload = decode(token);
    return payload.aud
}

const logout = () => {
    if (intercept) {
        axios.interceptors.request.eject(intercept);
        intercept=null;
    }
}

export default ({login, setToken, getRole, logout})