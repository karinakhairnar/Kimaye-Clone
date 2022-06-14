const { Router } = require("express");
const Product = require("../models/Products");

const productsRouter = Router();

productsRouter.post("/products", (req, res) => {});

productsRouter.get("/products", async (req, res) => {});

module.exports = productsRouter;
