// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Projects = require("./model");

router.post("/", async (req, res) => {
  console.log("Request Body:",req.body)
  try {
    const { project_name, project_description, project_completed } = req.body;

    if (!project_name || !project_description) {
      return res
        .status(400)
        .json({ message: "project_name and project_description are required" });
    }

    if (typeof project_completed !== "boolean") {
      return res
        .status(400)
        .json({ message: "project_completed must be a boolean" });
    }

    
    const existingProject = await Projects.findByName(project_name);
    if (existingProject) {
      return res
        .status(400)
        .json({ message: "A project with this name already exists" });
    }

    const newProject = await Projects.add(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to create new project", error: error.message });
  }
});




router.get("/", async (req, res) => {
  try{
    const projects = await Projects.getAll();
    res.status(200).json(projects);
  } catch (error){
    res.status(500).json({message: error.message})
  }
});




router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'Something went wrong inside the project router',
        message: err.message,
        stack: err.stack, 
    })
})
module.exports = router 