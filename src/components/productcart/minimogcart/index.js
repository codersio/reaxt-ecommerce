import {
  faPen,
  faPencil,
  faTicket,
  faTractor,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HiOutlineMinus } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import React from "react";
import "./style.scss";
export default function Minimogcart() {
  return (
    <div className="container  p-5 md:space-y-5 font-minimog-theme-font space-y-14">
      <div className="row md:block flex md:space-x-0 space-x-2">
        <table class="md:inline-table hidden border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              <th
                class="border-b text-[16px]
                dark:border-slate-600 font-[500]
                 p-4 pl-8 pt-0 pb-3 text-minimog-theme-table-heading-title-color
                  dark:text-slate-200 text-left"
              >
                Product
              </th>
              <th
                class="border-b text-[16px]
                dark:border-slate-600 font-[500]
                 p-4 pl-8 pt-0 pb-3 text-minimog-theme-table-heading-title-color
                  dark:text-slate-200 text-left"
              >
                Price
              </th>
              <th
                class="border-b text-[16px]
                dark:border-slate-600 font-[500]
                 p-4 pl-8 pt-0 pb-3 text-minimog-theme-table-heading-title-color
                  dark:text-slate-200 text-left"
              >
                Quantity
              </th>
              <th
                class="border-b text-[16px]
                dark:border-slate-600 font-[500]
                 p-4 pl-8 pt-0 pb-3 text-minimog-theme-table-heading-title-color
                  dark:text-slate-200 text-left"
              >
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                <div className="item">
                  <img
                    src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
                    alt=""
                  />
                </div>
                <div className="item grid place-items-center">
                  <div className="div space-y-2">
                    <h3 className="text-[16px] font-[500] text-minimog-theme-title-color ">
                      Wool-blend Jacket
                    </h3>
                    <p className="text-[14px] text-minimog-theme-delete-button-color ">
                      Remove
                    </p>
                  </div>
                </div>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-minimog-theme-price-color ">
                  $290.00
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                <div
                  className="   border-minimog-theme-border-color
                   rounded-md  bottom-2 w-[40%] 
                      px-3 h-[42px]   border   text-minimog-theme-title-color   flex text-xl   leading-9    justify-between text-center   "
                  // onClick={ClickButton}
                >
                  <div
                    className="  cursor-pointer
                      
                      text-sm grid place-items-center "
                    // style={{ marginTop: "-8px" }}
                  >
                    <HiOutlineMinus />
                  </div>
                  <div className="shrink block  w-16 text-minimog-theme-title-color ">
                    <div className="grid place-items-center text-[1rem] mt-[0.3rem] font-medium ">
                      1
                    </div>
                  </div>{" "}
                  <div
                    // onClick={incrymentQty}
                    className=" grid place-items-center
                     cursor-pointer text-minimog-theme-title-color"
                  >
                    <BsPlus />
                  </div>
                </div>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] font-[600] text-minimog-theme-price-color ">
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
          <h3 className="text-[16px] text-minimog-theme-title-color ">
            Wool-blend Jacket
          </h3>
          <p className="text-[16px] text-minimog-theme-delete-button-color font-medium">
            Remove
          </p>
          <div
            className="   border-minimog-theme-border-color
                   rounded-md  bottom-2 w-[80%] 
                      px-3 h-[42px]   border  
                       text-minimog-theme-title-color   flex text-xl  
                        leading-9    justify-between text-center   "
            // onClick={ClickButton}
          >
            <div
              className="  cursor-pointer
                      
                      text-sm grid place-items-center "
              // style={{ marginTop: "-8px" }}
            >
              <HiOutlineMinus />
            </div>
            <div className="shrink block  w-16 text-minimog-theme-title-color ">
              <div className="grid place-items-center text-[1rem] mt-[0.3rem] font-medium ">
                1
              </div>
            </div>{" "}
            <div
              // onClick={incrymentQty}
              className=" grid place-items-center
                     cursor-pointer text-minimog-theme-title-color"
            >
              <BsPlus />
            </div>
          </div>
          <h3 className="minimog-theme-price-color">Subtotal : $29.00</h3>
        </div>
      </div>
      <div className="row  flex  justify-center  md:justify-end mt-5">
        <div className="div w-full md:w-[30%] shadow-lg md:p-6 p-3 pt-3">
          <table class="border-collapse  w-full  table-auto    text-sm">
            <thead>
              <tr>
                <th
                  class="border-b 
                     text-center border-r space-y-2 
                      text-[16px] font-[jost] dark:border-slate-600  p-4 pl-8 pt-0 pb-3 text-black dark:text-slate-200 "
                >
                  <FontAwesomeIcon
                    className="text-[16px] text-minimog-theme-default-title-color"
                    icon={faPencil}
                  />
                  <h3
                    className="text-[16px] font-[500]
                       text-minimog-theme-title-color"
                  >
                    Note
                  </h3>
                </th>
                <th
                  class="border-b border-r 
                    text-[16px]  dark:border-slate-600 
                     p-4 pt-0 pb-3
                      text-black space-y-2
                       dark:text-slate-200 text-center"
                >
                  <FontAwesomeIcon
                    className="text-[16px] text-minimog-theme-default-title-color"
                    icon={faTruckFast}
                  />
                  <h3
                    className="text-[16px] font-[500]
                       text-minimog-theme-title-color"
                  >
                    Shipping
                  </h3>
                </th>
                <th class="border-b space-y-2  text-[16px]  dark:border-slate-600  p-4 pr-8 pt-0 pb-3 text-black dark:text-slate-200 text-center">
                  <FontAwesomeIcon
                    className="text-[16px] text-minimog-theme-default-title-color"
                    icon={faTicket}
                  />
                  <h3
                    className="text-[16px] font-[500]
                       text-minimog-theme-title-color"
                  >
                    Coupon
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody class="  bg-white dark:bg-slate-800 space-y-4">
              <tr>
                <td
                  class="border-b
                 flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-4  text-slate-500 dark:text-slate-400"
                >
                  <h3 className="text-[16px] text-minimog-theme-default-title-color ">
                    Subtotal
                  </h3>
                </td>
                <td
                  class="border-b border-slate-100
                 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400"
                >
                  <h3 className="text-[16px] text-black "></h3>
                </td>

                <td
                  class="border-b border-slate-100
                 dark:border-slate-700 pt-4 p-4 text-slate-500 dark:text-slate-400"
                >
                  <h3 className="text-[16px] text-right text-minimog-theme-title-color ">
                    $290.00
                  </h3>
                </td>
              </tr>
              <tr>
                <td
                  class="border-b flex space-x-5
                 border-slate-100 dark:border-slate-700 pt-4 p-4  text-slate-500 dark:text-slate-400"
                >
                  <h3 className="text-[16px]  text-minimog-theme-default-title-color ">
                    Shipping
                  </h3>
                </td>
                <td
                  class="border-b border-slate-100
                 dark:border-slate-700 pt-4 p-4 text-slate-500 dark:text-slate-400"
                >
                  <h3 className="text-[16px]  text-black "></h3>
                </td>

                <td
                  class="border-b border-slate-100
                 dark:border-slate-700 pt-4 p-4 text-slate-500 dark:text-slate-400"
                >
                  <h3 className="text-[16px] text-right text-minimog-theme-title-color ">
                    Flat rate: $10.00
                  </h3>
                </td>
              </tr>
              <tr>
                <td
                  class="border-b flex space-x-5
                 border-slate-100 dark:border-slate-700 pt-4 p-4 text-slate-500 dark:text-slate-400"
                >
                  <h3 className="text-[18px] text-minimog-theme-title-color font-[600] ">
                    Total
                  </h3>
                </td>
                <td
                  class="border-b border-slate-100
                 dark:border-slate-700 pt-4 p-4 text-slate-500 dark:text-slate-400"
                >
                  <h3 className="text-[16px] text-black "></h3>
                </td>

                <td
                  class="border-b border-slate-100
                 dark:border-slate-700 pt-4 p-4 text-slate-500 dark:text-slate-400"
                >
                  <h3 className="text-[18px] text-minimog-theme-title-color font-[600] text-right">
                    $10.00
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>
          <input
            type="button"
            value="Checkout"
            className="w-full bg-minimog-theme-checkoutbtn-bg-color text-minimog-theme-button-bg-title-color p-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
