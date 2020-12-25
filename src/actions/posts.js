import {POSTS} from './action_types';
import api from '../services/FetchData'

export const getPosts = (pageNumber, pageSize) => dispatch => {
  dispatch({type: POSTS.POSTS_LOADING, payload: true});
  api.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(res => {
      if (res.status >= 200 && res.status < 300) {
          dispatch({type: POSTS.GEL_POSTS, payload: res.data})
      }
  }).finally(() => dispatch({type: POSTS.POSTS_LOADING, payload: false}))
};