const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
  mongoose
    .connect('mongodb://localhost:27017/login-user', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("Database connection successfully!");
    })
    .catch((error) => {
      console.log("Database connetion error: ", error);
    });
};

module.exports = { connectDB };