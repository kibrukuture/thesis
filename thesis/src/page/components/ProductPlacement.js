import React from "react";

import ProductCard from "./ProductCard";

import { dataset } from "../../dataset";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../App";

const ProductPlacement = () => {
  const context = useContext(Context);
  const [data, setData] = useState(dataset);
  useEffect(() => {
    //
    setData((prev) => {
      return [...context.files, ...prev];
    });
  }, [context.files.length]);

  return (
    <div className="grid grid-cols-4 gap-4 w-11/12 m-auto auto-rows-max ">
      {/* <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}

      {data.map((item) => {
        return <ProductCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductPlacement;
