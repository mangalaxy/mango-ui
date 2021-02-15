import * as TYPES from "../actions/action_types";

const initialState = {
    employerCompany: {},
    employerCompanyLoading: false,
}

const employer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LOAD_EMPLOYER_COMPANY:
            return {...state, employerCompany: action.payload};
        case TYPES.EMPLOYER_COMPANY_LOADING:
            return {...state, employerCompanyLoading: action.payload};
        default:
            return {...state}
    }
}

export default employer;