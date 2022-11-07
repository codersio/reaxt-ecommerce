import React, { useState } from "react";
import PropsTypes from "prop-types";
import "./style.scss";

export default function Productcard11({ product, Cartvisible }) {
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className="row rounded-3xl   m-1 w-full ">
        <div className=" relative shadow-lg rounded-3xl ">
          <img
            className=" block m-auto rounded-3xl"
            src={product.productImage}
            alt=""
          />
          <div className="  absolute top-0 w-full h-full rounded-3xl border-2 bg-gradient-to-t from-slate-800"></div>
          <div className=" absolute bottom-6 px-6 text-white font-bold text-base md:text-4xl ">
            60% OFF
          </div>
        </div>

        <div className=" px-3">
          <p className=" truncate font-semibold text-base md:text-2xl">
            {product.productName}
          </p>
          {variant == false ? (
            <div className="flex space-x-3  text-base font-semibold mt-2">
              <h3 className=" font-sans font-semibold">
                ${product.productMrp}
              </h3>
              <h3 className=" font-sans text-slate-200 font-semibold">
                <s>${product.productStoreprice}</s>{" "}
              </h3>
            </div>
          ) : (
            variant.map((v) => (
              <div className=" flex  space-x-3 text-base font-semibold mt-2">
                <h3 className=" font-sans font-semibold">${v.storePrice}</h3>
                <h3 className=" font-sans text-slate-200 font-semibold">
                  <s>${v.mrp}</s>{" "}
                </h3>
              </div>
            ))
          )}
          {Cartvisible == false ? (
            <div></div>
          ) : (
            <div className="b-row flex space-x-2 mt-2">
              <div className="row w-full">
                <select
                  onChange={(e) => changeVariant(e.target.value)}
                  name=""
                  id=""
                  className="w-full border-2 p-2"
                >
                  {product.variants.map((i) => (
                    <option value={i.weight}>
                      {i.weight}
                      {""} {product.unit}
                    </option>
                  ))}
                </select>
              </div>
              <div className="row ">
                {buttonClick ? (
                  <div
                    onClick={ClickButton}
                    className="rounded-md bg-slate-200 w-12 p-1 text-center text-3xl text-yellow-600 "
                  >
                    +
                  </div>
                ) : (
                  <div
                    className="qtybtn 
               bg-slate-500 pb-3 rounded -mt-16 w-8  text-center text-2xl text-white"
                  >
                    <div className="">
                      <div className="item ">
                        {quantity < 2 ? (
                          <div
                            className=" cursor-pointer text-3xl "
                            onClick={ClickButton}
                          >
                            -
                          </div>
                        ) : (
                          <div
                            className=" cursor-pointer text-3xl "
                            onClick={decrymentQty}
                          >
                            -
                          </div>
                        )}
                      </div>
                      <div className="item">{quantity}</div>
                      {quantity < product.maxQty ? (
                        <div
                          className=" item cursor-pointer"
                          onClick={incrymentQty}
                        >
                          +
                        </div>
                      ) : (
                        <div
                          className="disabled item cursor-pointer"
                          // onClick={incrymentQty}
                        >
                          +
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Productcard11.propsTypes = {
  name: PropsTypes.string.isRequired,
  titleColor: PropsTypes.string,
};
