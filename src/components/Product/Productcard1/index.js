import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

export default function Productcard1({
  title,
  price,
  categorys,
  titleCOlor,
  buttonBackground,
  categoryCOlor,
  priceColor,
  image,
}) {
  return (
    <>
      <div className="container  grid grid-cols-2 md:grid-cols-4 gap-3 ">
        <div className="item rounded-lg bg-slate-100 w-full">
          <div className="imgs relative rounded-lg  m-4  bg-white grid place-items-center">
            <div className="img m-8 ">
              <img
                className=" w-3/4 block m-auto "
                src={image}
                alt=""
                srcset=""
              />
            </div>
            <p className=" absolute top-3 right-5">
              <i class="fas fa-cart-arrow-down"></i>
            </p>
          </div>
          <div className="flex  justify-between ">
            <div className="row ">
              <div
                style={{ color: titleCOlor }}
                className="truncate font-medium ml-4"
              >
                {title}
              </div>
              <div
                style={{ color: categoryCOlor }}
                className=" ml-4 text-zinc-400"
              >
                {categorys}{" "}
                <span
                  style={{ color: priceColor }}
                  className=" ml-6 text-yellow-500"
                >
                  ${price}
                </span>
              </div>
            </div>
            <div className="row bottom-0 right-0">
              <div
                style={{
                  marginTop: "18px",
                  marginRight: "-15px",
                  backgroundColor: buttonBackground,
                }}
                className=" text-lg  rounded-full w-9 text-center h-9 leading-8 bg-black text-cyan-50"
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Productcard1.propTypes = {
  title: PropTypes.string,
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
