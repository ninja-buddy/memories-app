import postRoutes from './Posts.js';

import express from 'express';

const app = express();

app.use('/posts', postRoutes);

export default app;