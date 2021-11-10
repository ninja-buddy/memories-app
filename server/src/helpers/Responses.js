/**
 * Responses for different apis
 */
import constants from "./Constants.js";

const buildResponseBody = (status, code, message) => {
    let response = {
        status: status ? status : constants.status.fail,
        code: code ? code : '400',
        message: message ? message : ''
    };
    return response;
};

const response = {
    post: {
        postListFetchSuccess: buildResponseBody(constants.status.success, '000', 'List of posts fetched successfully'),
        postCreationSuccess: buildResponseBody(constants.status.success, '000', 'New post added successfully'),
        postUpdationSuccess: buildResponseBody(constants.status.success, '000', 'Post updated successfully'),
        postDeletionSuccess: buildResponseBody(constants.status.success, '000', 'Post deleted successfully'),

        noPostFoundWithId: buildResponseBody(constants.status.fail, '404', 'No Post found with this id'),

        postListFetchFailed: buildResponseBody(constants.status.fail, '100', 'Failed to fetch posts list'),
        postListEmpty: buildResponseBody(constants.status.fail, '101', 'No posts available'),

        postCreationFailed: buildResponseBody(constants.status.fail, '200', 'Failed to create new post'),
    }
};

export default response;