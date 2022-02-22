import React, { useContext } from "react";
import Header from "./components/Header";
import Review from "../page/components/Review";

import { Context } from "../App";

const View = () => {
  const context = useContext(Context);

  console.log(context.card);
  return (
    <div className="h-full w-full bg-black">
      <Header />
      <div className="grid grid-cols-12 gap-2 mt-40">
        {/* left group  */}
        <div className="col-start-2 col-end-5  ">
          <div>
            <img src={context.card.url} alt={context.card.title} />
          </div>
          <div className="flex gap-1 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              className="m-1  "
            >
              <ellipse
                id="Ellipse_33"
                data-name="Ellipse 33"
                cx="7"
                cy="7.5"
                rx="7"
                ry="7.5"
                fill="#747474"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              className="m-1  "
            >
              <ellipse
                id="Ellipse_33"
                data-name="Ellipse 33"
                cx="7"
                cy="7.5"
                rx="7"
                ry="7.5"
                fill="#747474"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              className="m-1  "
            >
              <ellipse
                id="Ellipse_33"
                data-name="Ellipse 33"
                cx="7"
                cy="7.5"
                rx="7"
                ry="7.5"
                fill="#747474"
              />
            </svg>
          </div>
        </div>
        {/* right group */}
        <div className="col-start-6 col-end-12   grid grid-cols-2 gap-2 ">
          <h3 className="col-span-2">{context.card.title}</h3>
          <div className="col-span-2 grid grid-cols-2 gap-2 mb-10">
            {context.card.description.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
          {/* gutter */}

          <div className="border-2  border-darkgray w-max h-max px-4 py-1 rounded-xl ">
            <button>Buy Now</button>
          </div>

          <div>
            <p>Price</p>
            <p>
              <span>{context.card.currency}</span>
              <span>{context.card.price}</span>
            </p>
          </div>

          <p
            className="text-gold   border-b-2 w-max border-gold cursor-pointer"
            onClick={() => {
              context.handleBasket(context.card);
            }}
          >
            Add to Basket
          </p>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default View;
