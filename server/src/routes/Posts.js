import express from 'express';

import { PostController } from '../controllers/index.js';

const router = express.Router();

router.get('/', PostController.getPosts);
router.post('/add', PostController.createPost);
router.patch('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);
router.patch('/:id/likePost', PostController.likePost);

export default router;