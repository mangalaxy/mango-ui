import * as TYPES from './action_types';
import api from '../services/FetchData'

export const getEmployerCompany = (employerId) => dispatch => {
    dispatch({type: TYPES.EMPLOYER_COMPANY_LOADING, payload: true});
    api.get(`/employers/${employerId}/companies`).then(res => {
        if (res.status >= 200 && res.status < 300) {
            dispatch({type: TYPES.LOAD_EMPLOYER_COMPANY, payload: res.data})
        }
    }).finally(() => dispatch({type: TYPES.EMPLOYER_COMPANY_LOADING, payload: false}))
};