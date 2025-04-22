const express = require('express');
const router = express.Router();
const {getTasks, addTask, deleteTask} = require('../controllers/taskController');
const verifyToken = require('../middleware/auth');
router.use(express.json());

//routes with valid token
router.get('/tasks',verifyToken,getTasks);
router.post('/tasks',verifyToken,addTask);
router.delete('/tasks/:id',verifyToken,deleteTask);

module.exports = router;
