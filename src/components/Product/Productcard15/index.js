import React from "react";

export default function Productcard15({
  product,
  titleColor,
  productMrp,
  productStoreprice,
  categoryCOlor,
  variantColor,
}) {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-4 px-9 gap-4">
      <div className="  row   border-2">
        <div className="image relative">
          <img src={product.produtImage} alt="" />
        </div>
        <div className=" text-center  content px-3 py-3">
          <div className="flex justify-center space-x-3">
            <div className="row w-7 h-7 bg-black rounded-full"></div>
            <div className="row w-7 h-7 bg-blue-900 rounded-full"></div>
          </div>
        </div>
        <div className=" px-4 py-4">
          <h3 className="font-sans font-semibold truncate mt-2">
            {product.productCategory}
          </h3>
          <p className="truncate text-black font-semibold  ">
            {product.productName}
          </p>
          {/* <button className="mt-2 w-full p-1 font-medium  bg-orange-500">
            Add To Cart
          </button> */}

          <div className="price-content  flex space-x-2 mt-2 text-sm ">
            <h3 className="row font-sans text-lg  font-normal ">
              from{" "}
              <span className="text-2xl text-orange-600">
                ${product.productMrp}
              </span>
            </h3>

            {/* <h3 className="text-slate-500 row font-sans mt-3 font-semibold">
              <s>${product.productStoreprice}</s>{" "}
              <span className="text-orange-500 px-3">(OFF 60%)</span>
            </h3> */}
          </div>
        </div>
      </div>
      <div className="  row   border-2">
        <div className="image relative">
          <img src={product.produtImage} alt="" />
        </div>
        <div className=" text-center  content px-3 py-3">
          <div className="flex justify-center space-x-3">
            <div className="row w-7 h-7 bg-black rounded-full"></div>
            <div className="row w-7 h-7 bg-blue-900 rounded-full"></div>
          </div>
        </div>
        <div className=" px-4 py-4">
          <h3 className="font-sans font-semibold truncate mt-2">
            {product.productCategory}
          </h3>
          <p className="truncate text-black font-semibold  ">
            {product.productName}
          </p>
          {/* <button className="mt-2 w-full p-1 font-medium  bg-orange-500">
            Add To Cart
          </button> */}

          <div className="price-content  flex space-x-2 mt-2 text-sm ">
            <h3 className="row font-sans text-lg  font-normal ">
              from{" "}
              <span className="text-2xl text-orange-600">
                ${product.productMrp}
              </span>
            </h3>

            {/* <h3 className="text-slate-500 row font-sans mt-3 font-semibold">
              <s>${product.productStoreprice}</s>{" "}
              <span className="text-orange-500 px-3">(OFF 60%)</span>
            </h3> */}
          </div>
        </div>
      </div>
    </div>
  );
}
