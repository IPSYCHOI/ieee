const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create
router.post('/', userController.create);

// Read all
router.get('/', userController.getAll);

// Read one
router.get('/:id', userController.getOne);

// Update
router.put('/:id', userController.update);

// Delete
router.delete('/:id', userController.remove);

module.exports = router;
