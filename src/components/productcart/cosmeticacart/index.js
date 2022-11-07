import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faClock,
  faTrash,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
export default function Cosmeticacart() {
  return (
    <div className="container flex space-x-4 font-cosmetica-theme-font p-5 md:space-y-0 space-y-14">
      <div className="row md:w-[80%] border p-3 md:block flex md:space-x-0 space-x-2">
        <table class="md:inline-table hidden border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              <th
                class="border-b
               text-[10px] uppercase  dark:border-slate-600  p-4 pl-8 pt-0 pb-3 text-cosmetica-theme-table-title-color dark:text-slate-200 text-left"
              ></th>
              <th
                class="border-b 
              text-[10px] uppercase  dark:border-slate-600  p-4 pl-8 pt-0 pb-3 text-cosmetica-theme-table-title-color dark:text-slate-200 text-left"
              >
                Product
              </th>

              <th class="border-b text-[10px] uppercase  dark:border-slate-600  p-4 pt-0 pb-3 text-cosmetica-theme-table-title-color dark:text-slate-200 text-left">
                Price
              </th>
              <th class="border-b text-[10px] uppercase  dark:border-slate-600  p-4 pr-8 pt-0 pb-3 text-cosmetica-theme-table-title-color dark:text-slate-200 text-left">
                Quantity
              </th>
              <th class="border-b text-[10px] uppercase  dark:border-slate-600  p-4 pr-8 pt-0 pb-3 text-cosmetica-theme-table-title-color dark:text-slate-200 text-left">
                Total
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b  space-x-5 border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                x
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
                    <h3 className="text-[11px] font-[600] text-cosmetica-theme-title-color ">
                      Faxtex Product Sample
                    </h3>
                    {/* <p>Size: M</p>
                    <p>Color: Blue</p>
                    <p className="text-[16px] text-black font-medium">Remove</p> */}
                  </div>
                </div>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h3 className="text-[12px] font-[800] text-cosmetica-theme-price-color">
                  $110.00{" "}
                  <span className="text-cosmetica-theme-mrp-color">
                    {" "}
                    <s>$199.00</s>
                  </span>
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                <div className=" qty md:w-[80%] h-[45px] flex     ">
                  <div className="item  w-[25%] border grid place-items-center  text-3xl   text-center p-3">
                    <BiMinus />
                  </div>
                  <div className="item bg-[#f3f3f3]  text-xl p-3 w-[95%] text-center">
                    2
                  </div>
                  <div className="item w-[25%]  border text-center p-3 text-2xl ">
                    <p className=" grid place-items-center">
                      <BsPlus />
                    </p>
                  </div>
                </div>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h3 className="text-[14px] font-[800] text-cosmetica-theme-totla-price-color ">
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
          <h3 className="text-[17px] text-[#333e48] ">Faxtex Product Sample</h3>
          <p>Size: M</p>
          <p>Color: Blue</p>
          <h3 className="text-[#Dc3545]">
            $110.00{" "}
            <span className="text-[#848484]">
              {" "}
              <s>$199.00</s>
            </span>
          </h3>

          <div className="mt-2 pl-[1rem] pr-[1rem] text-slate-500 rounded-3xl qty flex border space-x-3 w-[97%] border-slate-500   ">
            <div className="item flex-glow text-[1.2rem] mt-[0.4rem] w-[80%]">
              1
            </div>
            <div className="item text-2xl">
              <BsPlus />
            </div>
            <div className="item text-2xl">
              <BiMinus />
            </div>
          </div>
          <p className="text-[16px] text-black bg-[#e6e6e6] w-[80%] p-1 rounded-3xl min-w-min text-center font-medium">
            Remove
          </p>
        </div>

        <div className="div w-full md:flex-row flex-col  md:w-[100%] md:justify-end flex space-y-3 md:space-y-0 md:space-x-4 p-5">
          <input
            type="button"
            value="procced to checkout"
            className=" text-[11px] uppercase bg-cosmetica-theme-checkoutbtn-bg-color w-full md:w-[50%] 
             p-3"
          />
          <input
            type="button"
            value="continue shopping"
            className="uppercase text-[11px] font-[400]  text-cosmetica-theme-button-title-color
            border-cosmetica-theme-border-color border w-full md:w-[50%]  p-3"
          />
        </div>
      </div>
      <div
        className="row w-full md:w-[30%] 
       border bg-[#f2f2f2]  space-y-6 md:mt-0 mt-5"
      >
        <div className="div border-b p-[1rem]">
          <h3 className="text-[10px]">THERE ARE 1 ITEMS IN YOUR CART</h3>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between">
            <h3 className="text-[14x] font-[600]">TOTAL:</h3>
            <h3 className="text-[22px] font-[700]">$325.00</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[14px] font-[600]">SHIPPING :</h3>
            <h3 className="text-[11px]">
              Shipping & taxes calculated at checkout
            </h3>
          </div>
          <div className="flex ">
            <div
              className="progressbar rounded-r-3xl
         relative w-full  mt-5 h-[1rem] bg-[#dcdcdc]"
            >
              <div className="fill as absolute top-0 bottom-0 left-0"></div>
              <div
                className="icon -top-[1rem] absolute -left-1 w-[50px] text-[#fff] grid place-items-center
           h-[50px] bg-[#30b94d] rounded-full"
              >
                <FontAwesomeIcon icon={faTruck} />
              </div>
            </div>
          </div>
          <div className="h-[1rem]"></div>
          <div className="mt-4">
            {" "}
            <h3 className="text-[12px]">SPEND $1,675.00 FOR FREE SHIPPING</h3>
            <h3 className="text-[12px]">
              Free shipping for any orders above $2,000.00
            </h3>
          </div>
          <div className="text-[12px]">ADD A NOTE TO YOUR ORDER :</div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
}
