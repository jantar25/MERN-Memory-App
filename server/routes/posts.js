import express from "express";
import {getPosts,createPost,updatePost,deletePost} from "../controller/posts.js";

const router=express.Router();

router.get("/",getPosts);
router.post("/",createPost);
router.patch("/:id",updatePost);
router.delete("/:id",deletePost);

export default router;

// import express from 'express';

// import { getPosts, getPost, createPost, updatePost, deletePost } from '../controller/posts.js';

// const router = express.Router();

// router.get('/', getPosts);
// router.post('/', createPost);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

// export default router;