import express from "express";

import {
  createPost,
  deletePost,
  getAllPost,
  getFeaturedPost,
  getSinglePost,
  getPostBySearch,
  getPostCount,
  updatePost,
} from "./../controllers/postController.cjs";
import { adminAuth } from "./../config/checkToken.cjs";

const router = express.Router();

// create new post
router.post("/", adminAuth, createPost);

// update  post
router.put("/:id", adminAuth, updatePost);

// delete post
router.delete("/:id", adminAuth, deletePost);

// get single post
router.get("/:id", getSinglePost);

// get all posts
router.get("/", getAllPost);

// get post by search
router.get("/search/getPostBySearch", getPostBySearch);
router.get("/search/getFeaturedPosts", getFeaturedPost);
router.get("/search/getPostCount", getPostCount);

export default router;
