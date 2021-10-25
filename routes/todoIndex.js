const express = require('express');

const router = express();

const todoController = require('../controllers/todos');

router.get("/" , todoController.todoIndex)

module.exports = router;

