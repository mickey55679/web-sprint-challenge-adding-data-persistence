// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Projects = require("./model");



router.get('/', (req, res) => {
console.log('hello')
res.json({
    message: `Hello from api/projects`
})
})

router.post('/', async (req, res) => {
   try {
    const projectData = req.body;

    const newProject = await Projects.add(projectData)
    res.status(201).json(newProject)
   } catch(error) {
    res.status(500).json({ message: error.message })
   }

})




router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went wrong inside the project router',
        message: err.message,
        stack: err.stack, 
    })
})
module.exports = router 