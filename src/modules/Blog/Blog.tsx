import "./Blog.css";
import { useEffect, useState } from "react";
import { MockAPI } from "../../MOCK API/mockProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Comment } from "../../model";

export function Blog() {
  const axiosInstance = axios.create();
  MockAPI(axiosInstance);

  const { blogId } = useParams();
  const [error, setError] = useState("");
  const [blog, setBlog] = useState<any>({});
  const [comment, setComment] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });
  function addComment(e: any) {
    let commentText = e.target.value;
    setComment({
      ...comment,
      comment: commentText,
    });
  }

  function setName(e: any) {
    let name = e.target.value;
    setComment({ ...comment, name });
  }
  function setEmail(e: any) {
    let email = e.target.value;
    setComment({ ...comment, email });
    if (!email) {
      setError("Email is required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError("Please Enter valid email");
    } else {
      setError("");
    }
  }
  function setDate() {
    let date = new Date().toLocaleString();
    setComment({ ...comment, date });
  }

  const getBlogDetails = (blogId: any) => {
    axios
      .get(`http://localhost:5000/blogs/getBlogById/${blogId}`)
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
        setBlog((prev: any) => ({ ...prev, prev: res.data }));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (blogId) {
      getBlogDetails(blogId);
    }
  }, [blogId]);

  function postComment() {
    if (!error) {
      let payload = {
        id: blogId,
        comment: comment,
      };
      setDate();
      axios
        .post(`http://localhost:5000/blogs/${blogId}/comments`, payload)
        .then((res) => {
          console.log(res);
          setComment({
            name: "",
            email: "",
            date: "",
            comment: "",
          });
          getBlogDetails(blogId);
        })
        .catch((err) => {
          console.log(err);
        });

      //   axiosInstance
      //     .post("/postComment", payload)
      //     .then(() => {
      //       setComment({
      //         comment: "",
      //         name: "",
      //         email: "",
      //       });
      //       getBlogDetails(payload.title ?? "");
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
    }
  }

  return (
    <div>
      <div className="title">
        <p>{blog.title}</p>
      </div>
      <div>
        <img src={blog.image} className="blogImage" />
      </div>
      <div className="description">
        <p>{blog.content}</p>
      </div>
      <div className="border-t border-gray m-16">
        <div className="text-5xl mt-8">
          <span className="text-rose-600">{blog?.commentSection?.length}</span>{" "}
          COMMENTS
        </div>
        <div className="w-9/12" style={{ margin: "auto" }}>
          <div>
            <p className="text-3xl mt-8 mb-4">Leave Comment</p>
            <textarea
              id="message"
              rows={6}
              value={comment.comment}
              onChange={addComment}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>

            <div className="mt-4">
              <label>Name:</label>
              <input
                type="text"
                value={comment.name}
                onChange={setName}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please enter your Name"
              ></input>
            </div>

            <div className="mt-4">
              <label>Email:</label>
              <input
                type="email"
                value={comment.email}
                onChange={setEmail}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please enter your Email Address"
              ></input>
              {error && <p className="error-message">{error}</p>}
            </div>

            <div className="mt-4 text-right">
              <button
                type="button"
                onClick={postComment}
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Comment
              </button>
            </div>
          </div>
          <div className="mt-2">
            {Array.isArray(blog.commentSection) &&
              blog.commentSection.map((comment: Comment) => (
                <div key={comment.email} className="mt-8 comment">
                  <div className="mt-8 comment">
                    <p className="text-3xl font-normal">
                      {comment.name} says...
                    </p>
                    <p className="mt-4">{comment.comment}</p>
                    <div className="mt-4 flex justify-between">
                      <p className="text-gray-500">{comment.date}</p>
                      <p className="text-red-500 cursor-pointer">Reply</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
