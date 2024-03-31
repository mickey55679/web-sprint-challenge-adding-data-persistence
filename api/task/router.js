// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Tasks = require('./model')

router.post('/', async (req, res) => {
    try{
        const taskData = req.body;
        const newTask = await Tasks.addTask(taskData);
        res.status(201).json(newTask);
    } catch(error){
        res.status(500).json({message: "Failed to add new task", error: error.message})
    }
})

module.exports = router;