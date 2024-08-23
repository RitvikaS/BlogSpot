const db = require("../config/db.config");

// //get all blogs
// exports.getAllBlogs = (req, res) => {
//   console.log("get all blogs function");

//   const blogPostsQuery = `SELECT
//         b.id AS blogPostId,
//         b.title,
//         b.heading,
//         b.route,
//         b.description,
//         b.date,
//         b.dateTime,
//         b.category,
//         b.image AS blogImage,
//         b.content,
//         a.name AS authorName,
//         a.role AS authorRole,
//         a.imageUrl AS authorImageUrl
//       FROM BlogPosts b
//       JOIN Authors a ON b.authorId = a.id`;

//   db.query(blogPostsQuery, (err, blogPosts) => {
//     if (err) {
//       console.error("Error executing blog posts query:", err);
//       return res
//         .status(500)
//         .json({ error: "Server error", details: err.message });
//     }

//     // Collect blog post IDs for the comment query
//     const blogPostIds = blogPosts.map((post) => post.blogPostId);
//     if (blogPostIds.length === 0) {
//       // No blog posts, return empty array
//       return res.json([]);
//     }

//     // Query to fetch comments for the retrieved blog posts
//     const commentsQuery = `
//           SELECT
//             blogPostId,
//             name,
//             email,
//             date AS commentDate,
//             comment
//           FROM Comments
//           WHERE blogPostId IN (${blogPostIds.join(",")})`;

//     db.query(commentsQuery, (err, comments) => {
//       if (err) {
//         console.error("Error executing comments query:", err);
//         return res
//           .status(500)
//           .json({ error: "Server error", details: err.message });
//       }

//       // Organize comments by blog post
//       const commentsByBlogPost = comments.reduce((acc, comment) => {
//         if (!acc[comment.blogPostId]) {
//           acc[comment.blogPostId] = [];
//         }
//         acc[comment.blogPostId].push({
//           name: comment.name,
//           email: comment.email,
//           date: comment.commentDate,
//           comment: comment.comment,
//         });
//         return acc;
//       }, {});
//       console.log("comments h -- ", commentsByBlogPost);

//       // Format the response with blog posts and comments
//       const response = blogPosts.map((post) => ({
//         id: post.blogPostId,
//         title: post.title,
//         heading: post.heading,
//         route: post.route,
//         description: post.description,
//         date: post.date,
//         dateTime: post.dateTime,
//         category: post.category,
//         image: post.blogImage,
//         author: {
//           name: post.authorName,
//           role: post.authorRole,
//           imageUrl: post.authorImageUrl,
//         },
//         content: post.content,
//         commentSection: commentsByBlogPost[post.blogPostId] || [],
//       }));

//       // Send JSON response
//       res.json(response);
//     });
//   });
// };

// //get blog by id
// exports.getBlogById = (req, res) => {
//   const blogPostId = req.params.id;
//   console.log("get blog by id function", blogPostId);

//   const blogPostQuery = `SELECT
//         b.id AS blogPostId,
//         b.title,
//         b.heading,
//         b.route,
//         b.description,
//         b.date,
//         b.dateTime,
//         b.category,
//         b.image AS blogImage,
//         b.content,
//         a.name AS authorName,
//         a.role AS authorRole,
//         a.imageUrl AS authorImageUrl
//       FROM BlogPosts b
//       JOIN Authors a ON b.authorId = a.id
//       WHERE b.id = ${blogPostId}`;

//   db.query(blogPostQuery, (err, blogPost) => {
//     if (err) {
//       console.error("Error executing blog posts query:", err);
//       return res
//         .status(500)
//         .json({ error: "Server error", details: err.message });
//     }

//     // Collect blog post IDs for the comment query
//     const blogPostIds = blogPosts.map((post) => post.blogPostId);
//     if (blogPostIds.length === 0) {
//       // No blog posts, return empty array
//       return res.json([]);
//     }

//     // Query to fetch comments for the retrieved blog posts
//     const commentsQuery = `
//           SELECT
//             blogPostId,
//             name,
//             email,
//             date AS commentDate,
//             comment
//           FROM Comments
//           WHERE blogPostId IN (${blogPostIds.join(",")})`;

//     db.query(commentsQuery, (err, comments) => {
//       if (err) {
//         console.error("Error executing comments query:", err);
//         return res
//           .status(500)
//           .json({ error: "Server error", details: err.message });
//       }

//       // Organize comments by blog post
//       const commentsByBlogPost = comments.reduce((acc, comment) => {
//         if (!acc[comment.blogPostId]) {
//           acc[comment.blogPostId] = [];
//         }
//         acc[comment.blogPostId].push({
//           name: comment.name,
//           email: comment.email,
//           date: comment.commentDate,
//           comment: comment.comment,
//         });
//         return acc;
//       }, {});
//       console.log("comments h -- ", commentsByBlogPost);

//       // Format the response with blog posts and comments
//       const response = blogPosts.map((post) => ({
//         id: post.blogPostId,
//         title: post.title,
//         heading: post.heading,
//         route: post.route,
//         description: post.description,
//         date: post.date,
//         dateTime: post.dateTime,
//         category: post.category,
//         image: post.blogImage,
//         author: {
//           name: post.authorName,
//           role: post.authorRole,
//           imageUrl: post.authorImageUrl,
//         },
//         content: post.content,
//         commentSection: commentsByBlogPost[post.blogPostId] || [],
//       }));

//       // Send JSON response
//       res.json(response);
//     });
//   });
// };

const Blog = require("../models/blogModel");

// function to get all blogs
const getAllBlogs = async (req, res) => {
  console.log("get all");
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// function to get blog by id
const getBlogByID = async (req, res) => {
  console.log("get blog by id");
  try {
    const id = req.params.blogId;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// function to add comment
const addComment = async (req, res) => {
  console.log("req ->", req.body, req.body.id);
  try {
    const id = req.body.id; // Blog ID from the URL
    const { name, email, date, comment } = req.body.comment; // Comment data from the request body

    console.log(id, name);
    // Find the blog post by ID
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Add the comment to the blog's commentSection array
    blog.commentSection.push({ name, email, date, comment });

    // Save the updated blog
    await blog.save();

    // Return the updated blog
    res.json(blog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllBlogs,
  getBlogByID,
  addComment,
};
