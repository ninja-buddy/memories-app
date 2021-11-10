import PostMessage from "../models/PostMessage.js";
import response from "../helpers/Responses.js";
import mongoose from "mongoose";

const PostController = {
    getPosts: async (req, res) => {
        try {
            const posts = await PostMessage.find();
    
            let responseObject = null;
            if (posts) {
                if (posts.length) {
                    responseObject = {
                        ...response.post.postListFetchSuccess,
                        data: posts
                    };
                }
                else {
                    responseObject = response.post.postListEmpty;
                }
            }
            else {
                responseObject = response.post.postListFetchFailed;
            }
            return res.json(responseObject);
        }
        catch (error) {
            let responseObject = {
                ...response.post.postListFetchFailed,
                error: error.message ? error.message : error
            };
            return res.status(404).json(responseObject);
        }
    },

    createPost: async (req, res) => {
        try {
            let body = req.body;
            let newPostData = {
                title: body.title,
                message: body.message,
                creator: body.creator,
                tags: body.tags && body.tags.length ? body.tags : [],
                selectedFile: body.selectedFile
            };
            let newPost = new PostMessage(newPostData);
            await newPost.save();

            let responseObject = {
                ...response.post.postCreationSuccess,
                data: [newPostData]
            };

            return res.status(201).json(responseObject);
        }
        catch (error) {
            let responseObject = {
                ...response.post.postCreationFailed,
                error: error.message ? error.message : error
            };
            return res.status(409).json(responseObject);
        }
    },

    updatePost: async (req, res) => {
        const { id: _id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            let responseObject = {
                ...response.post.noPostFoundWithId
            };
            return res.json(responseObject);
        }
        else {
            let updatedPostData = getDataForPostUpdate(req.body);
            
            const updatedPost = await PostMessage.findByIdAndUpdate(_id, updatedPostData, { new: true });
            let responseObject = {
                ...response.post.postUpdationSuccess,
                data: updatedPost
            };
            return res.json(responseObject);
        }
    },

    deletePost: async (req, res) => {
        const { id: _id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            let responseObject = {
                ...response.post.noPostFoundWithId
            };
            return res.json(responseObject);
        }
        else {
            const updatedPost = await PostMessage.findByIdAndDelete(_id, { new: true });
            let responseObject = {
                ...response.post.postUpdationSuccess
            };
            return res.json(responseObject);
        }
    },

    likePost: async (req, res) => {
        const { id: _id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            let responseObject = {
                ...response.post.noPostFoundWithId
            };
            return res.json(responseObject);
        }
        else {            
            const post = await PostMessage.findById(_id);
            const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true });
            let responseObject = {
                ...response.post.postUpdationSuccess,
                data: updatedPost
            };
            return res.json(responseObject);
        }
    },
};
export default PostController;

function getDataForPostUpdate(body) {
    if (!body) return null;

    let result = {};
    if (body.title) {
        result['title'] = body.title;
    }
    if (body.creator) {
        result['creator'] = body.creator;
    }
    if (body.message) {
        result['message'] = body.message;

    }
    if (body.tags && body.tags.length) {
        result['tags'] = body.tags;
    }
    if (body.selectedFile) {
        result['selectedFile'] = body.selectedFile;

    }
    if (body.likeCount) {
        result['likeCount'] = body.likeCount;
    }

    return result;
}