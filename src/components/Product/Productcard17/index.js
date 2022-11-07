import React, { useState } from "react";

export default function Productcard17({ product }) {
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
    <div className="container grid grid-cols-1 md:grid-col-3">
      <div className="row flex space-x-8">
        <div className=" relative columns rounded-lg shadow-md w-1/4">
          <div className=" rounded-lg image">
            <img
              className="rounded-lg h-[183px]"
              src={product.productImage}
              alt=""
            />
            <div className="rounded-tl-lg rounded-br-2xl bg-green-700 p-1 text-white absolute top-0 left-0">
              20% OFF
            </div>
          </div>
        </div>
        <div className=" relative columns">
          <h3 className="mt-2">{product.productCategory}</h3>
          <h3 className="  text-2xl font-semibold">Muskmelon - Netted Small</h3>
          <select
            onChange={(e) => changeVariant(e.target.value)}
            className=" left-0 ml-0 mt-4 accent-stone-800 m-auto border-2 rounded-md  px-3 py-2  block w-full  sm:text-sm"
          >
            {product.variants.map((i) => (
              <option value={i.weight}>
                {i.weight} {product.unit}
              </option>
            ))}
          </select>
          {variant == false ? (
            <div className="flex space-x-3">
              <h3 className="mt-2 font-semibold">
                $ {product.productMrp}
                <span className="ml-3 text-slate-300">
                  <s>$ {product.productStoreprice}</s>
                </span>
              </h3>
            </div>
          ) : (
            <>
              {variant.map((i) => (
                <div className="flex space-x-3">
                  <h3 className="mt-2 font-semibold">
                    ${i.mrp}
                    <span className="ml-3 text-slate-300">
                      <s>${i.storePrice}</s>
                    </span>
                  </h3>
                </div>
              ))}
            </>
          )}

          {buttonClick ? (
            <button
              onClick={ClickButton}
              className=" rounded-md w-24 h-10 p-2 mt-3 text-white text-lg bg-red-600 absolute bottom-0 right-0"
            >
              Add
            </button>
          ) : (
            <div
              className=" bg-red-600 rounded-md w-24 h-10 p-2 mt-3  font-semibold  absolute bottom-0 right-0 border   text-white   flex text-3xl shadow-2xl  leading-9  justify-between text-center   "
              // onClick={ClickButton}
            >
              {quantity < 2 ? (
                <div
                  onClick={ClickButton}
                  className=" -mt-[0.6rem] cursor-pointer    bottom-4 text-3xl "
                  // style={{ marginTop: "-8px" }}
                >
                  -
                </div>
              ) : (
                <div
                  onClick={decrymentQty}
                  className=" -mt-[0.6rem] cursor-pointer    bottom-4 text-3xl "
                  // style={{ marginTop: "-8px" }}
                >
                  -
                </div>
              )}
              <div className="shrink block  w-16 text-white ">
                <div className="block  text-xl -m-[0.2rem]  font-medium ">
                  {quantity}
                </div>
              </div>{" "}
              {quantity < product.maxQty ? (
                <div
                  onClick={incrymentQty}
                  className="-mt-[0.4rem]  cursor-pointer text-2xl font-semibold "
                >
                  +
                </div>
              ) : (
                <div
                  // onClick={incrymentQty}
                  className="disabled text-2xl cursor-pointer -mt-[0.4rem]  font-semibold "
                >
                  +
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
