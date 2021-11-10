/**
 * Constants for the server api Endpoints
 */

 const serverConstants = {
    server: {
        baseUrl: 'http://localhost:8090',
        apis: {
            post: {
                base: '/posts',
                addPost: '/add',
                likePost: '/likePost',
            }
        }
    }
};
export default serverConstants;