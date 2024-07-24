import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";
import { MockAPI } from "../../../MOCK API/mockProvider";
export function SignIn({ closeModal }: any) {
  const axiosInstance = axios.create();
  MockAPI(axiosInstance);

  let navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const [errorsLoginDetail, setErrorsLoginDetail] = useState({
    email: "",
    password: "",
  });

  const [goToSignUp, setGoToSignUp] = useState(false);
  function setEmailAddress(event: any) {
    const email = event.target.value;
    setLoginDetail({ ...loginDetail, email });
    if (!email) {
      setErrorsLoginDetail({
        ...errorsLoginDetail,
        email: "Email is required",
      });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setErrorsLoginDetail({
        ...errorsLoginDetail,
        email: "Please Enter valid email",
      });
    } else {
      setErrorsLoginDetail({ ...errorsLoginDetail, email: "" });
    }
  }

  function setPassword(event: any) {
    const password = event.target.value;
    setLoginDetail({ ...loginDetail, password });
    if (!password) {
      setErrorsLoginDetail({
        ...errorsLoginDetail,
        password: "Password is required",
      });
    } else {
      setErrorsLoginDetail({ ...errorsLoginDetail, password: "" });
    }
  }
  function login(event: any) {
    event.preventDefault();
    if (loginDetail.email === "" || loginDetail.password === "") {
      alert("Invalid Form Values");
      return;
    } else if (
      errorsLoginDetail.email !== "" ||
      errorsLoginDetail.password !== ""
    ) {
      alert("Invalid Form Values");
      return;
    } else {
      console.log("Form submitted with:", loginDetail, errorsLoginDetail);

      const userDetail = {
        email: loginDetail.email,
        password: loginDetail.password,
      };

      axiosInstance
        .post("/login", userDetail)
        .then((response) => {
          console.log("user logged in successfully :", response.data.loggedInUser[0]);
          localStorage.setItem("userDetail",JSON.stringify(response.data.loggedInUser[0]));
          localStorage.setItem('isLoggedIn',JSON.stringify(true))
          
          alert("Logged in successfully");
          closeModal();
          navigate("add-blog");
          // Handle response data
        })
        .catch((error) => {
          console.error("Error updating user:", error.response.data);
          alert(error.response.data.message);
          // Handle errors
        });
    }
  }

  const [signUpDetail, setSignUpDetail] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorsSignUpDetail, setErrorsSignUpDetail] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  function addEmailAddress(event: any) {
    const email = event.target.value;
    setSignUpDetail({ ...signUpDetail, email: email });

    if (!email) {
      setErrorsSignUpDetail({
        ...errorsSignUpDetail,
        email: "Email is required",
      });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setErrorsSignUpDetail({
        ...errorsSignUpDetail,
        email: "Please Enter valid email",
      });
    } else {
      setErrorsSignUpDetail({ ...errorsSignUpDetail, email: "" });
    }
  }
  function setPass(event: any) {
    const password = event.target.value;
    setSignUpDetail({ ...signUpDetail, password: event.target.value });

    if (!password) {
      setErrorsSignUpDetail({
        ...errorsSignUpDetail,
        password: "Password is required",
      });
    } else {
      setErrorsSignUpDetail({ ...errorsSignUpDetail, password: "" });
    }
  }
  function EnterPassAgain(event: any) {
    const password = event.target.value;
    setSignUpDetail({ ...signUpDetail, confirmPassword: event.target.value });

    if (!password) {
      setErrorsSignUpDetail({
        ...errorsSignUpDetail,
        confirmPassword: "Password is required",
      });
    } else {
      setErrorsSignUpDetail({ ...errorsSignUpDetail, confirmPassword: "" });
    }
  }
  function signUp() {
    // event.preventDefault();
    if (
      signUpDetail.email === "" ||
      signUpDetail.password === "" ||
      signUpDetail.confirmPassword === ""
    ) {
      alert("Invalid Form Values");
      return;
    } else if (
      errorsSignUpDetail.email !== "" ||
      errorsSignUpDetail.password !== "" ||
      errorsSignUpDetail.confirmPassword !== ""
    ) {
      alert("Invalid Form Values");
      return;
    } else if (signUpDetail.password !== signUpDetail.confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      const newUser = {
        email: signUpDetail.email,
        password: signUpDetail.password,
      };

      axiosInstance
        .post("/signUp", newUser)
        .then((response) => {
          console.log("User added:", response.data);
          alert("Signed up successfully");
          // Handle response data
        })
        .catch((error) => {
          console.error("Error adding user:", error);
          alert(error.response.data.message);
          // Handle errors
        });
      setGoToSignUp(false);
    }
  }

  return (
    <div style={{ background: "white" }}>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {goToSignUp ? "Sign up" : "Login"}
          </div>
        </div>
        {!goToSignUp ? (
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={loginDetail.email}
                    onChange={setEmailAddress}
                    autoComplete="email"
                    required
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errorsLoginDetail.email && (
                    <p className="error-message">{errorsLoginDetail.email}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={loginDetail.password}
                    name="password"
                    onChange={setPassword}
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                  {errorsLoginDetail.password && (
                    <p className="error-message">
                      {errorsLoginDetail.password}
                    </p>
                  )}
                </div>
              </div>
              <div className="text-sm text-right !mt-2">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>

              <div>
                <button
                  type="button"
                  onClick={login}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account ?
              <span
                onClick={() => setGoToSignUp(true)}
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Sign Up
              </span>
            </p>
          </div>
        ) : (
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div className="form-group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={signUpDetail.email}
                    onChange={addEmailAddress}
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                  {errorsSignUpDetail.email && (
                    <p className="error-message">{errorsSignUpDetail.email}</p>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Set Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={signUpDetail.password}
                  onChange={setPass}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
                {errorsSignUpDetail.password && (
                  <p className="error-message">{errorsSignUpDetail.password}</p>
                )}
              </div>
              <div className="form-group">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={signUpDetail.confirmPassword}
                  onChange={EnterPassAgain}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
                {errorsSignUpDetail.confirmPassword && (
                  <p className="error-message">
                    {errorsSignUpDetail.confirmPassword}
                  </p>
                )}
              </div>
              <div>
                <button
                  type="button"
                  onClick={signUp}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Back to
              <span
                onClick={() => setGoToSignUp(false)}
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
