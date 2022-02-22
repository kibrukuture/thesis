import React, { useState, useEffect, useContext } from "react";
import { Context } from "../App";

import { useNavigate } from "react-router-dom";
import Headers from "./components/Header";

import load from "../img/download.jpg";

const PlaceOrder = () => {
  const [collectPrice, setCollectPrice] = useState(0);
  const [Price, setPrice] = useState(0);
  const contex = useContext(Context);

  //filer

  const bag = contex.basket;

  const handleCollectPrice = (value) => {
    setCollectPrice((prev) => prev + value);
  };

  //
  useEffect(() => {
    //
    setPrice(collectPrice);
  }, [collectPrice]);
  return (
    <div>
      {/* header goes here  */}
      <div>
        <Headers />
      </div>
      {/*  Place order page goes here  */}
      <div className="flex w-11/12 md:w-9/12 m-auto m-10  ">My Basket</div>
      <div className="flex gap-10 w-11/12 md:w-9/12 m-auto justify-between ">
        <div className="flex-1 ">
          {bag.length ? (
            bag.map((item) => {
              return (
                <EachPlacement
                  item={item}
                  handleCollectPrice={handleCollectPrice}
                />
              );
            })
          ) : (
            <p>No Products in basket</p>
          )}
        </div>
        {bag.length ? (
          <div className="m-10 basis-2/6">
            <ProductPriceTentative total={collectPrice} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;

const EachPlacement = ({ handleCollectPrice, item }) => {
  const [total, setTotal] = useState(item.price);
  const [counter, setCounter] = useState(0);

  const handlePriceTotal = (e) => {
    let count = Number(e.target.value);
    setCounter((prev) => {
      //
      setTotal((prev) => {
        return count * Number(item.price);
      });
      if (prev < count) {
        handleCollectPrice(Number(item.price));
      } else if (prev > count && prev > 0) {
        handleCollectPrice(-Number(item.price));
      }

      return count;
    });
  };

  return (
    <div className="flex justify-between m-10">
      <div>
        <img src={item.url} alt={item.title} className="w-40" />
      </div>
      <div className="flex gap-4 items-center">
        <p>Price</p>
        <p>
          <span>{item.currency}</span> <span>{total}</span>
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex-1 hover:border-2 border-red-500 border-dashed cursor-pointer">
          {trash}
        </div>
        <div>
          <input
            onChange={handlePriceTotal}
            type="number"
            min="0"
            className="w-10"
          />
        </div>
      </div>
    </div>
  );
};

const trash = (
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
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const ProductPriceTentative = ({ total }) => {
  const navigate = useNavigate();
  const contex = useContext(Context);
  const bag = contex.basket;

  const handleConfirm = (e) => {
    if (total > 0) navigate("/address");
  };
  return (
    <div className="text-md border-2 p-4 border-dashed border-darkgray">
      <p m-1>Selected products</p>
      <p className="text-2xl m-1">
        <span>Euro</span> <span>{total}</span>
      </p>
      <p className="uppercase border-b-2 border-dashed border-darkgray m-1">
        Price Tentative
      </p>
      <div className="flex justify-between m-1">
        <p>Cargo</p>
        <p>
          <span>Euro</span> <span>{total > 0 ? 10 : 0}</span>
        </p>
      </div>
      <div className="flex justify-between m-1">
        <p>Product</p>
        <p>
          <span>Euro</span> <span>{total > 0 ? total - 10 : 0} </span>
        </p>
      </div>
      <p className="uppercase text-xs m-1">vat is included</p>
      <div>
        <button className="border-2 border-darkgray " onClick={handleConfirm}>
          Confirm
        </button>
      </div>
      <div className="flex justify-end m-1 cursor-pointer">
        <p className=" text-gold border-darkgray uppercase border-b-2 border-dashed w-max  text-xs ">
          Use coupon
        </p>
      </div>
    </div>
  );
};
