import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Font/globalfont.scss";
export default function Nest() {
  return (
    <div className={`nest font-nest-theme-font p-4 space-y-4`}>
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
              <h3 className="text-nest-theme-title-color font-[600]">
                Daisy Casual Bag
              </h3>
              <FontAwesomeIcon icon={faClose} />
            </div>
          </div>{" "}
          <h3 className="text-nest-theme-price-color text-[16px] font-[600]">
            1 × $800.00
          </h3>
        </div>
      </div>
      <div className="row space-y-4">
        <hr />

        <div className="btn flex justify-between ">
          <h3 className="  text-[16px] text-nest-theme-default-title-color font-[700]">
            {" "}
            TOTAL
          </h3>
          <h3 className="  text-[18px] text-nest-theme-default-price-color font-[800]">
            {" "}
            $40258.00
          </h3>
        </div>
        <div className="btn flex justify-between ">
          <button className="border-2 w-[25%] p-2 border-nest-theme-border-color rounded-sm text-[14px] text-nest-theme-button-title-border-color">
            {" "}
            View Cart{" "}
          </button>
          <button className="border w-[25%] p-2 bg-nest-theme-button-bg-color rounded-sm text-[14px] text-nest-theme-button-bg-title--color">
            {" "}
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
