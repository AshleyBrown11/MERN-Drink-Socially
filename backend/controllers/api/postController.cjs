const Post = require ("../../backend/models/post.cjs");

// create new post
export const createPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedPost,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update post
export const updatePost = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedPost,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// delete post
export const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    await Post.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
    });
  }
};

// getSingle post
export const getSinglePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id).populate("comments");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll post
export const getAllPost = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const posts = await Post.find({})
      .populate("comments")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: posts.length,
      message: "Successful",
      data: posts,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get post by search
export const getPostBySearch = async (req, res) => {
  // here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");

  const desc = parseInt(req.query.desc);

  try {
    // gte means greater than equal
    const posts = await Post.find({
      city,
      desc: { $gte: desc },
    }).populate("comments");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};


// get post counts
export const getPostCount = async (req, res) => {
  try {
    const postCount = await Post.estimatedDocumentCount();

    res.status(200).json({ success: true, data: postCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
