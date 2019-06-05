exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "tbsp Olive Oil" },
        { id: 2, name: "cup Spaghetti" },
        { id: 3, name: "bit of Basil" },
        { id: 4, name: "Ground Beef" },
        { id: 5, name: "some Oregano" },
        { id: 6, name: "handful of Mushrooms" },
        { id: 7, name: "slice of Swiss Cheese" },
        { id: 8, name: "Homemade Bun" },
        { id: 9, name: "bit of Salt" }
      ]);
    });
};
