import {POSTS} from "../actions/action_types";

const initialState = {
    posts: {},
    postsLoading: false,
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case POSTS.GEL_POSTS:
            return {...state, posts: action.payload}
        case POSTS.POSTS_LOADING:
            return {...state, postsLoading: action.payload}
        default:
            return {...state}
    }
}

export default posts;