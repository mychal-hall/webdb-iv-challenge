const express = require("express");

const Recipes = require("./recipesModel.js");

const router = express.Router();

// Lists all the recipes in the database -- GET /api/recipes
router.get("/", async (req, res) => {
    try {
        const recipes = await Recipes.findRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ messages: "The recipes are unreachable. Is it turned on?" })
    }
})

module.exports = router;
