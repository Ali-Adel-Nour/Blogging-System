const { Post } = require('../models');

// Get all posts
async function index(req, res) {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error('Error retrieving posts:', error);
    res.status(500).json({ message: 'Error retrieving posts', error: error.message });
  }
}

// Get a single post by ID
async function show(req, res) {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error retrieving post:', error);
    res.status(500).json({ message: 'Error retrieving post', error: error.message });
  }
}

// Create a new post
async function store(req, res) {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(400).json({ message: 'Error creating post', error: error.message });
  }
}

// Update a post
async function update(req, res) {
  try {
    const [updated] = await Post.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const updatedPost = await Post.findByPk(req.params.id);
    res.json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(400).json({ message: 'Error updating post', error: error.message });
  }
}

// Delete a post
async function destroy(req, res) {
  try {
    const deleted = await Post.destroy({
      where: { id: req.params.id }
    });

    if (deleted === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Error deleting post', error: error.message });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
};