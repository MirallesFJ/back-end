const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required!"],
    unique: true,
  },
  author: {
    type: String,
    required: [true, "Book author is required!"],
  },
  genre: {
    type: String,
    default: "Undefined",
  },
  status: {
    type: String,
    default: "Undefined",
  },
  pages: Number,
  rating: {
    type: Number,
    default: 3,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
