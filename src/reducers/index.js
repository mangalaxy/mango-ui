import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import user from './user';
import jobsReducer from './jobsReducer';
import talentsReducer from './talentsReducer';
import posts from './posts';
import employer from './employer';

export default combineReducers({
  routing: routerReducer,
  user,
  jobsReducer,
  talentsReducer,
  posts,
  employer
});