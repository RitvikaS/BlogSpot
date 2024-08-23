// models/Blog.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
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
  commentSection: [commentSchema],
});

const Blog = mongoose.model("BlogCollections", BlogSchema);

module.exports = Blog;
