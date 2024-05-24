const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

//new post or C
router.post('/', postController.createPost);

//all posts or R all
router.get('/', postController.getAllPosts);

// one post or R 1
router.get('/:id', postController.getPostById);

//Update U
router.put('/:id', postController.updatePost);

//Delete D
router.delete('/:id', postController.deletePost);

module.exports = router;