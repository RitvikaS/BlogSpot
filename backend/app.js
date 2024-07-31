const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use(errorMiddleware);

module.exports = app;
