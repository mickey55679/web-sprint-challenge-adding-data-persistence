// build your `Task` model here
const db = require("../../data/dbConfig");

async function addTask(task) {
  try {
    const taskForDb = {
      ...task,
      task_completed: task.task_completed ? 1 : 0,
    };

    const [taskId] = await db("tasks").insert(taskForDb);
    const newTask = await findTaskById(taskId);
    return newTask;
  } catch (error) {
    console.log("Failed to add new task: " + error.message);
  }
}


function findTaskById(id) {
  return db("tasks")
    .where({ task_id: id })
    .first()
    .then((task) => {
      if (!task) {
        console.log("Task not found");
      }
      return {
        ...task,
        task_completed: !!task.task_completed,
      };
    });
}

module.exports = {
  addTask,
  findTaskById,
}