import axios from 'axios';
import serverConstants from '../constants/apiEndpoints';

const url = serverConstants.server.baseUrl;

export const getPostsList = () => {
    let reqUrl = `${url}${serverConstants.server.apis.post.base}`;
    return axios.get(reqUrl);
};

export const addPost = (newPost) => {
    let reqUrl = `${url}${serverConstants.server.apis.post.base}${serverConstants.server.apis.post.addPost}`;
    let reqBody = {
        title: newPost.title,
        creator: newPost.creator,
        message: newPost.message,
        tags: newPost.tags,
        selectedFile: newPost.selectedFile
    };
    return axios.post(reqUrl, reqBody);
}

export const updatePost = (postId, postData) => {
    let reqUrl = `${url}${serverConstants.server.apis.post.base}/${postId}`;
    let reqBody = {
        title: postData.title,
        creator: postData.creator,
        message: postData.message,
        tags: postData.tags,
        likeCount: postData.likeCount,
        selectedFile: postData.selectedFile
    };
    return axios.patch(reqUrl, reqBody);
}

export const deletePost = (postId) => {
    let reqUrl = `${url}${serverConstants.server.apis.post.base}/${postId}`;
    return axios.delete(reqUrl);
}

export const likePost = (postId) => {
    let reqUrl = `${url}${serverConstants.server.apis.post.base}/${postId}${serverConstants.server.apis.post.likePost}`;
    return axios.patch(reqUrl);
}