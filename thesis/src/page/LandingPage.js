import React, { useState } from "react";

import ProductPlacement from "./components/ProductPlacement";
import Catagories from "./components/Catagories";
import Footer from "./components/Footer";

import load from "../img/bike1.jpg";

import Header from "./components/Header";

const LandingPage = () => {
  return (
    <div>
      <div>
        {/* header  */}
        <Header />
      </div>
      <div>
        {/* categories */}
        <Catagories />
      </div>
      <div>
        {/* ads */}
        <Ads />
      </div>
      <div>
        {/* products */}
        <ProductPlacement />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

const Ads = () => {
  return (
    <div className="w-11/12 m-auto flex gap-10 mt-10 ">
      <div className="basis-4/12">
        <div className="text-7xl flex flex-col m-3">
          <p>Specially for </p>
          <p className="self-end">the Crazy Riders </p>
        </div>
        <p>Price</p>
        <div className="flex gap-6 my-4  ">
          <div>
            <span>Euro</span> <span>300</span>
          </div>
          <div className="text-darkgray line-through  ">
            <span>Euro</span> <span>450</span>
          </div>
        </div>
        <button className="text-2xl border-2 border-darkgray px-2 rounded-xl my-4 m-3">
          Buy Now
        </button>

        <div>
          <p className="uppercase my-2">Popular collection</p>
        </div>
      </div>
      <div className="flex-1 w-full h-screen   ">
        <div className="w-full">
          <img src={load} alt="" className="w-8/12 object-cover" />
        </div>
        <div className="flex gap-4 w-full mt-20 justify-center">
          <span className="border-t-4 border-gold w-3"></span>
          <span className="border-t-4 border-gold w-6"></span>
          <span className="border-t-4 border-gold w-9"></span>
          <span className="border-t-4 border-gold w-12"></span>
        </div>
      </div>
    </div>
  );
};
