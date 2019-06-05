const express = require("express");

const Dishes = require("./dishesModel.js");

const router = express.Router();

// Lists all the dishes in the database -- GET /api/dishes
router.get("/", async (req, res) => {
  try {
    const dishes = await Dishes.findDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res
      .status(500)
      .json({ messages: "The dishes are unreachable, is the server on?" });
  }
});

// Lists one dish with a specific ID -- GET /api/dishes/:id
router.get("/:id", async (req, res) => {
  try {
    const dish = await Dishes.findDishById(req.params.id);
    if (dish.length) {
      const recipesRelated = dish.map(item => {
        const recipe = { name: item.recipe };
        return recipe;
      });
      const dishRelated = {
        id: dish[0].id,
        name: dish[0].dish,
        recipes: recipesRelated
      };
      res.status(200).json(dishRelated);
    } else {
      res.status(404).json({ message: "There is no dish with that ID!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "The dish could not be found. Is the server actually on!?"
    });
  }
});

// Adds a new dish to the database -- POST /api/dishes
router.post("/", validateDish, async (req, res) => {
  try {
    const dish = await Dishes.insertDish(req.body);
    res.status(201).json(dish.id);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating a new Dish!" });
  }
});

// Custom middleware

function validateDish(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    if (req.body.name !== "") {
      next();
    } else {
      res.status(400).json({ message: "Please name the dish" });
    }
  } else {
    res.status(500).json({ message: "Critical Fail - Unable to comply" });
  }
}
module.exports = router;
