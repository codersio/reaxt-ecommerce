import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Productcardsingle2({
  product,
  titleColor,
  priceColor,
  storepriceColor,
  buttonBackground,
  buttonTitlecolor,
  categoryColor,
  offercolor,
  Cartvisible,
}) {
  const [buttonClick, SetButton] = useState(true);
  const [quantity, setQuantiy] = useState(1);
  const [variant, setvariant] = useState([]);
  const incrymentQty = () => {
    setQuantiy(quantity + 1);
  };
  const decrymentQty = () => {
    setQuantiy(quantity - 1);
  };
  const ClickButton = () => {
    SetButton(!buttonClick);
  };
  const changeVariant = (get) => {
    // const getVariant = e.target.value;
    const updateVariant = product.variants.filter((r) => {
      return r.weight == get;
    });
    setvariant(updateVariant);
    console.log(
      "🚀 ~ file: index.js ~ line 24 ~ changeVariant ~ setvḁriant",
      updateVariant
    );
  };
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 ">
      <div className="row flex space-x-8">
        <div className=" relative columns border w-3/5 ">
          <div className=" rounded-lg image">
            <img className="rounded-lg" src={product.productImage} alt="" />
            {/* <div className="  bg-green-700 p-1 text-white absolute top-0 left-0">
              20% OFF
            </div> */}
            {/* <div className=" absolute -z-10 top-3 right-3 w-24 h-8 skew-y-12 bg-black"></div> */}
          </div>
        </div>
        <div className=" relative columns">
          <h3 className="mt-2" style={{ color: categoryColor }}>
            {product.productCategory}
          </h3>
          <h3
            style={{ color: titleColor }}
            className=" md:text-xl text-base  font-semibold"
          >
            {product.productName}
          </h3>
          {Cartvisible == false ? (
            <div className=""></div>
          ) : (
            <div>
              {" "}
              <select
                onChange={(e) => changeVariant(e.target.value)}
                name=""
                id=""
                className=" w-full mt-2 border-2 p-2"
              >
                {product.variants.map((i) => (
                  <option value={i.weight}>
                    {i.weight}
                    {""} {product.unit}
                  </option>
                ))}
              </select>
              {buttonClick ? (
                <button
                  onClick={ClickButton}
                  className="mt-2 w-full p-1 font-medium  bg-orange-500"
                >
                  Add To Cart
                </button>
              ) : (
                <div
                  className=" bg-slate-900 mt-3  px-3 h-[49px] font-semibold  border   text-white   flex text-3xl shadow-2xl  leading-9   rounded-md justify-between text-center w-full  "
                  // onClick={ClickButton}
                >
                  {quantity < 2 ? (
                    <div
                      onClick={ClickButton}
                      className=" -mt-1 cursor-pointer  ml-2 bottom-4 text-5xl "
                      // style={{ marginTop: "-8px" }}
                    >
                      -
                    </div>
                  ) : (
                    <div
                      onClick={decrymentQty}
                      className=" -mt-1 cursor-pointer  ml-2 bottom-4 text-5xl "
                      // style={{ marginTop: "-8px" }}
                    >
                      -
                    </div>
                  )}
                  <div className="shrink block  w-16 text-white ">
                    <div className="block m-auto text-2xl mt-2 font-medium ">
                      {quantity}
                    </div>
                  </div>{" "}
                  {quantity < product.maxQty ? (
                    <div
                      onClick={incrymentQty}
                      className="  cursor-pointer font-semibold m-1"
                    >
                      +
                    </div>
                  ) : (
                    <div
                      // onClick={incrymentQty}
                      className="disabled cursor-pointer font-semibold m-1"
                    >
                      +
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="price-content  flex space-x-2 mt-2 text-sm ">
            {variant == false ? (
              <div className="flex space-x-3">
                <h3 className="row font-sans  font-normal text-2xl text-orange-600">
                  ${product.productMrp}
                </h3>

                <h3 className="text-slate-500 row font-sans mt-3 font-semibold">
                  <s>${product.productStoreprice}</s>{" "}
                  <span className="text-orange-500">(OFF 60%)</span>
                </h3>
              </div>
            ) : (
              <>
                {variant.map((i) => (
                  <div className="flex space-x-3">
                    <h3 className="row font-sans  font-normal text-2xl text-orange-600">
                      ${i.mrp}
                    </h3>

                    <h3 className="text-slate-500 row font-sans mt-3 font-semibold">
                      <s>${i.storePrice}</s>{" "}
                      <span className="text-orange-500 px-3">(OFF 60%)</span>
                    </h3>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Productcardsingle2.propTypes = {
  titleColor: PropTypes.string,
  priceColor: PropTypes.string,
  storepriceColor: PropTypes.string,
  buttonBackground: PropTypes.string,
  categoryColor: PropTypes.string,
  buttonTitlecolor: PropTypes.string,
  offercolor: PropTypes.string,
};
