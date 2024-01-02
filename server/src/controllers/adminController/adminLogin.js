const Admin = require("../../models/adminModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecretKey = process.env.JWT_SECRET_KEY;

const adminLogin = async (req, res) => {
  const { username, password } = req.user;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: "admin" }, jwtSecretKey, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in sucessfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
};

module.exports = {
  adminLogin,
};
