import express from "express";
const userController = require("../controllers/user.controller");

route.post("/", userController.create);

module.exports = route;
