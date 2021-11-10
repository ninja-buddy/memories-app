import { postActionTypes } from "../constants/actionTypes";

const reducer = (posts = [], action) => {
    switch (action.type) {
        case postActionTypes.POST_LIST:
            return action.payload ? action.payload : posts;
        case postActionTypes.ADD_POST:
            return [...posts, ...action.payload];
        case postActionTypes.UPDATE_POST:
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        case postActionTypes.DELETE_POST:
            return posts.filter(post => post._id !== action.postId);
        default:
            return posts;
    }
};
export default reducer;