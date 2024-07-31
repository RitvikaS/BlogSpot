const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

console.log("routes file");
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/users", userController.users);

module.exports = router;
