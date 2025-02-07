const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/commentController.js');
const authMiddleware = require('../middleware/authJWTmiddleWare');

//create new comment
router.post('/', CommentController.createComment);

//get a comment id
router.get('/', CommentController.getComment);

//get all comment.... is this needed????
router.get('/', CommentController.getAllComments);

//update comment, this makes sense but I am unsure if I will implement this feature just yet
router.put('/:id', authMiddleware,CommentController.updateComment);

//delete
router.delete('/:id', authMiddleware,CommentController.deleteComment);

module.exports = router;