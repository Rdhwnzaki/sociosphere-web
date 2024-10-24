import axios from 'axios';
import toast from 'react-hot-toast';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/posts`);
        return response.data;
    } catch (error) {
        toast.error(error.message);
        throw error;
    }
};
