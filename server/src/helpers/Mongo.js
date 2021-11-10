/**
 * Mongo file for initialization of connection
 */

import config from "./Config.js";
import mongoose from "mongoose";

const DB_URL = config.mongo.url;
const DB_NAME = config.mongo.dbName;

console.log(`Connecting to mongodb with URL: ${DB_URL}, Database: ${DB_NAME}`)

mongoose.connect(
    DB_URL,
    {
        dbName: DB_NAME,
        keepAlive: true,
        autoCreate: true,
        bufferCommands: true,
        // auth: {
        //     username: config.mongo.username || '',
        //     password: config.mongo.password || ''
        // }
    })
    .then(result => {
        console.log("Mongo DB Connection SUCCESS");
    })
    .catch(error => {
        console.log("Mongo DB Connection Error: ", error);
    });

mongoose.connection.on('disconnected', () => {
    console.log(`Mongo DB Disconnected`);
});

process.on('SIGINT', error => {
    mongoose.connection.close(true, () => {
        process.exit(0);
    });
});