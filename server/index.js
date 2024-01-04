const path = require("path");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bookRoute = require("./src/routes/BookRoute");

const userRoutesPath = path.join(__dirname, "src", "routes", "userRoutes.js");
const userRoutes = require(userRoutesPath);

const app = express();
const port = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI.replace("::1", "127.0.0.1");

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/books", bookRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ error: "Internal Server Error", message: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
