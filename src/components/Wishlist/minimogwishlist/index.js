import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import "../../../Font/globalfont.scss";
export default function MinimogWishlist() {
  const [cartselect, setCart] = useState(2);
  return (
    <div className="md:p-20 space-y-5  font-Jost text-[14px]  minimog-wishlist p-9  md:w-[100vw]  ">
      <div className="md:flex p-5  md:justify-between md:border-b">
        <div className="row  flex md:flex-row flex-col md:space-x-2">
          <div className="item grid place-items-center text-[20px] text-[#ababab]">
            <FontAwesomeIcon icon={faRemove} />
          </div>
          <div className="item md:w-[25%]">
            <img
              className="w-[83%] block m-auto rounded-md"
              src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_1-300x400.jpg"
              alt=""
            />
          </div>
          <div className="item md:text-left text-center space-y-1 pt-5">
            <h3 className="text-[16px] text-black  font-[500]">
              Wool-blend Jacket
            </h3>
            <h3 className="text-black">
              {" "}
              <span className="text-[#ababab]">
                {" "}
                <s>$39.00</s>{" "}
              </span>{" "}
              $29.00
            </h3>
            <h3>Sep 14, 2022</h3>
          </div>
        </div>
        <div className="row md:w-[15%] grid place-items-center">
          {cartselect > 10 ? (
            <div className=" text-[16px] font-[600] rounded-md bg-black p-3 w-[100%] text-white text-center">
              Add to cart
            </div>
          ) : (
            <div className=" text-[16px] font-[600] rounded-md bg-black p-3 w-[100%] text-white text-center">
              Select options
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
