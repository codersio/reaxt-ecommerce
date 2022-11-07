import {
  faCartFlatbedSuitcase,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdArrowRightAlt } from "react-icons/md";
import React from "react";

export default function Electroxpro() {
  return (
    <div className="electrox-product font-electrox-theme-font grid grid-cols-2 md:grid-cols-5 p-5">
      <div className="item overflow-hidden duration-700 relative group hover:shadow-md p-3">
        <div className="title">
          <p className="text-electrox-theme-category-color text-[12px]">
            Bulgari
          </p>
          <h3 className="text-electrox-theme-title-color tex-[14px] font-[600]">
            Faxtex Product Sample
          </h3>
        </div>
        <div className="image relative">
          <img
            src="https://cdn.shopify.com/s/files/1/0265/3493/6627/products/printer.png?v=1649393985&width=360"
            alt=""
          />
          <div
            className=" absolute top-5
           text-electrox-theme-offer-text-color
            left-3 grid place-items-cente align-middle
             bg-electrox-theme-offer-bg-color font-[700] text-[11px]
              w-[35px] h-[35px] rounded-full text-center"
          >
            <h3>45%</h3>
          </div>
        </div>
        <div className="proce flex justify-between">
          <h3 className=" text-electrox-theme-price-color text-[20px]">
            $1200.00{" "}
            <span className="text-[12px] text-electrox-theme-mrp-color">
              {" "}
              <s>$150.00</s>
            </span>
          </h3>

          <button
            className=" rounded-full grid place-items-center  text-electrox-theme-cart-title-color  w-[35px] h-[35px]
           bg-electrox-theme-cartbutton-bg-color"
          >
            {" "}
            <MdArrowRightAlt className="text-[1.5rem]" />
          </button>
        </div>
        <div className="h-[3rem]"></div>
        <div className="wish p-3  absolute -bottom-[25rem] duration-500  group-hover:bottom-0  left-0 right-0 space-y-3  justify-center">
          <hr />
          <div className="item  text-electrox-theme-wishlist-text-color flex space-x-4 text-center justify-center">
            <h3 className="text-[14px]">
              {" "}
              <FontAwesomeIcon icon={faEye} /> <span>View</span>{" "}
            </h3>
            <h3 className="text-[14px]">
              {" "}
              <FontAwesomeIcon icon={faHeart} /> <span>Wishlist</span>{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
