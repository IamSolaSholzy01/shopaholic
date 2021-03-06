import React, {useContext, useState} from "react";
import {Link as RouterLink} from "react-router-dom";
import {Link} from "@mui/material";
import {Login} from "../../../../api/fetch";
import displayMsg from "../../../../ui-component/Toast";
import {UserContext} from "../../../../contexts/AuthContext";
import { LoadingButton } from "../../../buttons";

const LoginTab = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose?: () => void;
}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let [loginVisible] = useState(visible);
  const [isLoading, setisLoading] = useState(false);
  const {setIsLoggedIn} = useContext(UserContext);
  const signIn = (event: {preventDefault: () => void}) => {
    console.log("touched");
    event.preventDefault();
    setisLoading(true);
    Login(username, password, OnAfterSignIn);
  };

  const OnAfterSignIn = (result: any) => {
    console.log(result);
    setisLoading(false);
    if (result.token) {
      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("token", result.token);
      sessionStorage.setItem("user_id", result.data.user._id);
      sessionStorage.setItem("username", result.data.user.username);
      setIsLoggedIn(true);
      // setLoginVisible(false)
      if (onClose) {
        onClose();
      }
      displayMsg("success", "Login successful");
    } else {
      displayMsg("error", "wrong credentials");
    }
  };

  return (
    <>
      <div className={loginVisible ? "block" : "hidden"}>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?&nbsp;
            <a
              href="/register"
              className="font-medium text-rose-600 hover:text-primary"
            >
              Register
            </a>
          </p>
        </div>
        <form onSubmit={signIn} className="mt-8 space-y-6 mx-6" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Username</label>
              <input
                onChange={e => {
                  setUserName(e.target.value);
                }}
                name="username"
                type="text"
                autoComplete="username"
                required={true}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                onChange={e => {
                  setPassword(e.target.value);
                }}
                name="password"
                type="password"
                autoComplete="current-password"
                required={true}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                component={RouterLink}
                to="/"
                className="font-medium text-rose-500 hover:text-primary"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div>
            <LoadingButton
              fullWidth
              loading={isLoading}
              type="submit"
              variant="contained"
            >
              Log In
            </LoadingButton>
            {/* <button
              disabled={isLoading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-rose-500 group-hover:text-rose-400"
                  x-description="Heroicon name: solid/lock-closed"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              {isLoading ? (
                <CircularProgress size={"1.5rem"} color="inherit" />
              ) : (
                "Log In"
              )}
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginTab;
