import API from '../constants/apiRoutes';
import axios from 'axios';

const getMyInfo = () => {
  return axios.get(API.EMPLOYER.me);
};

const employerService = {
  getMyInfo,
};

export default employerService;