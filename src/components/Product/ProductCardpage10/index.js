import React, { useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";
export default function Productpage10({ product, Cartvisible }) {
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
      <div className="container grid grid-cols-1 md:grid-cols-4 px-9 gap-4">
        <div className=" relative  row   shadow-md ">
          <div className="image pt-4 ">
            <img
              // Cartvisible={Cartvisible}
              className=" w-1/2 block m-auto"
              src={product.productImage}
              alt=""
            />

            <div className="px-5 py-3 absolute bottom-0 w-full hidden  group-hover:block bg-white ">
              <div className="price-content flex space-x-2 mt-2 text-sm ">
                <h3 className="row font-sans font-semibold">
                  ${product.productMrp}
                </h3>
                <h3 className="row font-sans text-slate-200 font-semibold">
                  <s>${product.productStoreprice}</s>{" "}
                  <span className="text-orange-500">(OFF 60%)</span>
                </h3>
              </div>
            </div>
          </div>
          <div className=" content px-5 py-3">
            <h3 className="font-sans font-semibold text-slate-300">
              {product.productCategory}
            </h3>
            <p className="truncate ">{product.productName}</p>
            {Cartvisible == false ? (
              <div></div>
            ) : (
              <select
                className=" mt-2 w-full border p-2"
                onChange={(e) => changeVariant(e.target.value)}
              >
                {product.variants.map((v) => (
                  <option value={v.weight}>{v.weight}</option>
                ))}
              </select>
            )}

            <div className="mt-9 price-content flex space-x-2 mt-2 text-sm "></div>
            <div className=" space-x-5 flex justify-between  w-full">
              {variant == false ? (
                <div className="">
                  <h3 className=" font-sans font-semibold">
                    ${product.productMrp}
                  </h3>
                  <h3 className=" font-sans text-slate-200 font-semibold">
                    <s>${product.productStoreprice}</s>{" "}
                  </h3>
                </div>
              ) : (
                variant.map((v) => (
                  <div className="">
                    <h3 className=" font-sans font-semibold">
                      ${v.storePrice}
                    </h3>
                    <h3 className=" font-sans text-slate-200 font-semibold">
                      <s>${v.mrp}</s>{" "}
                    </h3>
                  </div>
                ))
              )}

              {Cartvisible == false ? (
                <div></div>
              ) : (
                <div className="row ">
                  <div {...Cartvisible} className=" p-1 text-center  ">
                    {buttonClick ? (
                      <button
                        onClick={ClickButton}
                        className="  rounded-md border-green-500 border-2 w-20 h-10 font-bold text-green-500  "
                      >
                        ADD
                      </button>
                    ) : (
                      <div
                        // onClick={ClickButton}
                        className=" flex  text-base   rounded-md text-white bg-green-500 border-2 w-24 h-10 font-bold   "
                      >
                        <div className="px-3 flex space-x-5 justify-center mt-1 ">
                          {quantity < 2 ? (
                            <div
                              onClick={ClickButton}
                              className="disabled row "
                            >
                              -
                            </div>
                          ) : (
                            <div
                              onClick={decrymentQty}
                              className="row cursor-pointer row"
                            >
                              -
                            </div>
                          )}

                          <div className="row">{quantity}</div>
                          {quantity < product.maxQty ? (
                            <div
                              onClick={incrymentQty}
                              className=" cursor-pointer row "
                            >
                              +
                            </div>
                          ) : (
                            <div className=" disabled ">+</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="py-1 text-white font-semibold absolute top-0 w-12 h-14 text-center bg-orange-600">
            23% off
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#DF6B49"
                fill-opacity="1"
                d="M0,320L18.5,288C36.9,256,74,192,111,176C147.7,160,185,192,222,197.3C258.5,203,295,181,332,154.7C369.2,128,406,96,443,85.3C480,75,517,85,554,128C590.8,171,628,245,665,256C701.5,267,738,213,775,170.7C812.3,128,849,96,886,117.3C923.1,139,960,213,997,240C1033.8,267,1071,245,1108,213.3C1144.6,181,1182,139,1218,117.3C1255.4,96,1292,96,1329,122.7C1366.2,149,1403,203,1422,229.3L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

Productpage10.propType = {
  Cartvisible: PropTypes.bool,
};
