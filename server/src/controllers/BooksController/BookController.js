const { db } = require("../../models/User");

const getBooks = async () => {
  try {
    let collection = db.collection("Book");
    const books = await collection.find().toArray();
    return books;
  } catch (error) {
    console.error("Error retrieving books:", error);
    throw error;
  }
};

module.exports = {
  getBooks,
};
