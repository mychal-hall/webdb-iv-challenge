const knex = require("knex");
const config = require("../knexfile.js");

const db = knex(config.development);

module.exports = {
  findDishes,
  findDishById,
  insertDish
};

function findDishes() {
  return db("dishes");
}

function findDishById(id) {
  return db
    .select("dishes.id", "dishes.name as dish", "recipes.name as recipe")
    .from("dishes")
    .leftJoin("recipes", "dishes.id", "recipes.dish_id")
    .where("dishes.id", Number(id));
}

function insertDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}
