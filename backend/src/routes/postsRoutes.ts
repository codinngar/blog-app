import express from "express";
import {
    getAllPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost,
} from "../controllers/postsControllers";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
