import React from "react";

import { useNavigate } from "react-router-dom";
const OrderSuccess = () => {
  const navigate = useNavigate();
  const handleHome = (e) => {
    navigate("/");
  };
  const handleTrack = (e) => {
    navigate("/track");
  };
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen w-full">
      <p className="text-center text-2xl md:text-4xl mb-4">Quader</p>
      <div className=" w-4/5 md:w-3/5 lg:w-1/3 border-2 border-lightgray p-4  ">
        <p className="text-center text-md md:text-xl  ">
          Your order has been placed successfully
        </p>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="_7076594691537356148"
            data-name="7076594691537356148"
            width="50"
            height="50"
            viewBox="0 0 114 114"
            className="m-4 w-40px h-40px md:w-50px md:h-50px "
          >
            <circle
              id="Ellipse_27"
              data-name="Ellipse 27"
              cx="57"
              cy="57"
              r="57"
              fill="#25ae88"
            />
            <path
              id="Path_115"
              data-name="Path 115"
              d="M71.336,15,34.821,56.079,12,37.821"
              transform="translate(15.386 19.232)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="flex justify-around">
          <p className="text-gold cursor-pointer" onClick={handleHome}>
            Go Back to Home
          </p>
          <p className="text-gold cursor-pointer" onClick={handleTrack}>
            Track Orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
