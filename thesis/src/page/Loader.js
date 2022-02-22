const Loader = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center text-white">
      <p className="text-2xl md:text-4xl ">Quader</p>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          className="m-1 animate-loadone"
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
          className="m-1 animate-loadtwo"
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
          className="m-1 animate-loadthree"
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
  );
};

export default Loader;
