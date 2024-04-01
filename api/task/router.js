// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Tasks = require('./model')

router.post('/',  validateTask, async (req, res) => {
    try{
        const taskData = req.body;
        const newTask = await Tasks.addTask(taskData);
        res.status(201).json(newTask);
    } catch(error){
        res.status(500).json({message: "Failed to add new task", error: error.message})
    }
})

function validateTask(req, res, next) {
  const { task_description } = req.body;
 
  if (task_description === undefined) {
    res.status(400).json({ message: "task_description is required" });
  } else {
    next();
  }
}


module.exports = router;