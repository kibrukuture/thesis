import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" ">
      <div
        className="
    container
    flex flex-col flex-wrap
    px-4
    py-16
    mx-auto
    md:items-center
    lg:items-start
    md:flex-row md:flex-nowrap
  "
      >
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Link to="/">
            <a
              href="https://index.html"
              className="
        flex
        items-center
        justify-center
        text-4xl
        font-bold
        text-gold
        md:justify-start
      "
            >
              Quader
            </a>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Product Placement General Purpose E-commerece
          </p>
        </div>
        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              CONTACT US
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              HIRING
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Express Quader
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Kargo Mini</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Quader Tech</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-gray-900">
              TRENDING
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Jacket for Winter
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Nano Computer
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Rider Bike</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Graphics card
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Gaming</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-base text-gray-400">
          All rights reserved @ Quader 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
