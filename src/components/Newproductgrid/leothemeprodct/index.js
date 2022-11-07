import React from "react";
import {
  faStar,
  faEye,
  faShare,
  faSearch,
  faCartFlatbed,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { ImEye } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Leotheme() {
  return (
    <div className="leo-product font-leo-theme-font gap-4  grid grid-cols-2 md:grid-cols-4 p-5">
      <div className="leo-item  hover:scale-95 duration-700  space-y-3 hover:shadow-lg">
        <div className="image group relative">
          <img
            src="https://demo1.leotheme.com/leo_wooden_demo/267-home_default/blouse.jpg"
            alt=""
          />

          <div className="icon duration-700  bg-black  w-full absolute top-0 bottom-0 right-0 left-0 opacity-0 group-hover:opacity-[0.6]">
            <div className="op text-[14px] absolute right-3 space-y-2 top-4">
              <div className="item bg-white border  text-leo-theme-title-color hover:bg-leo-theme-wishlist-bg-hover-color hover:text-leo-theme-default-title-color  place-items-center grid w-[40px] h-[40px]">
                <ImEye />
              </div>
              <div className="item bg-white border text-leo-theme-title-color hover:bg-leo-theme-wishlist-bg-hover-color hover:text-leo-theme-default-title-color  place-items-center grid w-[40px] h-[40px]">
                <FaShoppingCart />
              </div>
              <div className="item bg-leo-theme-wishlist-bg-color text-leo-theme-default-title-color border hover:bg-leo-theme-wishlist-bg-hover-color hover:text-leo-theme-default-title-color  place-items-center grid w-[40px] h-[40px]">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              {/* <div className="item bg-white border hover:bg-black hover:text-white  place-items-center grid w-[40px] h-[40px]">
                <FontAwesomeIcon icon={faSearch} />
              </div> */}
            </div>
          </div>
        </div>

        <div className="title text-center  text-[14px] space-y-2 text-leo-theme-title-color">
          <h3 className="capitalize font-[500] text-leo-theme-title-color">
            Adipiscing elit
          </h3>
          <h3 className="text-leo-theme-price-color font-[800]">$25.99</h3>
          <div className="space h-[0.6rem]"></div>
        </div>
      </div>
    </div>
  );
}
