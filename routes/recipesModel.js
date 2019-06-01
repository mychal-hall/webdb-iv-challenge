const knex = require("knex");
const config = require("../knexfile.js");

const db = knex(config.development);

module.exports = {
  findRecipes,
  addRecipe
};

function findRecipes() {
  return db
    .select("recipes.id as id", "recipes.name as name", "dishes.name as dish")
    .from("recipes")
    .innerJoin("dishes", "recipes.dish_id", "dishes.id");
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}
