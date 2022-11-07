import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa0,
  faGreaterThan,
  faChevronRight,
  faClock,
  faChevronLeft,
  faAngleRight,
  faAngleLeft,
  faLessThan,
  faAngleDown,
  faAngleUp,
  faStar,
  faHeart,
  faTrash,
  faArrowRightFromFile,
  faArrowRightFromBracket,
  faArrowLeftLong,
  faArrowRotateBack,
} from "@fortawesome/free-solid-svg-icons";
export default function Alithemes() {
  return (
    <div className=" flex w-[100vw] md:flex-row flex-col md:space-x-4 font-nest-theme-font md:p-2 p-5 md:space-y-0 space-y-14">
      <div className="row  md:w-[100%] border      ">
        <table class=" md:inline-table hidden border-collapse table-auto w-full text-sm">
          <thead className="bg-[#ececec] p-2">
            <tr>
              <th
                class="border-b text-[16px]
               font-semibold dark:border-slate-600  p-4  pt-5  text-nest-theme-tableheading-title-color dark:text-slate-200 text-left"
              >
                <input type="checkbox" name="" id="" />
              </th>
              <th
                class="border-b text-[16px]
               font-semibold dark:border-slate-600  p-4  pt-5  text-nest-theme-tableheading-title-color dark:text-slate-200 text-left"
              >
                Product
              </th>

              <th
                class="border-b text-[16px]
               font-semibold dark:border-slate-600  p-4  pt-5  text-nest-theme-tableheading-title-color dark:text-slate-200 text-left"
              >
                Unit Price
              </th>
              <th
                class="border-b text-[16px]
               font-semibold dark:border-slate-600  p-4  pt-5  text-nest-theme-tableheading-title-color dark:text-slate-200 text-left"
              >
                Quantity
              </th>
              <th
                class="border-b text-[16px] font-semibold dark:border-slate-600  p-4  pt-5 
               text-nest-theme-tableheading-title-color dark:text-slate-200 text-left"
              >
                Subtotal
              </th>
              <th
                class="border-b text-[16px] font-semibold dark:border-slate-600  p-4  pt-5 
               text-nest-theme-tableheading-title-color dark:text-slate-200 text-left"
              >
                Remove
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b  space-x-5 border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <input type="checkbox" name="" id="" />
              </td>
              <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <div className="item">
                  <img
                    className=" rounded-2xl"
                    src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
                    alt=""
                  />
                </div>
                <div className="item grid place-items-center">
                  <div className="div space-y-1">
                    <h3 className="text-[16px] text-nest-theme-title-color font-semibold">
                      Faxtex Product Sample
                    </h3>
                    <div className="star  flex space-x-3 ">
                      <div className="text-[0.8rem] space-x-2 text-yellow-400">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="rive text-slate-300">(32 reviews)</div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h3 className=" font-[Quicksand,sans-serif] font-semibold text-[24px] text-nest-theme-default-price-color">
                  $2.51
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                <div className="qty border-2 rounded-md p-[5px] border-[#3bb77e] h-[32%]  flex justify-between">
                  <div className="item grid place-items-center text-center">
                    <p className="ml-[1rem] text-[#3bb77e]">1</p>
                  </div>
                  <div className="item h-[39px] space-y-4">
                    <div className="w-[1.2rem] grid place-items-center   h-[15%] text-[#3bb77e]">
                      <FontAwesomeIcon
                        className="text-sm pt-[0.2rem]"
                        icon={faAngleUp}
                      />
                    </div>
                    <div className="w-[1.2rem] grid place-items-center  h-[15%] text-[#3bb77e]">
                      <FontAwesomeIcon className="text-sm" icon={faAngleDown} />
                    </div>
                  </div>
                </div>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h3 className=" font-[Quicksand,sans-serif] font-semibold text-[24px] text-nest-theme-price-color">
                  $2.51
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="tem md:hidden block">
          <img
            className="w-[100%] rounded-xl"
            src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
            alt=""
          />
        </div>
        <div className="item space-y-2 md:hidden block mt-5">
          <h3 className="text-[17px] text-nest-theme-title-color font-semibold text-center">
            Faxtex Product Sample
          </h3>
          <div className="star  flex space-x-3 text-center  justify-center">
            <div className="text-[0.8rem] space-x-2 text-yellow-400">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="rive text-slate-300">(32 reviews)</div>
          </div>
          <div className="price ">
            <div className="item flex justify-between w-[55%]">
              <h3 className="text-[14px]">Price</h3>
              <h3 className=" font-[Quicksand,sans-serif] font-semibold text-[24px] text-nest-theme-default-price-color">
                $2.51
              </h3>
            </div>
          </div>
          <div className="price ">
            <div className="item flex justify-between w-[55%]">
              <h3 className="text-[14px]">Stock</h3>
              <div
                className="qty border-2 rounded-md p-[5px] border-nest-theme-qty-border-button-color h-[32%] 
               flex justify-between"
              >
                <div className="item grid place-items-center text-center">
                  <p className="ml-[1rem] text-nest-theme-title-color">1</p>
                </div>
                <div className="item h-[39px] space-y-4">
                  <div className="w-[1.2rem] grid place-items-center   h-[15%] text-nest-theme-title-color">
                    <FontAwesomeIcon
                      className="text-sm pt-[0.2rem]"
                      icon={faAngleUp}
                    />
                  </div>
                  <div className="w-[1.2rem] grid place-items-center  h-[15%] text-nest-theme-title-color">
                    <FontAwesomeIcon className="text-sm" icon={faAngleDown} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="price ">
            <div className="item flex justify-between w-[55%]">
              <h3 className="text-[14px]">Price</h3>
              <h3 className=" font-[Quicksand,sans-serif] font-semibold text-[24px] text-nest-theme-price-color">
                $2.51
              </h3>
            </div>
          </div>
          <div className="remove ">
            <div className="item flex justify-between w-[55%]">
              <h3 className="text-[14px]">Remove</h3>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        </div>

        <div className="div w-full md:flex-row flex-col  md:w-[100%] md:justify-between flex space-y-3 md:space-y-0 md:space-x-4 p-5">
          <div className="icon flex justify-center  text-nest-theme-default-title-color rounded-md bg-nest-theme-button-default-bg-color w-full md:w-[30%]">
            <FontAwesomeIcon icon={faArrowLeftLong} className="mt-3" />
            <input
              type="button"
              value="  Continue Shopping"
              className=" text-[14px]  font-semibold  p-3"
            />
          </div>
          <div
            className="icon flex justify-center space-x-2 rounded-md font-semibold
           text-nest-theme-default-title-color bg-nest-theme-button-default-bg-color w-full md:w-[30%]  p-3"
          >
            <FontAwesomeIcon icon={faArrowRotateBack} />
            <input
              type="button"
              value="Update cart"
              className=" text-[14px] "
            />
          </div>
        </div>
      </div>
      <div className="row w-full md:w-[40%] border rounded-xl p-4 space-y-6 md:mt-0 mt-5">
        <div className="border  ">
          <div className="flex justify-between  p-3 border-b ">
            <div className="h3 text-nest-theme-default-title-color text-[16px] font-semibold font-[inter,Montserrat,HelveticaNeue,Helveti]">
              Subtotal
            </div>
            <div className="price text-nest-theme-price-color text-[24px] font-semibold">
              $110.00
            </div>
          </div>

          <div className="flex justify-between  p-3 border-b ">
            <hr className="border-black" />
          </div>
          <div className="flex border-t justify-between  p-3 border-b ">
            <div className="h3 text-nest-theme-default-title-color  text-[16px] font-semibold font-[inter,Montserrat,HelveticaNeue,Helveti]">
              Shipping
            </div>
            <div className="price text-nest-theme-shipping-title-color text-[20px] font-semibold">
              Free
            </div>
          </div>
          <div className="flex justify-between  p-3 border-b ">
            <hr className="border-black" />
          </div>
          <div className="flex border-t justify-between  p-3 border-b ">
            <div className="h3 text-nest-theme-default-title-color  text-[16px] font-semibold font-[inter,Montserrat,HelveticaNeue,Helveti]">
              Estimate for
            </div>
            <div className="price text-nest-theme-shipping-title-color text-[20px] font-semibold">
              United Kingdom
            </div>
          </div>
          <div className="flex justify-between  p-3 border-b ">
            <hr className="border-black" />
          </div>
          <div className="flex border-t justify-between  p-3 border-b ">
            <div className="h3 text-nest-theme-default-title-color text-[16px] font-semibold font-[inter,Montserrat,HelveticaNeue,Helveti]">
              Total
            </div>
            <div className="price text-nest-theme-price-color text-[24px] font-semibold">
              $457
            </div>
          </div>
        </div>

        <div className="button block m-0 text-center ">
          <div
            className="flex justify-center  w-[100%] rounded-md 
           uppercase bg-nest-theme-button-default-bg-color
            text-nest-theme-default-title-color font-[rubik] p-2"
          >
            <input
              type="button"
              value="Proceed to checkout"
              className=" rounded-md   text-nest-theme-default-title-color  p-2"
            />
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="mt-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
