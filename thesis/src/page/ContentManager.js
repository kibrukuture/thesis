import React, { useState, useContext } from "react";

import { Context } from "../App";

import { uid } from "uid";

const CMS = () => {
  const context = useContext(Context);
  const [text, setText] = useState("");
  const [description, setDesc] = useState([]);
  const [file, setFile] = useState();
  const [url, setUrl] = useState();
  const [price, setPrice] = useState();
  const [title, setTitle] = useState();
  const handleAdd = () => {
    setDesc((prev) => [text, ...prev]);
    setText("");
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleTextArea = (e) => {
    setText(e.target.value);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);

    setUrl(URL.createObjectURL(file));
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleUpload = (e) => {
    if (text && description.length && file && url && price) {
      const data = {
        text,
        description,
        url,
        price,
        id: uid(25),
        title,
        currency: "Euro",
        rate: 0,
      };

      setText("");
      setPrice("");
      setTitle("");
      context.handleFiles(data);
    }
  };
  return (
    <div className="w-10/12 m-auto min-h-screen overflow-x-hidden overflow-y-auto bg-black mt-2 ">
      <div className="flex justify-between mb-20">
        <p className="text-2xl">Quader</p>
        <p className="text-2xl">Content Management System</p>
        <div className="text-2xl">{menu} </div>
      </div>
      <div className="flex justify-between gap-10 mt-4 ">
        <div className="flex-1">
          <div className="block bg-black focus:outline-none border-2 border-darkgray m-2 w-full">
            {select}
          </div>

          <div className="w-full">
            <input
              className="block w-full bg-black focus:outline-none border-2 border-darkgray m-2 placeholder:text-darkgray"
              type="text"
              placeholder="Item title"
              onChange={handleTitle}
            />
          </div>

          <div className="w-full bg-black   m-2 placeholder:text-darkgray  flex flex-col items-center">
            <textarea
              className="block w-full bg-black focus:outline-none border-2 border-darkgray m-2 placeholder:text-darkgray"
              name=""
              id=""
              cols="30"
              rows="2"
              placeholder="Describe your product here..."
              value={text}
              onChange={handleTextArea}
            ></textarea>
            <div className="flex justify-end w-full">
              <button onClick={handleAdd}>{add}</button>
            </div>
            {description.length ? (
              <div className="w-full ">
                {description.map((item) => {
                  return (
                    <p className="border-l-4 border-green pl-2 my-2"> {item}</p>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="bg-black  border-2 border-darkgray m-2 flex w-full">
            <input
              className=" flex-1 block bg-black focus:outline-none "
              type="text"
              onChange={handlePrice}
            />
            <p className="mr-1">Euro</p>
          </div>

          <div className="flex justify-end w-full">
            <button
              onClick={handleUpload}
              className="border-2  border-darkgray "
            >
              Upload
            </button>
          </div>
          {file && (
            <div className="w-full p-2 flex justify-between mt-10">
              <div>
                <h2 className="my-2">File Details:</h2>
                <p className="my-2">File Name: {file.name}</p>
                <p className="my-2">File Type: {file.type}</p>
                <p className="my-2">
                  Last Modified: {file.lastModifiedDate.toDateString()}
                </p>
              </div>
              <div className="w-40">
                <img
                  className="w-full h-40 object-cover"
                  src={url}
                  alt={file.name}
                />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-2 border-dashed border-darkgray cursor-pointer relative">
          <input
            type="file"
            className="absolute  h-full w-full top-0 left-0 "
            onChange={handleFileUpload}
          />
          <p className="mt-10">Upload the product picture here</p>
          <p>Mac file 5Mb</p>
          <div>{cloud}</div>
          <div className="absolute "> one file is chosen</div>
        </div>
      </div>
    </div>
  );
};

export default CMS;

const menu = (
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
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>
);

const cloud = (
  <svg width="314" height="199" viewBox="0 0 314 199">
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectangle_35"
          data-name="Rectangle 35"
          width="314"
          height="199"
          rx="24"
          transform="translate(1158 172)"
          fill="#323232"
          stroke="#707070"
          stroke-width="1"
        />
      </clipPath>
    </defs>
    <g
      id="Mask_Group_1"
      data-name="Mask Group 1"
      transform="translate(-1158 -172)"
      clip-path="url(#clip-path)"
    >
      <g id="Icons" transform="translate(1214.943 172)">
        <g id="Outlined" transform="translate(0 0)">
          <g id="File">
            <g
              id="Outlined-_-File-_-cloud_upload"
              data-name="Outlined-/-File-/-cloud_upload"
            >
              <g id="Group_42" data-name="Group 42">
                <path
                  id="Path"
                  d="M0,0H199.683V199.683H0Z"
                  fill="none"
                  fill-rule="evenodd"
                />
                <path
                  id="_-Icon-Color"
                  data-name="🔹-Icon-Color"
                  d="M160.994,115.42A62.338,62.338,0,0,0,44.513,98.78a49.9,49.9,0,0,0,5.408,99.509H158.082a41.481,41.481,0,0,0,2.912-82.868Zm-2.912,66.228H49.921a33.255,33.255,0,0,1-3.661-66.311l8.9-.915,4.16-7.9a45.653,45.653,0,0,1,85.364,12.147l2.5,12.48,12.73.915a24.823,24.823,0,0,1-1.83,49.588Zm-91.521-41.6H87.777v24.96h24.128v-24.96h21.216l-33.28-33.28Z"
                  transform="translate(0 -31.886)"
                  fill="#323232"
                  fill-rule="evenodd"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const select = (
  <select
    id="pet-select"
    className="focus:outline-none w-full bg-black text-white"
  >
    <option value="">--Please choose a Category--</option>
    <option value="dog">Electronics</option>
    <option value="cat">Clothings</option>
    <option value="hamster">Books</option>
    <option value="parrot">Cosmotics</option>
    <option value="spider">Automotives</option>
    <option value="goldfish">Office Supplies</option>
    <option value="goldfish">Mini Market</option>
  </select>
);

const add = (
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
      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
