import {LOGOUT, SET_USER_ROLE} from './action_types';

export const setUserRole = role => ({type: SET_USER_ROLE, payload: role});
export const logout = () => ({type: LOGOUT});