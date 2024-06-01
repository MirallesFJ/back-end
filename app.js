const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const bookRouter = require("./routes/bookRoutes"); // Import the book router
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use cors middleware and allow cross-origin requests
app.use(cors());

// Read the config.env file
dotenv.config({ path: "./config.env" });

// Connect to MongoDB
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

// Use the book router for all routes starting with /books
app.use("/books", bookRouter);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
