import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
export default function ProductPage12({
  product,
  titleCOlor,
  buttonBackground,
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
    <div className="container py-4  grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className="row shadow-md   rounded-2xl  w-4/5">
        <div className="relative ">
          <img
            className="rounded-md w-full block m-auto"
            src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />

          {buttonClick ? (
            <div className=" absolute top-0 right-0">
              <div
                onClick={ClickButton}
                style={{
                  backgroundColor: buttonBackground,
                }}
                className="-mr-3 -mt-4 text-4xl font-semibold shadow-md bg-white text-green-500  rounded-md w-11 text-center h-11 leading-10  "
              >
                +
              </div>
            </div>
          ) : (
            <div className="shadow-2xl  ">
              {" "}
              <div
                className=" px-3 h-14 font-semibold -mt-4 border   text-green-500 bg-white z-50 top-0 left-3 absolute flex text-3xl shadow-2xl  leading-9   rounded-md justify-between text-center w-full  "
                // onClick={ClickButton}
              >
                {quantity < 2 ? (
                  <div
                    onClick={ClickButton}
                    className=" cursor-pointer -mt-1  ml-2 bottom-4 text-5xl "
                    // style={{ marginTop: "-8px" }}
                  >
                    -
                  </div>
                ) : (
                  <div
                    onClick={decrymentQty}
                    className=" cursor-pointer  -mt-1  ml-2 bottom-4 text-5xl "
                    // style={{ marginTop: "-8px" }}
                  >
                    -
                  </div>
                )}
                <div className="shrink block  bg-green-500 w-16 text-white ">
                  <div className="block m-auto text-2xl mt-2 font-medium ">
                    {quantity}
                  </div>
                </div>{" "}
                {quantity < product.maxQty ? (
                  <div
                    onClick={incrymentQty}
                    className="   cursor-pointer font-semibold m-1"
                  >
                    +
                  </div>
                ) : (
                  <div className="disabled cursor-pointer font-semibold m-1">
                    +
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="py-1 rounded-tl-lg text-white font-semibold absolute top-0 w-12 h-14 text-center bg-orange-600">
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
        <div className="py-2 px-3">
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
  );
}
