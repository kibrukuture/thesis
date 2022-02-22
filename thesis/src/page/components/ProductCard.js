import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Context } from "../../App";

import load from "../../img/download.jpg";

export const ProductCard = ({ item }) => {
  const contex = useContext(Context);

  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleAdding = () => {
    contex.handleBasket(item);
  };
  return (
    <Link to="/view">
      <div
        className="   bg-slate-400 text-darkgray shadow-md   "
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          contex.handleCard(item);
        }}
      >
        <div className="w-full  ">
          <img
            src={item.url}
            alt={item.title}
            className="w-full object-cover h-60"
          />
        </div>
        <div className="p-10 ">
          <p> {item.title} </p>
          <div className="flex justify-between">
            <div>
              <span>Euro</span> <span>{item.price}</span>
            </div>
            <div className="flex gap-4">
              {star}
              <span>{item.rate}</span>
            </div>
          </div>
          <div
            className={
              hovered
                ? "visible  mt-4    px-2   flex justify-between  "
                : " invisible mt-4  px-2   flex justify-between  "
            }
          >
            <p
              onClick={handleAdding}
              className={
                hovered
                  ? "visible  mt-4 text-gold    text-center  cursor-pointer border-b-2 border-gold"
                  : " invisible mt-4 text-gold       text-center  cursor-pointer border-b-2 border-gold "
              }
            >
              Add to Basket
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const star = (
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
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default ProductCard;
