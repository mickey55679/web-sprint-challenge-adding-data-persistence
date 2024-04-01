// build your `Resource` model here
const db = require("../../data/dbConfig");

function add(resource) {
  return db("resources")
    .insert(resource)
    .then((ids) => {
      const [id] = ids;
      console.log("Inserted resource ID:", id); // Debugging: Confirm the ID
      return findById(id);
    })
    .catch((error) => {
      console.error("Error inserting resource:", error); // Debugging: Catch any error
      throw error; // Rethrow to handle it in the calling context
    });
}


function findById(id) {
  return db("resources").where({ resource_id: id }).first();
}
function getAll() {
  return db("resources");
}

module.exports = {
  add,
  findById,
  getAll
};