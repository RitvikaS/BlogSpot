import { BlogData } from "../db/BlogData";
import Author4 from "../../assets/images/author4.jpg";

export const getBlog = async (route: any) => {
  const blog = BlogData.filter((blog) => blog.route === route);

  if (blog && blog.length) {
    return [200, { blog, status: 200 }];
  } else {
    return [404, { message: "Blog not found", status: 404 }];
  }
};

export const getAllBlogs = async () => {
  return [200, { BlogData, status: 200 }];
};
export const postBlog = async (payload: any) => {
  let newBlog: any;
  let userDetail = JSON.parse(localStorage.getItem("userDetail") ?? "{}");
  let date = new Date();

  newBlog = {
    id: Math.random(),
    title: payload.title,
    heading: payload.title,
    route: payload.title,
    description: payload.content,
    date: date,
    dateTime: date,
    category: { title: "xyz", href: "#" },
    image: payload.image,
    author: {
      name: userDetail?.email,
      role: "Writer",
      href: "#",
      imageUrl: Author4,
    },
    content: payload.content,
    commentSection: [],
  };

  BlogData.unshift(newBlog);
  console.log(BlogData);

  return [201, { message: "Blog Posted...", status: 201 }];
};
export const postComment = async (payload: any) => {
  console.log("Comment - ", payload);
  
  let newComment = {
    name: payload.name,
    email: payload.email,
    date: new Date(),
    comment: payload.comment
  }

};
