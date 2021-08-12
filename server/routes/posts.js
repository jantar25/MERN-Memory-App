import express from "express";
import {getPosts,createPosts,updatePost,deletePost} from "../controller/posts.js";

const router=express.Router();

router.get("/",getPosts);
router.post("/",createPosts);
router.patch("/:id",updatePost);
router.delete("/:id",deletePost);

export default router;

// import express from 'express';

// import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

// const router = express.Router();

// router.get('/', getPosts);
// router.post('/', createPost);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

// export default router;