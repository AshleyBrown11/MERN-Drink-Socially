const express= require (express);

const {
  createPost,
  deletePost,
  getAllPost,
  getSinglePost,
  getPostBySearch,
  getPostCount,
  updatePost,
} = require("../../backend/controllers/postController.cjs");
const { adminAuth } = require ("../../backend/config/checkToken.cjs");

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
router.get("/search/getPostCount", getPostCount);

export default router;
