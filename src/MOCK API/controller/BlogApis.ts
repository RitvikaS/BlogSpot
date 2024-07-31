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
export const getBlogsByCategory = async (category: string) => {
  const filteredBlogs = BlogData.filter(
    (blog) => blog.category.title === category
  );

  return [200, filteredBlogs];
};
export const postComment = async (payload: any) => {
  let newComment: any = {
    name: payload.comment.name,
    email: payload.comment.email,
    date: new Date(),
    comment: payload.comment.comment,
  };

  const index = BlogData.findIndex((blog) => blog.title === payload.title);
  console.log(index, BlogData[index].commentSection);

  if (index !== -1) {
    BlogData[index].commentSection.push(newComment);
    console.log(BlogData);

    return [200, { message: "User Updated", status: 200 }];
  } else {
    return [400, { message: "This email does not exist" }];
  }
};
