import Post from "../models/post.cjs";
import Comment from "../models/comment.cjs";

export const createComment = async (req, res) => {
  const PostId = req.params.postId;
  const newComment = new Comment({ ...req.body });

  try {
    const savedComment = await newComment.save();

    // after creating a new review now update the reviews array of the tour
    await Post.findByIdAndUpdate(postId, {
      $push: { reviews: savedComment._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Comment submitted", data: savedComment });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to submit" });
  }
};
