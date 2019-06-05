exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dishes", tbl => {
      tbl.increments();
      tbl
        .string("name")
        .unique()
        .notNullable();
    })
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("name")
        .unique()
        .notNullable();
      tbl
        .integer("dish_id")
        .references("id")
        .inTable("dishes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("name")
        .unique()
        .notNullable();
    })
    .createTable("shopping_lists", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      tbl
        .integer("ingredient_id")
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      tbl.float("quantity").notNullable();
    });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists("shopping_lists"),
    knex.schema.dropTableIfExists("ingredients"),
    knex.schema.dropTableIfExists("recipes"),
    knex.schema.dropTableIfExists("dishes")
  ]);
};
