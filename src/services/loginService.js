import React from 'react';
import API from '../constants/apiRoutes';
import decode from 'jwt-decode';
import axios from 'axios';
import {renderModal} from './renderModal';
import LogoutMessage from '../components/Auth/Logout/Logout';
import {useHistory} from 'react-router';
import routes from '../constants/routes.json';

let intercept = null;

const login = async (email, password) => {
  return axios.post(API.login, {email, password});
};

const setToken = token => {
  intercept = axios.interceptors.request.use(config => {
    config.headers = {'Authorization': token ? `Bearer ${token}` : ''};
    return config;
  }, function(error) {
    return Promise.reject(error);
  });
};

const getRole = token => {
  let payload = decode(token);
  return payload.aud;
};

const logout = (goMain) => {
  const handleLogout = ()=>{
    sessionStorage.clear();
    localStorage.clear();
    if (intercept) {
      axios.interceptors.request.eject(intercept);
      intercept = null;
    }
    goMain();
  }
  renderModal(<LogoutMessage handleLogout={handleLogout}/>);


};

const getStoredUser = () => {
  let userData = sessionStorage.getItem('usr');
  if (!userData) {
    userData = localStorage.getItem('usr');
  }
  if (userData) {
    try {
      let role = getRole(userData);
      if (role) {
        setToken(userData);
        return role;
      }
    } catch (e) {
      return null;
    }
  }
  return null;
};

export default ({login, setToken, getRole, logout, getStoredUser});