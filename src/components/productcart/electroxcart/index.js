import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";

import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
export default function Electrocart() {
  return (
    <div className="container font-electrox-theme-font p-5 md:space-y-0 space-y-14">
      <div className="row md:block flex md:space-x-0 space-x-2">
        <table class="md:inline-table hidden border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              <th class="border-b text-[14px] font-[400] dark:border-slate-600  p-4 pl-8 pt-0 pb-3 text-electrox-theme-table-header-title-color dark:text-slate-200 text-left"></th>
              <th class="border-b text-[14px] font-[400] dark:border-slate-600  p-4 pl-8 pt-0 pb-3 text-electrox-theme-table-header-title-color dark:text-slate-200 text-left">
                Product
              </th>

              <th class="border-b text-[14px] font-[400] dark:border-slate-600  p-4 pt-0 pb-3 text-electrox-theme-table-header-title-color dark:text-slate-200 text-left">
                Price
              </th>
              <th class="border-b text-[14px] font-[400] dark:border-slate-600  p-4 pr-8 pt-0 pb-3 text-electrox-theme-table-header-title-color dark:text-slate-200 text-left">
                Quantity
              </th>
              <th class="border-b text-[14px] font-[400] dark:border-slate-600  p-4 pr-8 pt-0 pb-3 text-electrox-theme-table-header-title-color dark:text-slate-200 text-left">
                Total
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b  space-x-5 border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                <FontAwesomeIcon
                  className="text-[20px] font-semibold"
                  icon={faXmark}
                />
              </td>
              <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                <div className="item">
                  <img
                    src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
                    alt=""
                  />
                </div>
                <div className="item grid place-items-center">
                  <div className="div space-y-1">
                    <h3 className="text-[17px] text-electrox-theme-title-color font-[400]">
                      Faxtex Product Sample
                    </h3>
                    <p>Size: M</p>
                    <p>Color: Blue</p>
                    {/* <p className="text-[16px] text-black font-medium">Remove</p> */}
                  </div>
                </div>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-cosmetica-theme-price-color">
                  $110.00{" "}
                  <span className="text-electrox-theme-mrp-color">
                    {" "}
                    <s>$199.00</s>
                  </span>
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                <div
                  className="mt-2 pl-[1rem] 
                pr-[1rem] text-slate-500 rounded-3xl qty flex border
                 border-electrox-theme-border-color space-x-3 w-[77%] border-slate-500   p-[0.3rem]"
                >
                  <div
                    className="item  flex-glow 
                  text-[1.2rem] mt-[0.2rem] w-[85%] text-electrox-theme-button-qty-text-color"
                  >
                    1
                  </div>
                  <div className="item grid place-items-center text-2xl text-electrox-theme-button-qty-text-color">
                    <div className="bg-electrox-theme-default-bg-color w-[20px] grid place-items-center text-[16px] rounded-full h-[20px]">
                      <BsPlus />
                    </div>
                  </div>
                  <div className="item grid place-items-center text-2xl text-electrox-theme-button-qty-text-color">
                    <div className="bg-electrox-theme-default-bg-color w-[20px] grid place-items-center text-[16px] rounded-full h-[20px]">
                      <BiMinus />
                    </div>
                  </div>
                </div>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-electrox-theme-totla-price-color font-[400]">
                  $290.00
                </h3>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="tem md:hidden block">
          <img
            className="w-[76%]"
            src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
            alt=""
          />
        </div>
        <div className="item space-y-2 md:hidden block">
          <h3 className="text-[17px] text-electrox-theme-title-color font-semibold">
            Faxtex Product Sample
          </h3>
          <p className="text-electrox-theme-default-title-color">Size: M</p>
          <p className="text-electrox-theme-default-title-color">Color: Blue</p>
          <h3 className="text-electrox-theme-border-color">
            $110.00{" "}
            <span className="text-electrox-theme-mrp-color">
              {" "}
              <s>$199.00</s>
            </span>
          </h3>

          <div
            className="mt-2 pl-[1rem] 
                pr-[1rem] text-slate-500 rounded-3xl qty flex border
                 border-electrox-theme-border-color space-x-3 w-[77%] border-slate-500   p-[0.3rem]"
          >
            <div
              className="item  flex-glow 
                  text-[1.2rem] mt-[0.2rem] w-[85%] text-electrox-theme-button-qty-text-color"
            >
              1
            </div>
            <div className="item grid place-items-center text-2xl text-electrox-theme-button-qty-text-color">
              <div className="bg-electrox-theme-default-bg-color w-[20px] grid place-items-center text-[16px] rounded-full h-[20px]">
                <BsPlus />
              </div>
            </div>
            <div className="item grid place-items-center text-2xl text-electrox-theme-button-qty-text-color">
              <div className="bg-electrox-theme-default-bg-color w-[20px] grid place-items-center text-[16px] rounded-full h-[20px]">
                <BiMinus />
              </div>
            </div>
          </div>
          <p className="text-[16px] text-electrox-theme-title-color bg-electrox-theme-button-bg-color w-[80%] p-1 rounded-3xl min-w-min text-center font-medium">
            Remove
          </p>
        </div>
      </div>
      <div className="row  flex  justify-center  md:justify-end">
        <div
          className="div w-full md:flex-row flex-col 
         md:w-[35%] md:justify-end flex space-y-3 md:space-y-0 md:space-x-4 p-5"
        >
          <input
            type="button"
            value="continue shopping"
            className=" bg-electrox-theme-default-bg-color text-electrox-theme-title-color font-[600]  w-full md:w-[50%] rounded-3xl p-3"
          />
          <input
            type="button"
            value="clear cart"
            className=" bg-electrox-theme-clear-bg-color text-electrox-theme-title-color w-full md:w-[30%] rounded-3xl p-3"
          />
        </div>
      </div>
      <div className="row  flex     md:justify-end">
        <div className="cart flex-col space-y-4 w-full  md:w-[40%] flex  ">
          <div className="flex justify-between  p-3 border-b">
            <div className="h3 text-[20px] font-[700] text-electrox-theme-title-color">
              Cart Total
            </div>
            <div className="price text-[20px] font-[600] text-electrox-theme-title-color">
              $110.00
            </div>
          </div>
          <input
            type="button"
            value="Procced to Checkout"
            className="font-semibold text-electrox-theme-checkoutbtn-title-color  bg-electrox-theme-checkoutbtn-bg-color w-[100%] text-[900] rounded-3xl p-3"
          />
        </div>
      </div>
    </div>
  );
}
