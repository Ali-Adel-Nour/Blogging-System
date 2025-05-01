const express = require('express');
const postController = require('../controllers/post.controller');
const router = express.Router();

// Route to get all posts
router.get('/', postController.index);

// Route to get a single post
router.get('/:id', postController.show);

// Route to create a new post
router.post('/', postController.store);

// Route to update a post
router.put('/:id', postController.update);

// Route to delete a post
router.delete('/:id', postController.destroy);

module.exports = router;