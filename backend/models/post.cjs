const mongoose= require("mongoose");
const Schema =mongoose.Schema

const postSchema = new Schema (
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
