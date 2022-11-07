import React, { useState } from "react";
import "./index.scss";
import PropTypes from "prop-types";
import ScrollContainer from "react-indiana-drag-scroll";
export default function Productcardscroll2({
  title,
  price,
  categorys,
  titleCOlor,
  buttonBackground,
  categoryCOlor,
  discountCOlor,
  priceColor,
  image,
  product,
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
      {/* <ScrollContainer
        className=" h-screen flex scroll-container"
        horizontal={true}
      > */}
      <div className="grid grid-cols-3">
        <div className="row shadow-lg rounded-2xl   ">
          <div className="relative ">
            <img
              className="rounded-t-2xl w-full block m-auto"
              src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />

            {buttonClick ? (
              <div className=" absolute bottom-0 right-0">
                <div
                  onClick={ClickButton}
                  style={{
                    marginRight: "-15px",
                    marginBottom: "-10px",
                    backgroundColor: buttonBackground,
                  }}
                  className="cursor-pointer text-2xl shadow-md bg-white  rounded-lg w-9 text-center h-9 leading-8  text-black"
                >
                  +
                </div>
              </div>
            ) : (
              <div className="shadow-2xl">
                {" "}
                <div
                  className="px-2 bottom-0 absolute flex text-3xl shadow-xl h-11 leading-9   rounded-md justify-between text-center w-full text-cyan-100 bg-slate-900  "
                  // onClick={ClickButton}
                >
                  {quantity < 2 ? (
                    <div
                      onClick={ClickButton}
                      className=" cursor-pointer     bottom-4 text-5xl "
                      style={{ marginTop: "-8px" }}
                    >
                      -
                    </div>
                  ) : (
                    <div
                      onClick={decrymentQty}
                      className=" cursor-pointer    bottom-4 text-5xl "
                      style={{ marginTop: "-8px" }}
                    >
                      -
                    </div>
                  )}
                  <div className="shrink text-2xl mt-1">{quantity}</div>{" "}
                  {quantity < product.maxQty ? (
                    <div onClick={incrymentQty} className=" cursor-pointer ">
                      +
                    </div>
                  ) : (
                    <div className=" disabled ">+</div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="py-3 px-4">
            <h3 style={{ color: titleCOlor }} className="truncate text-lg">
              {product.productName}
            </h3>
            <select
              onChange={(e) => changeVariant(e.target.value)}
              className=" left-0 ml-0 mt-4 accent-stone-800 block m-auto rounded-full  px-3 py-2 border-none bg-slate-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full  sm:text-sm"
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
                      $ {i.mrp}
                      <span className="ml-3 text-slate-300">
                        <s>$ {i.storePrice}</s>
                      </span>
                    </h3>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      {/* </ScrollContainer> */}
    </>
  );
}
Productcardscroll2.propTypes = {
  // product: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  categorys: PropTypes.string,
  titleCOlor: PropTypes.string,
  priceCOlor: PropTypes.string,
  discountCOlor: PropTypes.string,
  buttonBackground: PropTypes.string,
  categoryCOlor: PropTypes.string,
  priceColor: PropTypes.string,
};
