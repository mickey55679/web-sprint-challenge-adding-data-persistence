// build your `Project` model here
const db = require("../../data/dbConfig");

function add(project) {
  const projectForDb = {
    ...project,
    project_completed: project.project_completed ? 1 : 0,
  };

  return db("projects")
    .insert(projectForDb, "project_id")
    .then((ids) => {
      console.log("Inserted IDs:", ids); 
      return findById(ids[0]);
    });
}



function findByName(project_name) {
  return db("projects").where({ project_name }).first();
}

function findById(id) {
  return db("projects")
    .where({ project_id: id })
    .first()
    .then((project) => {
      console.log("Project found by ID:", project); 
      if (!project) {
        return null; 
      }
      return {
        ...project,
        project_completed: project.project_completed === 1,
      };
    });
}


function getAll() {
  return db("projects").then((projects) =>
    projects.map((project) => ({
      ...project,
      project_completed: project.project_completed === 1,
    }))
  );
}


module.exports = {
  add,
  findById,
  getAll,
  findByName,
};
