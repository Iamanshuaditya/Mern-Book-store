const User = require("../../models/User");

const me = async (req, res) => {
  try {
    const username = req.user.username;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ msg: "No such user found" });
    }
    const { name } = user;
    res.json({ name });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  me,
};
