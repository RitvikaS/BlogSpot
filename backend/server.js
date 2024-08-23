// const express = require("express");
// const mysql = require("mysql2");
// require("dotenv").config();
// const userRoutes = require('./routes/userRoutes');

// const app = express();
// const cors = require('cors'); // Import cors

// const port = process.env.PORT || 3000;

// app.use(express.json()); // For parsing application/json

// // Enable CORS for all origins (or configure as needed)
// app.use(cors());

// // const corsOptions = {
// //   origin: 'http://localhost:5173', // Allow only this origin
// //   methods: 'GET,POST,PUT,DELETE', // Allowed methods
// //   allowedHeaders: 'Content-Type', // Allowed headers
// // };

// // // Enable CORS with options
// // app.use(cors(corsOptions));

// // Create MySQL connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err);
//     return;
//   }
//   console.log("Connected to MySQL");
// });

// app.use('/api/users', userRoutes);

// // // Define a simple route
// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });

// // app.get("/users", (req, res) => {
// //   const sql = "SELECT * FROM users";
// //   db.query(sql, (err, results) => {
// //     if (err) {
// //       return res.status(500).json({ error: err.message });
// //     }
// //     res.json(results);
// //   });
// // });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

/**
 New Method 


 const app = require("./app");
 const port = process.env.PORT || 3000;
 
 app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
 });

 */

/**
  * 
  * 
  * 
  * 
  MONGO DB METHOD
  * 
  * 
  * 
  */

const express = require("express");
const connectDB = require("./config/db.config");
const blogRoutes = require("./routes/blogsRoutes");
const cors = require("cors");

const app = express();
const port = 5000;

// Connect to the database
connectDB();

// Enable CORS with options
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
  })
);

// Middleware
app.use(express.json());

// Use routes
app.use("/blogs", blogRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
