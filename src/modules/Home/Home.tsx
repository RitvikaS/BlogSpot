import "./Home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MockAPI } from "../../MOCK API/mockProvider";
import { Blog } from "../../model";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { MenuItem } from "@mui/material";

export function Home() {
  const axiosInstance = axios.create();
  MockAPI(axiosInstance);

  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    axiosInstance
      .get("/getAllBlogs")
      .then((res: any) => {
        setPosts(res.data.BlogData);
        console.log("All blogs = ", posts, res);
      })
      .catch((err: any) => {
        console.log(err);
      });

    // axios
    //   .get("http://localhost:3000/api/users/users")
    //   .then((response) => console.log(response.data))
    //   .catch((error) => console.error("Error:", error));

    axios
      .get("http://localhost:3000/api/blog/getAllBlogs")
      .then((response) => console.log("blogs -", response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to Blog-Spot
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Get your cup of coffee and Read, Write, Post, Enjoy.
              </p>
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton
                      className="w-48 text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-2"
                      style={{
                        border: "2px solid #e5e7eb",
                      }}
                    >
                      Choose from Category
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        All
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Health
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Lifestyle
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Marketing
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Fashion
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div>
                  <img
                    alt=""
                    src={post.image}
                    className="w-100 blogThumbnail"
                  />
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.dateTime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={`/blog/${encodeURIComponent(post.title)}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={post.author.imageUrl}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
