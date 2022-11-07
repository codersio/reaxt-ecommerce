import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Font/globalfont.scss";
export default function Leothem() {
  return (
    <div className="nest font-leo-theme-font p-4 space-y-4">
      <div className="row flex space-x-4 ">
        <div className="image w-[25%]">
          <img
            className=""
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
            alt=""
          />
        </div>
        <div className="w-[75%]">
          <div className="item flex w-[100%]">
            {" "}
            <div className="flex justify-between w-[100%]">
              <h3 className="text-leo-theme-title-color text-[14px]">
                Daisy Casual Bag
              </h3>
              <FontAwesomeIcon icon={faClose} />
            </div>
          </div>{" "}
          <h3 className="text-leo-theme-price-color text-[14px] ">
            1 × $800.00
          </h3>
        </div>
      </div>
      <div className="row space-y-4">
        <hr />
        <div className="row w-full space-y-2 text-[13px] text-leo-theme-default-title-color">
          <div className="item flex justify-between">
            <h3>Subtotal</h3>
            <h3 className="text-leo-theme-price-color">$26.99</h3>
          </div>
          <div className="item flex justify-between">
            <h3>Shipping</h3>
            <h3 className="text-leo-theme-price-color">$700.00</h3>
          </div>
          <div className="item flex justify-between">
            <h3>Taxes</h3>
            <h3 className="text-leo-theme-price-color">$700.00</h3>
          </div>
        </div>
        <hr />
        <div className="btn flex justify-between ">
          <h3 className="  text-[13px] text-leo-theme-default-title-color">
            {" "}
            Total
          </h3>
          <h3 className="  text-leo-theme-price-color text-[20px]">
            {" "}
            $40258.00
          </h3>
        </div>
        <div className="btn space-y-4 ">
          <button className="border-2 font-[600] uppercase w-[100%] p-2 bg-leo-theme-cartbutton-bg-color rounded-sm text-[14px] text-leo-theme-button-bg-title-color">
            {" "}
            View Cart{" "}
          </button>
          <div>
            <button className="border uppercase font-[600] w-[100%] p-2 bg-leo-theme-checkoutbtn-bg-color rounded-sm text-[14px] text-leo-theme-button-bg-title-color">
              {" "}
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
