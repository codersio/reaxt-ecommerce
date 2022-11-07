import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Productsinglecard1({
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
        <div className=" relative columns">
          <h3
            style={{ color: categoryColor }}
            className=" text-slate-500 font-sans mt-2"
          >
            {product.productCategory}
          </h3>
          <h3
            style={{ color: titleColor }}
            className="  text-xl font-sans font-semibold"
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
            </div>
          )}

          <div className="price-content  flex space-x-2 mt-2 text-sm ">
            {variant == false ? (
              <div className="flex space-x-3">
                <h3 className="row font-sans   text-lg font-medium text-black">
                  ${product.productMrp}
                </h3>

                <h3 className="text-slate-500 mt-1 row font-sans  font-semibold">
                  <s>${product.productStoreprice}</s>{" "}
                  <span className="text-orange-500">(OFF 60%)</span>
                </h3>
              </div>
            ) : (
              <>
                {variant.map((i) => (
                  <div className="flex space-x-3">
                    <h3 className="row font-sans   text-lg font-medium text-black0">
                      ${i.mrp}
                    </h3>

                    <h3 className="text-slate-500 mt-1 row font-sans  font-semibold">
                      <s>${i.storePrice}</s>{" "}
                      <span className="text-orange-500 px-3">(OFF 60%)</span>
                    </h3>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className=" relative columns rounded-lg shadow-md md:w-2/4 w-2/4">
          <div className=" rounded-lg image">
            <img
              className="rounded-lg h-52 w-full"
              src={product.productImage}
              alt=""
            />
            {/* <div className="rounded-tl-2xl rounded-br-2xl bg-green-700 p-1 text-white absolute top-0 left-0">
              20% OFF
            </div> */}
          </div>
          <div className=" px-3 grid place-items-center">
            {buttonClick ? (
              <button
                onClick={ClickButton}
                style={{
                  color: buttonTitlecolor,
                  backgroundColor: buttonBackground,
                }}
                className=" border border-red-600 text-red-600 rounded-md w-3/4 p-2 -bottom-5 bg-red-50 font-bold  text-lg absolute "
              >
                ADD
              </button>
            ) : (
              <div
                className=" border-red-600 text-red-600 px-3 h-[49px] font-semibold bg-red-50  border w-3/4 -bottom-5 absolute   flex text-3xl shadow-2xl  leading-9   rounded-md justify-between text-center   "
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
                  <div className=" text-red-600 block m-auto text-2xl mt-2 font-medium ">
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
        </div>
      </div>
    </div>
  );
}
Productsinglecard1.propTypes = {
  titleColor: PropTypes.string,
  priceColor: PropTypes.string,
  storepriceColor: PropTypes.string,
  buttonBackground: PropTypes.string,
  categoryColor: PropTypes.string,
  buttonTitlecolor: PropTypes.string,
  offercolor: PropTypes.string,
};
