// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Get all comments
router.get('/', commentController.getAllComments);

// Get all comments by post id
router.get('/post/:postId', commentController.getCommentsByPostId);

// Get all comments by user id
router.get('/user/:userId', commentController.getCommentsByUserId);

// Get a comment by id
router.get('/:commentId', commentController.getCommentById);

// Create a new comment
router.post('/', commentController.createComment);

// Update a comment by id
router.put('/:commentId', commentController.updateCommentById);

// Delete a comment by id
router.delete('/:commentId', commentController.deleteCommentById);

// Export module
module.exports = router;