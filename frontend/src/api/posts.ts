import type { Post } from "@/types/Post";
import api from "./index";

export const getAllPosts = async (): Promise<Post[]> => {
    const response = await api.get("/posts");
    return response.data;
};

export const getPostById = async (id: string): Promise<Post> => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
};
