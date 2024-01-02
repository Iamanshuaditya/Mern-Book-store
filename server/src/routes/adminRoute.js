const express = require("express");
const adminControllerPath = path.join(
  __dirname,
  "../controllers/adminController"
);

const { adminLogin, adminSignup } = require(adminControllerPath);
const authenticateJwt = require("../middlewares/authenticateJwt");
const router = express.Router();

router.post("/admin/login", adminLogin);
router.post("/admin/signup", adminSignup);

router.get("/admin/dashboard", authenticateJwt, (req, res) => {
  res.json({ message: "Admin dashboard" });
});

router.get("/admim/me", authenticateJwt, (req, res) => {
  res.json({ username: req.user.username });
});

module.exports = router;
