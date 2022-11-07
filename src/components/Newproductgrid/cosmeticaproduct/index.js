import {
  faStar,
  faEye,
  faShare,
  faSearch,
  faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./style.scss";
export default function Cosmeticaprod() {
  return (
    <div className="cosmetica-container p-5 font-Inter gap-3  grid grid-cols-2 md:grid-cols-4">
      <div className="item overflow-hidden  border group relative group-hover:opacity-100 ">
        <div className="image  ">
          <img
            src="https://cdn.shopify.com/s/files/1/0511/8479/5845/products/25_570x570.jpg?v=1605513593"
            alt=""
          />
        </div>
        <div className="r space-y-5 p-3 text-[#6e6e6e] text-[14px]">
          <div className="tt space-y-2">
            <div className="review text-[14px] space-x-1">
              <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
              <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
              <FontAwesomeIcon icon={faStar} className="text-[#FDC040]" />
              <FontAwesomeIcon icon={faStar} className="text-gray-500" />
            </div>
            <h3 className="font-[600] text-cosmetica-theme-title-color">
              Diamon Halo Stud Magnis
            </h3>
          </div>

          <hr />

          <div className="price  group mt-3">
            <h3 className="e text-cosmetica-theme-price-color font-[800]  text-[20px] font-Poppins ">
              $325{" "}
              <span className=" ml-3 text-cosmetica-theme-mrp-color text-[13px]">
                <s>$362</s>
              </span>
            </h3>
          </div>
        </div>
        <div
          className="icon space-y-3 absolute scale-50
          group-hover:scale-75 ease-in duration-500 right-2 top-6
           opacity-0 group-hover:opacity-100"
        >
          <div
            className="item bg-cosmetica-theme-icon-bg-title-color border
           hover:bg-cosmetica-theme-icon-fover-color hover:text-cosmetica-theme-icon-hover-title-color 
           rounded-md place-items-center grid w-[50px] h-[50px]"
          >
            <FiHeart className="text-[1.7rem] text-cosmetica-theme-icon-colorcosmetica-theme-icon-fover-color" />
          </div>
          <div
            className="item bg-cosmetica-theme-icon-bg-title-color border
           hover:bg-cosmetica-theme-icon-fover-color hover:text-cosmetica-theme-icon-hover-title-color 
           rounded-md place-items-center grid w-[50px] h-[50px]"
          >
            <BsSearch className="text-[1.7rem] text-cosmetica-theme-icon-colorcosmetica-theme-icon-fover-color" />
          </div>
        </div>
        <button
          className="
            opacity-1 group-hover:opacity-100
             group-hover:right-0 -right-[28rem]
            duration-500 transition-all  justify-center
flex space-x-2 align-middle
             p-2 rounded-md text-cosmetica-theme-cart-title-color
              absolute w-[100%] bottom-0  bg-cosmetica-theme-cart-bg-color"
        >
          {" "}
          <div className="text-[1.4rem] grid place-items-center">
            <HiOutlineShoppingBag />
          </div>{" "}
          <span className="uppercase">Add To Cart</span>
        </button>
      </div>
    </div>
  );
}
