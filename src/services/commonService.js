import axios from 'axios';
import API from '../constants/apiRoutes';

const getLocations = () =>{
return axios.get(API.COMMON.locations)
}



export default ({getLocations})