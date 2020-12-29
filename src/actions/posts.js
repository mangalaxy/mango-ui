import * as TYPES from './action_types';
import api from '../services/FetchData'

export const getPosts = (pageNumber, pageSize) => dispatch => {
  dispatch({type: TYPES.POSTS_LOADING, payload: true});
  api.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(res => {
      if (res.status >= 200 && res.status < 300) {
          dispatch({type: TYPES.LOAD_POSTS, payload: res.data})
      }
  }).finally(() => dispatch({type: TYPES.POSTS_LOADING, payload: false}))
};

export const getPostById = id => dispatch => {
    dispatch({type: TYPES.POST_BY_ID_LOADING, payload: true});
    api.get(`/posts/${id}`).then(res => {
        if (res.status >= 200 && res.status < 300) {
            dispatch({type: TYPES.LOAD_POST_BY_ID, payload: res.data})
        }
    }).finally(() => dispatch({type: TYPES.POST_BY_ID_LOADING, payload: false}))
};