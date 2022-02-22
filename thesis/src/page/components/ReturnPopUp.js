const ReturnPopUp = () => {
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-black/90   z-50 flex
     justify-center items-center "
    >
      <div className="flex p-4 gap-4 bg-darkgray ">
        <div className="flex-1">
          <p className="mb-2">
            You are returning <span>Bike with hello card</span>
          </p>
          <p className="mb-2">Pack the item and hand over to Pork kargo</p>
          <p className="mb-2">
            Item Number <span>3838378878827827227</span>
          </p>
          <p className="mb-2">
            <span>300</span>
            <span>Euros</span> will be reimbursed into your account
          </p>
          <div className="w-max p-1 marker: border-lightgray border-2 hover:border-green/30">
            <button className="">Confirm</button>
          </div>
        </div>
        <div className="cursor-pointer h-max hover:text-red-400">
          <span>X</span>
        </div>
      </div>
    </div>
  );
};

export default ReturnPopUp;
