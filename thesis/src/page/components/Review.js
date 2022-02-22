import React, { useState, useContext } from "react";
import Stars from "./Stars";
import { Context } from "../../App";

import { Link } from "react-router-dom";

import Footer from "./Footer";

const Review = () => {
  const context = useContext(Context);
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const [count, setCount] = useState(0);
  const [rated, setRated] = useState(0);
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleRate = (e) => {
    //todo
    setRating(4);
  };
  const handleStarCount = (value) => {
    setCount(value);
  };

  const handleRateCount = (value) => {
    setRated((prev) => {
      if (prev === value) setRated(0);
      else setRated(value);
    });
  };

  const date = (v) => {
    const today = new Date();
    const year = today.getFullYear();
    const mes = today.getMonth() + 1;
    const dia = today.getDate();
    return dia + "-" + mes + "-" + year;
  };
  const handleSend = () => {
    if (message.trim() && rated && (context.user.first || context.user.last)) {
      setReviews((prev) => {
        return [{ message, time: date(), rated }, ...prev];
      });
      setMessage("");
    }
  };
  return (
    <div className="w-11/12 md:w-9/12 mx-auto mt-20">
      <div className="p-4">
        <div className="flex justify-between mb-4">
          {context.user.first || context.user.last ? (
            <p>{context.user.first + " " + context.user.last}</p>
          ) : (
            <p>
              To Review Please ,
              <Link to="/login">
                <span className="text-gold border-b-2 border-gold cursor-pointer">
                  Log In
                </span>
              </Link>
            </p>
          )}

          <div className="flex gap-2">
            {[0, 0, 0, 0, 0].map((item, index) => {
              if (index + 1 <= count || index + 1 <= rated) {
                return (
                  <SingleStar
                    key={item + index}
                    id={index}
                    handleStarCount={handleStarCount}
                    color="#8f652f"
                    handleRateCount={handleRateCount}
                  />
                );
              } else {
                return (
                  <SingleStar
                    key={item + index}
                    id={index}
                    handleStarCount={handleStarCount}
                    handleRateCount={handleRateCount}
                  />
                );
              }
            })}
            <p className="ml-2 font-bold">({count || rated})</p>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Write your review here ..."
            className="placeholder:text-darkgray focus:outline-none w-full border-b-2 p-1 border-darkgray bg-black"
            onChange={handleMessage}
            value={message}
          />
        </div>
        <div className="flex   items-center mt-4 justify-between">
          <div className="flex gap-4 items-center mt-4">
            <input type="checkbox" />
            <p className="text-darkgray">Only allow initials from my name</p>
          </div>
          <div className="border-2 border-darkgray px-2" onClick={handleSend}>
            <button>Review</button>
          </div>
        </div>
        <div className="mt-4">
          <h3>
            Customer's Review <span> ({rated}) </span>
          </h3>
        </div>
      </div>
      <div>
        {reviews.length ? (
          reviews.map((review) => {
            return <EachPerson review={review} user={context.user} />;
          })
        ) : (
          <p className="mt-4">No Reviews</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Review;

const approved = (
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
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const EachPerson = ({ review, user }) => {
  return (
    <div className="border-2 border-dashed border-darkgray mb-6">
      <div className="flex justify-between p-4">
        <div className="flex gap-4">
          <p>{user.first + " " + user.last}</p>
          <div title="Approved">{approved}</div>
        </div>
        <div>
          <p> {review.time} </p>
        </div>
        <div className="flex gap-2">
          {[0, 0, 0, 0, 0].map((item, index) => {
            if (index + 1 <= review.rated)
              return <SingleStar color="#8f652f" />;
            return <SingleStar color="none" />;
          })}
        </div>
      </div>
      <div>
        <p>{review.message}</p>
      </div>
    </div>
  );
};

const SingleStar = ({ color, id, handleStarCount, handleRateCount }) => {
  const handleMouseOver = (e) => {
    handleStarCount(id + 1);
  };
  const handleMouseLeave = (e) => {
    handleStarCount(0);
  };
  const handleRated = (e) => {
    handleRateCount(id + 1);
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill={color}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleRated}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
};
