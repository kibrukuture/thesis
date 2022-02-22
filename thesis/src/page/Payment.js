import Header from "./components/Header";

import { useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();

  const handleSuccess = (e) => {
    navigate("/success");
  };
  return (
    <div className=" h-full w-full">
      <Header />
      <div className="grid grid-cols-12">
        <p className="col-span-2 text-center text-md md:text-2xl">Payment</p>
        <div className="col-span-4 ">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Name on the card"
              className="w-full block   focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
            />
          </div>

          <div className="w-full flex">
            <input
              type="text"
              placeholder="Card number"
              className=" w-full  focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
            />
          </div>
          <div className=" w-full flex justify-between items-center">
            <p className="flex-1">Expiry Date</p>
            <div className="flex  ">
              <input
                type="text"
                placeholder="Month"
                className="  focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
              />
              <input
                type="text"
                placeholder="Year"
                className="  focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
              />
            </div>
          </div>
          <div className=" w-full flex justify-between items-center">
            <p>CVS Number</p>
            <div className="flex">
              <input
                type="text"
                placeholder="ex:245"
                className="block   focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
              />
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              className=" w-32 rounded-full text-center px-4 py-1 border-2 border-darkgray m-3"
              onClick={handleSuccess}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
