// build your `Task` model here
const db = require("../../data/dbConfig");

function addTask(task) {
  const taskForDb = {
    ...task,
    task_completed: task.task_completed ? 1 : 0,
  };
   console.log(taskForDb);

  return db("tasks")
    .insert(taskForDb, "task_id")
    .then(([id]) => findTaskById(id)); 
}

function findTaskById(id) {
  return db("tasks")
    .where({ task_id: id })
    .first()
    .then((task) => ({
      ...task,
      task_completed: !!task.task_completed, 
    }));
}

module.exports = {
  addTask,
  findTaskById,
};