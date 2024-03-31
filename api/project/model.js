// build your `Project` model here
const db = require('../../data/dbConfig')

function add(project) {

  const projectForDb = {
    ...project,
    project_completed: project.project_completed ? 1 : 0, 
  };

  return db("projects")
    .insert(projectForDb)
    .then((ids) => {
      return findById(ids[0]); 
    });
}

function findById(id) {
  return db("projects")
    .where({ project_id: id })
    .first()
    .then((project) => {
      return {
        ...project,
        project_completed: !!project.project_completed, 
      };
    });
}

module.exports = {
  add,
  findById,
};