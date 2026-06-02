import {StreamChat} from 'stream-chat';
import dotenv from 'dotenv';
dotenv.config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;

if (!api_key || !api_secret) {
    console.error('STREAM_API_KEY or STREAM_API_SECRET is not defined');
}

const streamClient = StreamChat.getInstance(api_key, api_secret);

export const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUsers([userData]);
        return userData
    } catch (error) {
        console.error("Error upserting Stream user:",error); 
    }
};
export const generateStreamToken = (userId) => {
    try {
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
    } catch (error) {
        console.error("Error generating Stream token:", error);
    }
};