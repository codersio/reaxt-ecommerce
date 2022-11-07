import React, { useState } from "react";
import "./index.scss";
import PropTypes from "prop-types";

export default function ProductPage2({
  product,
  titleColor,
  buttonBackground,
  discountColor,
  categoryColor,
  priceColor,
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
    <>
      <div className="container  grid grid-cols-2 md:grid-cols-4 gap-3 ">
        <div className="row shadow-md rounded-lg ">
          <div className="image  rounded-lg  ">
            <div className="">
              <img
                className=" block m-auto w-9/12 grid place-content-center "
                src={product.productImage}
                alt=""
              />
            </div>
          </div>
          <div className="  px-4 py-4 ">
            <h3 style={{ color: categoryColor }} className="truncate">
              {product.productCategory}
            </h3>
            <h3
              style={{ color: titleColor }}
              className=" truncate md:text-lg text-base"
            >
              {product.productName}
            </h3>
            <p className=" font-medium text-green-600mt-2 ">In-stock</p>

            {variant == false ? (
              <div className="flex space-x-3">
                <p style={{ color: priceColor }} className="mt-2 font-medium">
                  ${product.productMrp}{" "}
                  <span
                    style={{ color: discountColor }}
                    className=" text-slate-400"
                  >
                    $ <s>{product.productStoreprice}</s>
                  </span>
                </p>
              </div>
            ) : (
              <>
                {variant.map((i) => (
                  <p style={{ color: priceColor }} className="mt-2 font-medium">
                    ${i.mrp}{" "}
                    <span
                      style={{ color: discountColor }}
                      className=" text-slate-400"
                    >
                      $ <s>{i.storePrice}</s>
                    </span>
                  </p>
                ))}
              </>
            )}

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
                    style={{ backgroundColor: buttonBackground }}
                    onClick={ClickButton}
                    className="mt-2 text-cyan-50 w-full p-1 font-medium  bg-blue-900"
                  >
                    Add To Cart
                  </button>
                ) : (
                  <div
                    className=" bg-blue-900 mt-3  px-3 h-[38px] font-semibold  border   text-white   flex text-3xl shadow-2xl  leading-9    justify-between text-center w-full  "
                    // onClick={ClickButton}
                  >
                    {quantity < 2 ? (
                      <div
                        onClick={ClickButton}
                        className=" -mt-[0.7rem] cursor-pointer  ml-2 bottom-4 text-5xl "
                        // style={{ marginTop: "-8px" }}
                      >
                        -
                      </div>
                    ) : (
                      <div
                        onClick={decrymentQty}
                        className=" -mt-[0.7rem] cursor-pointer  ml-2 bottom-4 text-5xl "
                        // style={{ marginTop: "-8px" }}
                      >
                        -
                      </div>
                    )}
                    <div className="shrink block  w-16 text-white ">
                      <div className="block m-auto text-2xl  font-medium ">
                        {quantity}
                      </div>
                    </div>{" "}
                    {quantity < product.maxQty ? (
                      <div
                        onClick={incrymentQty}
                        className="  cursor-pointer font-semibold -m-[0.2rem]"
                      >
                        +
                      </div>
                    ) : (
                      <div
                        // onClick={incrymentQty}
                        className="disabled cursor-pointer font-semibold -m-[0.2rem]"
                      >
                        +
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
ProductPage2.propTypes = {
  titleColor: PropTypes.string,
  priceColor: PropTypes.string,
  discountColor: PropTypes.string,
  buttonBackground: PropTypes.string,
  categoryColor: PropTypes.string,
};
