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

// Adds a new dish to the database -- POST /api/dishes

module.exports = router;
