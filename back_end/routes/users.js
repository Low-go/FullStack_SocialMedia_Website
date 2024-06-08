const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Create a new user (signup added)
router.post('/signup', UserController.createUser);

//login a user,
router.post('/:login, UserController.loginUser');

// Get a user by ID
router.get('/:id', UserController.getUser);

// Get all users
router.get('/', UserController.getAllUsers);

// Update a user by ID
router.put('/:id', UserController.updateUser);

// Delete a user by ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;