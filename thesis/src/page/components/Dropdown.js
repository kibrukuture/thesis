import React from "react";
import { Link } from "react-router-dom";
export const Dropdown = ({ hovered }) => {
  console.log(hovered);
  return (
    <div
      className={
        hovered.hovered
          ? " flex justify-between w-11/12 m-auto absolute bg-black z-50 "
          : "hidden"
      }
    >
      {data.map((element) => {
        return <Element element={element} />;
      })}
    </div>
  );
};

export default Dropdown;
const Element = ({ element }) => {
  return (
    <div>
      <header className="text-lg w-max border-b-2 border-gold my-2">
        {element.title}
      </header>
      <ul>
        {element.detail.map((item) => {
          return (
            <Link to={"/" + item}>
              <li key={item}>
                <a href="https://">{item}</a>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const data = [
  {
    title: "Computers",
    detail: [
      "Desktop",
      "Tablet",
      "Modem and Router",
      "Game Special",
      "Phone",
      "Computer Part",
      "Software Product",
    ],
  },
  {
    title: "Wearable",
    detail: ["Apple Watch", "FitBit", "Eye Glasses", "Help Guide", "Phone"],
  },
  {
    title: "Accessories",
    detail: [
      "Camera and Photo",
      "GPS and Navigation",
      "Home Audio",
      "Service Plans",
      "Vehicle Electrons",
    ],
  },
  {
    title: "Home Gadgets",
    detail: [
      "Socket Divider",
      "Security",
      "Tv and Monitors",
      "eBook Readers",
      "Pc",
    ],
  },
  {
    title: "Office Electronics",
    detail: [
      "Projector",
      "Plasma Screen and Parts",
      "Accessories and Supplies",
    ],
  },
];
