import {LOGOUT, SET_USER_ROLE} from '../actions/action_types';

const initialState = {
  role: null,
  user: {
    fullName: 'User',
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ROLE: {
      return {...state, role: action.payload};
    }
    case LOGOUT:{
      return initialState
    }
    default:
      return state;
  }
};

export default user;