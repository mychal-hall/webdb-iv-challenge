const express = require("express");

const Dishes = require("./dishesModel.js");

const router = express.Router();


// Lists all the dishes in the database -- GET /api/dishes

// Lists one dish with a specific ID -- GET /api/dishes/:id

// Adds a new dish to the database -- POST /api/dishes
