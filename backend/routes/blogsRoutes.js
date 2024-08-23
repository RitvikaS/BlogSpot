const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogsController");

// Route to get all blogs
console.log("route blogs");
router.get("/getAllBlogs", blogController.getAllBlogs);
router.get("/getBlogById/:blogId", blogController.getBlogByID);
module.exports = router;
