const { createUser, getUsers } = require("../controllers/users.controller.js");
const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/", getUsers).post("/", createUser);

module.exports = { usersRouter };
