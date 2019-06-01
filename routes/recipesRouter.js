const express = require("express");

const Recipes = require("./recipesModel.js");

const router = express.Router();

// Lists all the recipes in the database -- GET /api/recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.findRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res
      .status(500)
      .json({ messages: "The recipes are unreachable. Is it turned on?" });
  }
});

// Adds a new recipe to the database -- POST /api/recipes
router.post("/", validateRecipe, async (req, res) => {
  try {
    const recipe = await Recipes.addRecipe(req.body);
    res.status(201).json(recipe.id);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating the new recipe." });
  }
});

// Custom Middleware

function validateRecipe(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    if (req.body.name !== "" && req.body.dish_id !== 0 ) {
      next();
    } else {
      res.status(400).json({ message: "Please name the recipe or assign it a dish_id" });
    }
  } else {
    res.status(500).json({ message: "Critical Fail - Unable to comply" });
  }
}
module.exports = router;
