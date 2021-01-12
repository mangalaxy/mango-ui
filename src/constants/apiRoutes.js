import {host} from './settings';

const API_PATH = host+'/api/v1/';

const login = API_PATH + 'auth/login';
const registerEmployer = API_PATH + 'auth/employer/register';
const registerTalent = API_PATH + 'auth/talent/register';

const locations = API_PATH + 'locations';

const aboutEmployer = API_PATH + 'employers/me';

const API = {
  AUTH: {
    login,
    registerEmployer,
    registerTalent,
  },
  COMMON: {
    locations,
  },
  EMPLOYER: {
    me: aboutEmployer,
  },
};

export default API;