import React, { useState } from "react";
import "./CreateBlog.css";
import UploadImg from "../../assets/images/upload.jpg";
import axios from "axios";
import { MockAPI } from "../../MOCK API/mockProvider";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  let axiosInstance = axios.create();
  MockAPI(axiosInstance);
  let navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function setBlogTitle(e: any) {
    setTitle(e.target.value);
  }
  function setBlogContent(e: any) {
    setContent(e.target.value);
  }
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  function createBlog() {
    let newBlog = {
      title: title,
      image: image,
      content: content,
    };
    if (!newBlog.title) {
      enqueueSnackbar("Please Add title for blog", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    } else if (!newBlog.image) {
      enqueueSnackbar("Please Add image for blog", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    } else if (!newBlog.content) {
      enqueueSnackbar("Please Add Content for blog", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    } else {
      axiosInstance
        .post("/postBlog", newBlog)
        .then((response) => {
          console.log(response);
          enqueueSnackbar("Blog Created", {
            variant: "success",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          });
          setTimeout(()=>{
            navigate(`/blog/${encodeURIComponent(newBlog.title)}`)
          },1500)
        })
        .catch((Error) => {
          console.log(Error);
        });
    }
  }

  return (
    <div>
      <div className="title">
        <input
          type="text"
          value={title}
          onChange={setBlogTitle}
          className="text-center"
          placeholder="Title for blog"
          style={{ border: "none", outline: "none" }}
        />
      </div>
      <div className="flex justify-center">
        <input
          type="file"
          className="mb-6"
          id="file-upload"
          accept=".jpeg,.jpg,.png"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <label
          htmlFor="file-upload"
          style={{ cursor: "pointer", marginBottom: "10px" }}
        >
          <img src={UploadImg} style={{ width: "100px" }} />
          <span>Upload Image</span>
        </label>
      </div>
      <div>
        {image && <img className="blogImage" src={image} alt="Preview" />}
      </div>
      <div className="description">
        <textarea
          id="message"
          rows={16}
          value={content}
          onChange={setBlogContent}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write here..."
          style={{ border: "none", outline: "none" }}
        ></textarea>
      </div>
      <div className="createBtn">
        <button
          type="button"
          onClick={createBlog}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Create
        </button>
      </div>
    </div>
  );
}
export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <AddBlog />
    </SnackbarProvider>
  );
}
