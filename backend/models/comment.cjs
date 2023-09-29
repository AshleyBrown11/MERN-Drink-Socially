import mongoose from "mongoose";

const commentSchema = new Schema(
  {
    postId: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
    username: {
      type: String,
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
