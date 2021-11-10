import express from 'express';
import cors from 'cors';
import { URL } from 'url';

import './src/helpers/index.js';
import appRoutes from './src/routes/index.js';
import path from 'path';

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb' }));
app.use(cors());

app.use('/', appRoutes);

const dirname = new URL('.', import.meta.url).pathname.slice(1);
const filepath = (dirname + 'build/index.html').slice(3);

app.use(express.static(dirname + 'build'));

app.get("/*", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.resolve(filepath));
});

app.use('*', (req, res) => {
    let responseObject = {
        status: 'FAIL',
        code: '404',
        message: 'Route not found'
    };
    return res.json(responseObject);
});

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
