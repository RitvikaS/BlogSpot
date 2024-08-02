const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogsController");

console.log("blog routes file");
router.get("/getAllBlogs", blogController.getAllBlogs);

module.exports = router;
