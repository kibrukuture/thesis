import Dropdown from "./Dropdown";
import React, { useState } from "react";

const Catagories = () => {
  const [hovered, setHovered] = useState({ hovered: false, cat: "" });

  const handleMouseOver = (value) => {
    setHovered({ hovered: true, cat: value });
  };
  const handleMouseLeave = (value) => {
    setHovered({ hovered: false, cat: value });
  };
  return (
    <div className="flex ml-2 text-lg gap-10">
      <div
        className="cursor-pointer"
        onMouseOver={() => handleMouseOver("electronics")}
        onMouseLeave={() => handleMouseLeave("electronics")}
      >
        <span className=" hover:border-b-2 border-gold mb-2 block">
          Electronics
        </span>
        <Dropdown hovered={hovered} />
      </div>
      <div className="cursor-pointer">
        <span className=" hover:border-b-2 border-gold mb-2 block">
          Clothings
        </span>
      </div>
      <div className="cursor-pointer">
        <span className=" hover:border-b-2 border-gold mb-2 block">Books</span>
      </div>
      <div className="cursor-pointer">
        <span className=" hover:border-b-2 border-gold mb-2 block">
          Cosmotics
        </span>
      </div>
      <div className="cursor-pointer">
        <span className=" hover:border-b-2 border-gold mb-2 block">
          Automotives
        </span>
      </div>
      <div className="cursor-pointer">
        <span className=" hover:border-b-2 border-gold mb-2 block">
          Office Supplies
        </span>
      </div>
      <div className="cursor-pointer">
        <span className=" hover:border-b-2 border-gold mb-2 block">
          Mini Market
        </span>
      </div>
    </div>
  );
};

export default Catagories;
