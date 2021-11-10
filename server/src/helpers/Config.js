/**
 * Configurations for various integrations
 */
import dotenv from 'dotenv';
dotenv.config();

const config = {
    mongo: {
        url: process.env.MONGO_URL || '',
        dbName: process.env.MONGO_DATABASE || '',
        username: process.env.MONGO_USERNAME || '',
        password: process.env.MONGO_PASSWORD || ''
    }
}
export default config;