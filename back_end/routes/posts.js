const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

//new post or C
router.post('/', postController.createpost);

//all posts or R all
router.get('/', postController.getAllPosts);

// one post or R 1
router.get('/', postController.getPostById);

//Update U
router.get('/', postController.updatePost);

//Delete D
router.get('/', postController.deletePosts);

module.exports = router;