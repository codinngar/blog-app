import { Request, Response } from "express";
import Post from "../models/Post";

export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });

        res.status(200).json(posts);
    } catch (error) {
        console.error("Error in getAllPosts controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getPostById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        res.status(200).json(post);
    } catch (error) {
        console.error("Error in getPostById controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const createPost = async (req: Request, res: Response) => {
    try {
        const post = await Post.create(req.body);

        res.status(200).json(post);
    } catch (error) {
        console.error("Error in createPost controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updatePost = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );

        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        console.error("Error in updatePost controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deletePost = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);

        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error("Error in deletePost controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
