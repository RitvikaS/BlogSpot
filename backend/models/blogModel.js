// models/Blog.js
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  comment: String,
});

const BlogSchema = new mongoose.Schema({
  id: Number,
  title: String,
  heading: String,
  route: String,
  description: String,
  date: String,
  dateTime: String,
  category: {
    title: String,
    href: String,
  },
  image: String,
  author: {
    name: String,
    role: String,
    href: String,
    imageUrl: String,
  },
  content: String,
  commentSection: [CommentSchema],
});

const Blog = mongoose.model("BlogCollections", BlogSchema);

module.exports = Blog;
