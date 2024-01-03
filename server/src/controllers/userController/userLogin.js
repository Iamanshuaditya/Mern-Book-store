const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwtSecretKey = process.env.JWT_SECRET_KEY;

const login = async (req, res) => {
  try {
    const { username, password, name } = req.body;

    if (!username || !password) {
      return res.status(401).json({ error: "Missing username or password" });
    }

    const user = await User.findOne({ username }).select("-name");

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          username,
          role: "user",
          name,
        },
        jwtSecretKey,
        {
          expiresIn: "1h",
        }
      );
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  login,
};
