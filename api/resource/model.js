// build your `Resource` model here
const db = require("../../data/dbConfig");

function add(resource) {
  return db("resources")
    .insert(resource, "resource_id")
    .then((ids) => {
      return findById(ids[0]);
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