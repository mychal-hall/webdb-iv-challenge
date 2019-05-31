const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// Routers import here
const dishRouter = require("./routes/dishesRouter.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("tiny"));

// Set router path here
server.use("/api/dishes", dishRouter);

// Trash online test
server.get('/', (req, res) => {
    res.send("<h1>API is online</h1>")
})

// export server
module.exports = server;
