import React, { useState } from "react";
import "./index.scss";
import "../../../scss/global.scss";
import PropTypes from "prop-types";

export default function ProductPage4({
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
  products,
  Cartvisible,
  padding,
  margin,
  marginBottom,
  marginLeft,
  marginTop,
  marginRight,
  border,
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
    const updateVariant = products.variants.filter((r) => {
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
      {products ? (
        <>
          <div
            className={` border-${border} px-2 p-${padding} m-${margin} ml-${marginLeft} mr-${marginRight} mt-${marginTop} mb-${marginBottom} rounded-3xl row text-center  shadow-m bg-slate-50  `}
          >
            <div>
              <div className=" relative  mr-0">
                {Cartvisible == false ? (
                  <div></div>
                ) : (
                  <div>
                    {buttonClick ? (
                      <div
                        onClick={ClickButton}
                        className=" cursor-pointer absolute -right-[0.25rem] md:right-3 top-5  text-5xl text-yellow-500   w-9 text-center h-9 leading-8  "
                      >
                        +
                      </div>
                    ) : (
                      <div className="block m-auto">
                        <div
                          className="absolute left-[7%] md:left-[17%] bg-yellow-600  z-10 w-[88%] md:w-[71%]     h-[49px] font-semibold  border   text-white   flex text-3xl shadow-m  leading-9   rounded-md justify-between text-center   "
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
                          {quantity < products.maxQty ? (
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
            </div>

            <img
              className=" relative w-3/5 top-6  block relative m-auto  grid place-content-center "
              src={products.image}
              alt=""
            />
            <div className=" py-6 font-medium">
              <h2 className=" text-lg">{products.productCategory}</h2>
              <h3
                style={{ color: titleCOlor }}
                className="font-medium text-[color:var(--primary-color)] text-lg truncate"
              >
                {products.productName}
              </h3>
              {Cartvisible == false ? (
                <div></div>
              ) : (
                <div>
                  {" "}
                  <select
                    className="focus:outline-none focus:border-blue-600 mt-2 w-[80%] border p-2"
                    onChange={(e) => changeVariant(e.target.value)}
                  >
                    {products.variants.map((v) => (
                      <option value={v.weight}>{v.weight}</option>
                    ))}
                  </select>
                </div>
              )}

              {variant == false ? (
                <div className=" justify-center flex space-x-2 ">
                  <h3 className=" font-sans text-yellow-500 font-semibold">
                    ${products.productMrp}
                  </h3>
                  <h3 className=" font-sans text-slate-200 font-semibold">
                    <s>${products.productStoreprice}</s>{" "}
                  </h3>
                </div>
              ) : (
                variant.map((v) => (
                  <div className="justify-center flex space-x-2">
                    <h3 className=" font-sans text-yellow-500 font-semibold">
                      ${v.storePrice}
                    </h3>
                    <h3 className=" font-sans text-slate-200 font-semibold">
                      <s>${v.mrp}</s>{" "}
                    </h3>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="px-5 container  grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className=" px-2  rounded-3xl row text-center  shadow-m bg-slate-50  ">
            <div>
              <div className=" relative  mr-0">
                {Cartvisible == false ? (
                  <div></div>
                ) : (
                  <div>
                    {buttonClick ? (
                      <div
                        onClick={ClickButton}
                        className=" cursor-pointer absolute -right-[0.25rem] md:right-3 top-5  text-5xl text-yellow-500   w-9 text-center h-9 leading-8  "
                      >
                        +
                      </div>
                    ) : (
                      <div className="block m-auto">
                        <div
                          className="absolute left-[7%] md:left-[17%] bg-yellow-600  z-10 w-[88%] md:w-[71%]     h-[49px] font-semibold  border   text-white   flex text-3xl shadow-m  leading-9   rounded-md justify-between text-center   "
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
            </div>

            <img
              className=" relative w-3/5 top-6  block relative m-auto  grid place-content-center "
              src={product.image}
              alt=""
            />
            <div className=" py-6 font-medium">
              <h2 className=" text-lg">{product.productCategory}</h2>
              <h3
                style={{ color: titleCOlor }}
                className="font-medium text-slate-300 text-lg truncate"
              >
                {product.productName}
              </h3>
              {Cartvisible == false ? (
                <div></div>
              ) : (
                <div>
                  {" "}
                  <select
                    className="focus:outline-none focus:border-blue-600 mt-2 w-[80%] border p-2"
                    onChange={(e) => changeVariant(e.target.value)}
                  >
                    {product.variants.map((v) => (
                      <option value={v.weight}>{v.weight}</option>
                    ))}
                  </select>
                </div>
              )}

              {variant == false ? (
                <div className=" justify-center flex space-x-2 ">
                  <h3 className=" font-sans text-yellow-500 font-semibold">
                    ${product.productMrp}
                  </h3>
                  <h3 className=" font-sans text-slate-200 font-semibold">
                    <s>${product.productStoreprice}</s>{" "}
                  </h3>
                </div>
              ) : (
                variant.map((v) => (
                  <div className="justify-center flex space-x-2">
                    <h3 className=" font-sans text-yellow-500 font-semibold">
                      ${v.storePrice}
                    </h3>
                    <h3 className=" font-sans text-slate-200 font-semibold">
                      <s>${v.mrp}</s>{" "}
                    </h3>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* product card end */}
    </>
  );
}
ProductPage4.propTypes = {
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
  Cartvisible: PropTypes.bool,
};
