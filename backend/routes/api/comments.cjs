const express = require("express");
const createComment = require("../../controllers/api/commentController.cjs");


const router = express.Router();

router.post("/:postId",  createComment);

export default router;
