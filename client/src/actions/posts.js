import * as api from '../api';
import { postActionTypes, commonActionType } from '../constants/actionTypes';

export const getPosts = () => async (dispatch) =>  {
    try {
        let { data } = await api.getPostsList();
        if (data.code === '000') {
            const action = {
                type: postActionTypes.POST_LIST,
                payload: data && data.data && data.data.length ? data.data : []
            };
            dispatch(action);
        }
        else {
            const action = {
                type: commonActionType.ERROR,
                message: data && data.message
            };
            dispatch(action);
        }
    }
    catch (error) {
        console.error("Error in getPosts action. ERROR: ", error);
    }
}

export const addPost = (newPost) => async (dispatch) =>  {
    try {
        let { data } = await api.addPost(newPost);
        if (data.code === '000') {
            const action = {
                type: postActionTypes.ADD_POST,
                payload: data && data.data && data.data.length ? data.data : []
            };
            dispatch(action);
        }
        else {
            const action = {
                type: commonActionType.ERROR,
                message: data && data.message
            };
            dispatch(action);
        }
    }
    catch (error) {
        console.error("Error in addPost action. ERROR: ", error);
    }
}

export const updatePost = (postId, postData) => async (dispatch) =>  {
    try {
        let { data } = await api.updatePost(postId, postData);
        if (data.code === '000') {
            const action = {
                type: postActionTypes.UPDATE_POST,
                payload: data && data.data ? data.data : {}
            };
            dispatch(action);
        }
        else {
            const action = {
                type: commonActionType.ERROR,
                message: data && data.message
            };
            dispatch(action);
        }
    }
    catch (error) {
        console.error("Error in updatePost action. ERROR: ", error);
    }
}

export const deletePost = (postId) => async (dispatch) =>  {
    try {
        let { data } = await api.deletePost(postId);
        if (data.code === '000') {
            const action = {
                type: postActionTypes.DELETE_POST,
                postId: postId
            };
            dispatch(action);
        }
        else {
            const action = {
                type: commonActionType.ERROR,
                message: data && data.message
            };
            dispatch(action);
        }
    }
    catch (error) {
        console.error("Error in deletePost action. ERROR: ", error);
    }
}

export const likePost = (postId) => async (dispatch) =>  {
    try {
        let { data } = await api.likePost(postId);
        if (data.code === '000') {
            const action = {
                type: postActionTypes.UPDATE_POST,
                payload: data && data.data ? data.data : {}
            };
            dispatch(action);
        }
        else {
            const action = {
                type: commonActionType.ERROR,
                message: data && data.message
            };
            dispatch(action);
        }
    }
    catch (error) {
        console.error("Error in likePost action. ERROR: ", error);
    }
}