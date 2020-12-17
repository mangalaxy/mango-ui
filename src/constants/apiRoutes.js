import {host} from './settings';

const API_PATH = '/api/v1/';

const login = API_PATH + 'auth/login';
const registerEmployer = API_PATH + 'auth/employer/register';
const registerTalent = API_PATH + 'auth/talent/register';

const API = {
  login,
  registerEmployer,
  registerTalent,
};

export default API;