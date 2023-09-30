const express= require("express");


const ctrl= require("../../controllers/api/postController.cjs");


const router = express.Router();

// create new post
router.post("/", ctrl.createPost);

// update  post
router.put("/:id", ctrl.updatePost);

// delete post
router.delete("/:id", ctrl.deletePost);

// get single post
router.get("/:id", ctrl.getSinglePost);

// get all posts
router.get("/", ctrl.getAllPost);

// get post by search
router.get("/search/getPostBySearch", getPostBySearch);
router.get("/search/getPostCount", getPostCount);

module.exports = router;
