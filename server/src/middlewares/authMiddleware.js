const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecretKey = process.env.JWT_SECRET_KEY;

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, jwtSecretKey, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Token expired" });
        }
        console.log("JWT Verification Error:", err);

        return res.status(500).json({ message: "Internal Server Error" });
      }
      console.log("Decoded User:", user);

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

module.exports = {
  authenticateJwt,
};
