// seeds/03_resources.js

exports.seed = async function (knex) {
  // Inserts seed entries
  await knex("resources").insert([
    {
      resource_name: "Wood",
      resource_description: "Pine wood for construction",
    },
    {
      resource_name: "Nails",
      resource_description: "Steel nails for joining wood",
    },
  ]);
};
