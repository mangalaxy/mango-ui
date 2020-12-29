import * as TYPES from "../actions/action_types";

const initialState = {
    posts: {},
    postsLoading: false,
    postById: {},
    postByIdLoading: false
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LOAD_POSTS:
            return {...state, posts: action.payload};
        case TYPES.POSTS_LOADING:
            return {...state, postsLoading: action.payload};
        case TYPES.LOAD_POST_BY_ID:
            return {...state, postById: action.payload};
        case TYPES.POST_BY_ID_LOADING:
            return {...state, postByIdLoading: action.payload};
        default:
            return {...state}
    }
}

export default posts;