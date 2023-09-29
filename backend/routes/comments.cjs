import express from "express";
import { createComment } from "./../controllers/commentController.cjs";
import { userAuth } from "../config/checkToken.cjs";

const router = express.Router();

router.post("/:postId", userAuth, createComment);

export default router;
