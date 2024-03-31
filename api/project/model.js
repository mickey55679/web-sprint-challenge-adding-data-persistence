// build your `Project` model here
const db = require("../../data/dbConfig");

function add(project) {
  const projectForDb = {
    ...project,
    project_completed:
      project.project_completed === undefined
        ? false
        : project.project_completed,
  };

  return db("projects")
    .insert(projectForDb, "project_id")
    .then((ids) => {
      return findById(ids[0].project_id);
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
      
      if (!project) {
        return null;
      }
      return {
        ...project,
       
      };
    });
}

function getAll() {
  return db("projects").then((projects) =>
    projects.map((project) => ({
      ...project,
      project_completed: !!project.project_completed,
    }))
  );
}



module.exports = {
  add,
  findById,
  getAll,
  findByName,
};
