const { Router } = require("express");
const User = require("../models/User");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {});

userRouter.post("/login", async (req, res) => {});

userRouter.get("/logout", async (req, res) => {});

module.exports = userRouter;
