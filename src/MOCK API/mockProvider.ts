import {
  getBlog,
  getAllBlogs,
  postBlog,
  postComment,
} from "./controller/BlogApis";
import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import getAllUsers, { addUser, login, updateUser } from "./controller/Users";

export const MockAPI = (axiosInstance: AxiosInstance) => {
  let mock = new MockAdapter(axiosInstance);

  /*Blog APIS
  -----------------------------
  */
  mock.onGet(/\/getBlog\/.+/).reply((config) => {
    const blogTitle = decodeURIComponent(config.url?.split("/").pop() || "");
    return getBlog(blogTitle);
  });

  mock.onGet("/getAllBlogs").reply(getAllBlogs as any);
  mock.onPost("/postBlog").reply((config) => {
    const payload = JSON.parse(config.data);
    return postBlog(payload);
  });
  mock.onPost("/postComment").reply((config): any => {
    const payload = JSON.parse(config.data);
    return postComment(payload);
  });

  /*Auth APIS
  -----------------------------
  */
  mock.onGet("/getVerifiedUsers").reply(getAllUsers as any);
  // mock.onPost("/addUser").reply(addUser as any);
  mock.onPost("/signUp").reply((config) => {
    const payload = JSON.parse(config.data);
    return addUser(payload);
  });
  mock.onPut("/updatePassword").reply((config) => {
    const payload = JSON.parse(config.data);
    return updateUser(payload);
  });
  mock.onPost("/login").reply((config) => {
    const payload = JSON.parse(config.data);
    return login(payload);
  });
};
