// const mysql = require('mysql2');
// require('dotenv').config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//     return;
//   }
//   console.log('Connected to database.');
// });

// module.exports = db;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://sritvika:auR975RXPjVcvQEy@cluster0.p2tyu.mongodb.net/BlogsData"
      )
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(err));

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
