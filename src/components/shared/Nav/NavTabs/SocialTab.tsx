import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Link} from "@mui/material";
const SocialTab = (visible: any) => {
  let socialVisible = visible.visible;

  return (
    <>
      <div className={socialVisible ? "block" : "hidden"}>
        <>
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Use a Voucher
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Don't have an account?&nbsp;
              <Link
                component={RouterLink}
                to="/"
                className="font-medium text-rose-600 hover:text-rose-500"
              >
                Register
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6 mx-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="voucher" className="sr-only">
                  Voucher
                </label>
                <input
                  id="voucher"
                  name="voucher"
                  type="text"
                  autoComplete="off"
                  required={true}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Voucher"
                />
              </div>
            </div>

            <div>
              <button
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
                Submit
              </button>
            </div>
          </form>
        </>
      </div>
    </>
  );
};

export default SocialTab;
