import React from "react";
import "./style.scss";
import PropsTyeps from "prop-types";
export default function CategorycenterText({
  titleColor,
  image,
  name,
  backGround,
  product,
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="row  m-1 w-full text-center">
        <div className="relative ">
          <img className=" w-full" src={product.productImage} />

          {/* <h3 className="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3> */}
          <div
            style={{ backgroundColor: backGround }}
            className=" absolute bg-slate-200 md:w-6/12 w-full p-3 top-1/2 left-1/2 -translate-x-1/2"
          >
            <h3
              style={{ color: titleColor }}
              className="text-black m-1   text-sm md:text-lg   text-center"
            >
              {product.productName}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

CategorycenterText.prototype = {
  image: PropsTyeps.string,
  name: PropsTyeps.string,
  titleColor: PropsTyeps.string,
  backGround: PropsTyeps.string,
};
