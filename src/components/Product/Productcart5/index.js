import React, { useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";
export default function Productpage5({ product, Cartvisible }) {
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
        <div className="row text-center rounded-md shadow-lg  bg-slate-100">
          <div className="m-2 relative">
            <img
              className="rounded-md"
              src={product.productImage}
              alt=""
              srcset=""
            />
            {Cartvisible == false ? (
              <div></div>
            ) : (
              <div>
                {buttonClick ? (
                  <div
                    onClick={ClickButton}
                    className=" cursor-pointer text-5xl leading-[2.9rem] left-[38%] block m-auto bottom-2 rounded-full shadow-lg bg-white w-14 h-14 absolute text-yellow-600 "
                  >
                    +
                  </div>
                ) : (
                  <div className="block m-auto">
                    <div
                      className=" left-[17%] bg-yellow-600 absolute bottom-2 w-[71%]  mt-3  px-3 h-[49px] font-semibold  border   text-white   flex text-3xl shadow-2xl  leading-9   rounded-md justify-between text-center   "
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
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            <h3 className=" font-medium text-lg text-slate-500">
              {product.productName}
            </h3>
          </div>
          <div>
            {variant == false ? (
              <div className="flex space-x-3 justify-center mt-2">
                <h3 className="row font-sans  font-semibold text-xl text-yellow-600">
                  ${product.productMrp}
                </h3>

                <h3 className="text-slate-500 row font-sans text-xl   font-semibold">
                  <s>${product.productStoreprice}</s>{" "}
                  <span className="text-yellow-600">(OFF 60%)</span>
                </h3>
              </div>
            ) : (
              <>
                {variant.map((i) => (
                  <div className="flex justify-center space-x-3 mt-2">
                    <h3 className="row font-sans  font-normal text-2xl text-yellow-600">
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
          {Cartvisible == false ? (
            <div></div>
          ) : (
            <div className="px-5 py-4">
              <select
                onChange={(e) => changeVariant(e.target.value)}
                name=""
                id=""
                className=" rounded-sm bg-slate-200 border-none w-full mt-2 border-2 p-2"
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
        </div>
      </div>
    </>
  );
}

Productpage5.propTypes = {
  product: PropTypes.string,
};
