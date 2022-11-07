import React, { useState } from "react";

export default function Productcard13({
  product,
  titleColor,
  productMrp,
  productStoreprice,
  categoryCOlor,
  variantColor,
  Cartvisible,
}) {
  const [buttonClick, SetButton] = useState(true);
  const [variant, setvariant] = useState([]);
  const [quantity, setQuantiy] = useState(1);
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
      return r.size == get;
    });
    setvariant(updateVariant);
    console.log(
      "🚀 ~ file: index.js ~ line 24 ~ changeVariant ~ setvḁriant",
      updateVariant
    );
  };
  return (
    <div className="container grid grid-cols-1 md:grid-cols-4 px-9 gap-4">
      <div className="  row  border-2">
        <div className="image relative">
          <img src={product.produtImage} alt="" />
          <div className=" opacity-90 w-24 justify-between  space-x-5 flex p-2 rounded-full bg-slate-300 absolute bottom-4 left-4">
            <div className="row font-bold text">4.7</div>
            <div className="row">
              <span className=" text-slate-400">|</span>{" "}
              <span className="font-bold">7</span>
            </div>
          </div>
        </div>
        <div className="  content px-3 py-3">
          <h3 className="font-sans font-semibold truncate">
            {product.productCategory}
          </h3>
          <p className="truncate text-slate-300 font-normal ">
            {product.productName}
          </p>
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
                  <option value={i.size}>
                    {i.size}
                    {/* {""} {product.unit} */}
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
          <div className="price-content flex space-x-2 mt-2 text-sm ">
            {variant == false ? (
              <div className="flex space-x-3  text-base font-semibold mt-2">
                <h3 className=" font-sans font-semibold">
                  ${product.productMrp}
                </h3>
                <h3 className=" font-sans text-slate-200 font-semibold">
                  <s>${product.productStoreprice}</s>{" "}
                  <span className="text-orange-500 ">(OFF 60%)</span>
                </h3>
              </div>
            ) : (
              variant.map((v) => (
                <div className=" flex  space-x-3 text-base font-semibold mt-2">
                  <h3 className=" font-sans font-semibold">${v.storePrice}</h3>
                  <h3 className=" font-sans text-slate-200 font-semibold">
                    <s>${v.mrp}</s>{" "}
                    <span className="text-orange-500 px-3">(OFF 60%)</span>
                  </h3>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
