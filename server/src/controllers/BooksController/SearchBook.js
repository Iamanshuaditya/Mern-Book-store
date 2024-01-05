const BookModel = require("../../models/BookModel");

const SearchBook = async (req, res) => {
  try {
    const param = req.query.param;

    const result = await BookModel.find({
      $or: [
        { Title: { $regex: param, $options: "i" } },
        { ISBN: { $regex: param, $options: "i" } },
        { Authors: { $regex: param, $options: "i" } },
        { categories: { $regex: param, $options: "i" } },
      ],
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.json({ message: err });
  }
};
module.exports = {
  SearchBook,
};
