import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { Context } from "../../App";

const Header = () => {
  const context = useContext(Context);

  const [accountHovered, setAccountHovered] = useState(false);
  const handleAccountMouseOver = (e) => {
    setAccountHovered(true);
  };
  const handleAccountMouseLeave = (e) => {
    setAccountHovered(false);
  };
  return (
    <div className="grid grid-cols-6 pt-2 mb-4 text-white">
      <Link to="/">
        <p className="text-2xl md:text-3xl pl-2">Quader</p>
      </Link>
      <div className="flex gap-2 col-start-3 col-end-6 justify-end">
        <div className="flex flex-1 items-center border-2 border-darkgray rounded-full px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="search"
            placeholder="Search product here"
            className="bg-black focus:outline-0 border-0  ml-2 w-full h-full placeholder:text-lightgray"
          />
        </div>
        <div className="mx-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Location</span>
        </div>

        <div
          className="mx-4 cursor-pointer "
          onMouseOver={handleAccountMouseOver}
          onMouseLeave={handleAccountMouseLeave}
        >
          <div className="flex gap-4 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <div className="relative">
                <span>Account</span>
              </div>
            </div>
          </div>

          <div
            className={
              accountHovered
                ? "absolute w-max border-2 p-2 border-darkgray"
                : "hidden"
            }
          >
            {context.first !== "" ? (
              <div> {"Hello, " + context.first}</div>
            ) : (
              <Link to="/account">
                <p className="my-1 hover:bg-darkgray">Sign Up</p>
              </Link>
            )}

            {context.first && (
              <Link to="/cms">
                <p className="my-1 hover:bg-darkgray">Become a Seller</p>
              </Link>
            )}
          </div>
        </div>
        <Link to="/basket">
          <div className="mx-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span>Basket</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
