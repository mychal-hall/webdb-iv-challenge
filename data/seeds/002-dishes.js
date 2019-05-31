exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { id: 1, name: "Pasta" },
        { id: 2, name: "Hamburger" },
        { id: 3, name: "Casserole" }
      ]);
    });
};
