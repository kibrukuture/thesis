import Header from "./components/Header";
import Catagories from "./components/Catagories";
import { useNavigate } from "react-router-dom";
const Address = () => {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    navigate("/payment");
  };
  return (
    <div className=" h-full w-full">
      <Header></Header>
      <div className="grid grid-cols-12">
        <p className="col-span-2 text-center text-md md:text-2xl">Address</p>
        <div className="col-span-4 ">
          <div className="w-full flex">
            <input
              type="text"
              placeholder="Street Address"
              className="w-full block   focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
            />
          </div>

          <div className="w-full flex">
            <input
              type="text"
              placeholder="Apt./Suit No"
              className="w-full  focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
            />
          </div>

          <div className=" w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Country"
              className="block   focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
            />
            <input
              type="text"
              placeholder="City"
              className="  focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
            />
          </div>

          <div className=" w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Zip/Post Code"
              className="block   focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
            />
            <input
              type="text"
              placeholder="State/Province/Region"
              className="block   focus:outline-0 p-2 bg-black border-2 border-darkgray rounded-md placeholder:text-lightgray m-3"
            />
          </div>
          <div className="w-full flex justify-end">
            <button
              className=" w-32 rounded-full text-center px-4 py-1 border-2 border-darkgray m-3"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
