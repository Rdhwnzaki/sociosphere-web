import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
import { toast } from 'react-hot-toast';

export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/posts`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const createPosts = async (formData, token) => {
    try {
        const response = await axios.post(`${baseURL}/api/posts`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
        toast.success(response.data.message);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return response.data;
    } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || 'Something went wrong');
        throw error;
    }
};

export const deletePosts = async (id, token) => {
    try {
        const response = await axios.delete(`${baseURL}/api/posts/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const message = response.data?.message || 'Post deleted successfully';
        toast.success(message);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return response.data;
    } catch (error) {
        console.error(error);
        const errorMessage = error.response?.data?.message || 'Something went wrong';
        toast.error(errorMessage);
        throw new Error(errorMessage);
    }
};

export const createComments = async (description, post_id, token) => {
    try {
        const response = await axios.post(`${baseURL}/api/comments`, description, post_id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        toast.success(response.data.message)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        return response.data
    } catch (error) {
        console.error(error)
        toast.error(error.response?.data?.message || 'Something went wrong');
        throw error;
    }
}
