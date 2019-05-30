const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// Routers import here

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("tiny"));

// Set router path here

// Trash online test

// export server
module.exports = server;
