import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../App";

const SignIn = () => {
  const context = useContext(Context);

  const [email, setEmail] = useState();
  const [passcode, setPasscode] = useState();

  const [valid, setValid] = useState(false);
  const [sub, setSub] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePasscode = (e) => {
    setPasscode(e.target.value);
  };

  const hanldeSubmit = (e) => {
    let valid = false;

    context.loggedUsers.forEach((user) => {
      if (user.email === email && user.passcode === passcode) valid = true;
      else valid = false;

      if (valid) {
        setValid(valid);
      } else {
        setValid(valid);
      }
    });
    if (email && passcode) setSub(true);
  };
  return (
    <div className="  min-h-screen flex justify-center items-center  ">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-3/12">
        <form
          className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8 w-full"
          action="#"
        >
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to Quader
          </h3>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
              onChange={handleEmail}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              onChange={handlePasscode}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a className="text-sm text-blue-700 hover:underline dark:text-blue-500">
              Lost Password?
            </a>
          </div>
          <button
            onClick={hanldeSubmit}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex justify-between">
            {sub ? (
              valid ? (
                ""
              ) : (
                <p className="block text-red-500">Not registered user</p>
              )
            ) : (
              ""
            )}
            <Link to="/account">
              <a className="text-blue-700 hover:underline dark:text-blue-500">
                Create account
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
