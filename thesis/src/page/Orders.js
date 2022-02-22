import React, { useContext } from "react";

import load from "../img/download.jpg";
import Track from "./components/Track";
import Header from "./components/Header";
import { useState } from "react/cjs/react.production.min";
import { Context } from "../App";

const Orders = () => {
  // const handlePop = (e) => {
  //   setPop(true);
  // };

  const context = useContext(Context);
  return (
    <div className="w-full">
      <Header />
      <div>
        {/* my orders  */}
        <h3 className=" md:flex justify-between w-11/12 m-auto md:w-9/12 mb-10 text-xl">
          My Orders
        </h3>

        <div>
          {context.basket.map((item) => {
            return <IndividualOrder item={item} />;
          })}
        </div>
      </div>
      <Track></Track>
    </div>
  );
};

export default Orders;

const IndividualOrder = ({ item }) => {
  // const handleTrack = (e) => {
  //   handlePop(true);
  // };
  return (
    <div className="   md:flex justify-between w-11/12 m-auto md:w-9/12 mb-4 ">
      <div>
        <img className="w-6/12  md:w-4/12" src={item.url} alt="product" />
      </div>
      <div className="flex gap-4">
        <p>Price</p>
        <p>
          <span>{item.currency}</span>
          <span>{item.price}</span>
        </p>
      </div>
      <div>
        <p>{new Date().toUTCString()}</p>
      </div>
      <div className=" flex gap-4 justify-between md:justify-start">
        <p className="cursor-pointer text-gold text-md">Track</p>
        <p className="cursor-pointer text-gold text-md">Return</p>
      </div>
    </div>
  );
};
