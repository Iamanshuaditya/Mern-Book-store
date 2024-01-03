const me = (req, res) => {
  console.log("User in me route:", req.user);
  const { name } = req.user;
  res.json({ name });
};

module.exports = {
  me,
};
