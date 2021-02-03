import axios from 'axios';
import API from '../constants/apiRoutes';

const getLocations = () => {
  return axios.get(API.COMMON.locations);
};
const getLocation = (locationId) => {
  return axios.get(`${API.COMMON.locations}/${locationId}`);
};

export default ({getLocation, getLocations});