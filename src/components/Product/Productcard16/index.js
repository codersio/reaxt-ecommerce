import React, { useState } from "react";
import PropsTypes from "prop-types";
export default function Productcard16({
  product,
  titleColor,
  productMrp,
  productStoreprice,
  categoryCOlor,
  variantColor,
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
    <div className="container grid grid-cols-1 md:grid-cols-4 px-9 gap-4">
      <div className="  row   border-2">
        <div className="image relative">
          <img src={product.produtImage} alt="" />
        </div>

        <div className=" px-4 py-4">
          <h3 className="font-sans font-semibold truncate mt-2">
            {product.productCategory}
          </h3>
          <p className="truncate text-slate-600 font-normal  ">
            {product.productName}
          </p>

          <div className="price-content  flex space-x-2 mt-2 text-sm ">
            {variant == false ? (
              <div className="flex space-x-3">
                <h3 className="text-slate-500 row font-sans mt-3 font-semibold">
                  <s>${product.productStoreprice}</s>{" "}
                </h3>
                <h3 className="row font-sans text-lg px-2  font-normal ">
                  <span className="text-xl text-black">
                    ${product.productMrp}{" "}
                    <span className="text-green-700 text-base font-semibold ">
                      75%OFF
                    </span>
                  </span>
                </h3>
              </div>
            ) : (
              <>
                {variant.map((i) => (
                  <div className="flex space-x-3">
                    <h3 className="text-slate-500 row font-sans mt-3 font-semibold">
                      <s>${i.mrp}</s>{" "}
                    </h3>
                    <h3 className="row font-sans text-lg px-2  font-normal ">
                      <span className="text-xl text-black">
                        ${i.storePrice}{" "}
                        <span className="text-green-700 text-base font-semibold ">
                          75%OFF
                        </span>
                      </span>
                    </h3>
                  </div>
                ))}
              </>
            )}
          </div>
          {Cartvisible == false ? (
            <div></div>
          ) : (
            <div className="b-row flex space-x-2 mt-2">
              <div className="row w-full">
                <select
                  onChange={(e) => changeVariant(e.target.value)}
                  name=""
                  id=""
                  className="rounded-md w-full border-2 p-2"
                >
                  {product.variants.map((i) => (
                    <option value={i.weight}>
                      {i.weight} {product.unit}
                      {""}
                    </option>
                  ))}
                </select>
              </div>
              {/* {buttonClick?} */}
              <div className="row ">
                {buttonClick ? (
                  <div
                    onClick={ClickButton}
                    className=" cursor-pointer rounded-md bg-blue-600 w-12 pb-2 text-center text-3xl text-white"
                  >
                    +
                  </div>
                ) : (
                  <div
                    className="qtybtn 
               bg-blue-600 pb-3 rounded -mt-16 w-10  text-center text-2xl text-white"
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
Productcard16.propsTypes = {
  name: PropsTypes.string.isRequired,
  titleColor: PropsTypes.string,
  Cartvisible: PropsTypes.string,
};
