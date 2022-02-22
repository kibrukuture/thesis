import { useState } from "react";

const Track = ({ pop }) => {
  const [removed, setRemoved] = useState(false);
  const handleRemove = (e) => {
    setRemoved(true);
  };
  return (
    <div
      className={
        removed
          ? "hidden "
          : "absolute top-0 left-0 right-0 bottom-0 bg-black/90   z-50 flex justify-center items-center"
      }
    >
      <div className="flex p-4 gap-4 bg-darkgray ">
        <div className="flex-1">
          <p className="mb-4 text-xl">Tracking</p>
          <div>
            <div className="flex gap-4 mb-2  ">
              {check}
              <p className="mb-2">Order Received</p>
            </div>
            <div className="flex gap-4 mb-2  ">
              {check}
              <p className="mb-2">Order Confirmed</p>
            </div>
            <div className="flex gap-4 mb-2  ">
              {check}
              <p className="mb-2">Order Shipped</p>
            </div>
            <div className="flex gap-4 mb-2  ">
              {check}
              <p className="mb-2">Order Out for Delivery</p>
            </div>
            <div className="flex gap-4 mb-2  ">
              {cirlce}
              <p className="mb-2">Order Delivered</p>
            </div>
          </div>

          <div className="w-max p-1  ">
            <span>Status:</span> <span>The product has been deliverd</span>
          </div>
        </div>
        <div
          className="cursor-pointer h-max hover:text-red-400"
          onClick={handleRemove}
        >
          <span>X</span>
        </div>
      </div>
    </div>
  );
};

export default Track;

const check = (
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
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const cirlce = (
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
      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
