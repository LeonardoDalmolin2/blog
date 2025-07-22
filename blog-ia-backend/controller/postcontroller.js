const Post = require('../models/posts.js');

const createPost = async (req, res) => {
  const { title, text } = req.body;
  const post = new Post({ title, text });

  try {
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ message: 'Post não encontrado' })
    }
    res.json(post)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { createPost, getPosts, getPostById };
