const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authJWTmiddleWare');

//new post or C
router.post('/', authMiddleware, postController.createPost);

//all posts or R all
router.get('/', postController.getAllPosts);

// one post or R 1
router.get('/:id', postController.getPostById);

//Update U
router.put('/:id', authMiddleware, postController.updatePost);

//Delete D
router.delete('/:id', authMiddleware, postController.deletePost);

module.exports = router;