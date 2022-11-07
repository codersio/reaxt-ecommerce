import React from "react";
import "../../../Font/globalfont.scss";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Cosmetica() {
  return (
    <div className="cosmetica-cartdrop w-[100%] font-Roboto">
      <div className="row flex space-x-3 p-4 w-full">
        <div className="image">
          <img
            className="border w-[85%]"
            src="https://cdn.shopify.com/s/files/1/0511/8479/5845/products/11_03ae04d7-67a7-4e0c-9962-f459ab20b4fe_small.jpg"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h3 className="text-[13px] font-[700] text-electrox-theme-title-color">
            Diamond Halo Stud Magnis{" "}
          </h3>
          <div className="flex justify-between w-full">
            <h3 className="text-electrox-theme-price-color text-[12px] font-[600] font-Poppins">
              $325.00 <span className="font-[500]">x 1</span>
            </h3>
            <div className="bg-[#e6e6e6] rounded-full w-[20px] h-[20px] grid place-items-center">
              <RiDeleteBinLine />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row p-4 space-y-4">
        <h3 className="text-[10px] font-Montserrat font-[800] text-electrox-theme-title-color">
          SPEND{" "}
          <span className="text-electrox-theme-default-price-color">
            $1,675.00
          </span>{" "}
          FOR FREE SHIPPING
        </h3>

        <div className=" relative progressbar w-full h-[1.2rem] bg-electrox-theme-default-bg-color">
          <div className="absolute top-0 w-[15%] text-white bottom-0 grid place-items-center font-[600] left-0 text-[10px] bg-electrox-theme-prgressbaractive-bg-color">
            13%
          </div>
        </div>
        <div className="btn space-y-4">
          <div className="border-2 border-dashed flex p-3 justify-between">
            <h3 className="text-[14px] font-Poppins uppercase font-[800]">
              Total
            </h3>
            <h3 className="text-[14px] font-Poppins font-[800]">$325.00</h3>
          </div>
          <div className="chek space-y-2">
            <button className="bg-electrox-theme-checkoutbtn-bg-color uppercase text-[10px] tracking-[2px] font-[600] text- w-full p-3 text-electrox-theme-button-bg-title-color">
              checkout
            </button>
            <div>
              <button className="border-electrox-theme-cart-border-color uppercase text-[10px] tracking-[2px] font-[600] text- border w-full p-3 text-electrox-theme-title-color">
                view cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
