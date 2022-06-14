const express = require("express");
const productsRouter = require("./routes/Products_route");
const userRouter = require("./routes/User_route");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", productsRouter);
app.use("/auth", userRouter);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(PORT, () => {
  console.log("Server started at http://localhost:8080");
});
