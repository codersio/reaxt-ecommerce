import React from "react";
import "./cosmetica.scss";
// import "../../../Font/globalfont.scss";
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
  faRemove,
  faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";
import { BiDollar } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
export default function Cosmetica() {
  return (
    <div className=" uppercase  w-[100vw] md:flex-row flex-col md:space-x-4 font-Montserrat md:p-2 p-5 md:space-y-0 space-y-4">
      <table className="w-[100%] md:flex hidden">
        <thead className="border-b ">
          <tr>
            <th className=" flex space-x-2 p-2">
              <div className="  bg-[#c2c2c2] w-[25px] h-[25px] rounded-full ">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-[#fff] text-[0.7rem]"
                />
              </div>
              <h3 className="mt-1  text-[#666666] font-[700] text-[10px]">
                YOUR FAVORITE PRODUCTS
              </h3>
            </th>
            <th className="p-2"></th>
            <th className="p-2">
              <div className="flex space-x-3">
                <div className="  bg-[#c2c2c2] w-[25px] h-[25px] rounded-full grid place-items-center">
                  <BiDollar className="text-[#fff] text-[1rem]" />
                </div>
                <h3 className="mt-1 text-[#666666] font-[700] text-[10px]">
                  Price
                </h3>
              </div>
            </th>
            <th className="p-2">
              <div className="flex space-x-3">
                <div className="  bg-[#c2c2c2] w-[25px] h-[25px] rounded-full grid place-items-center">
                  <RiDeleteBin6Line className="text-[#fff] text-[0.7rem]" />
                </div>
                <h3 className="mt-1 text-[#666]  text-[10px] font-[700] ">
                  Remove
                </h3>
              </div>
            </th>
            <th className="p-2">
              <div className="flex space-x-3">
                <div className="  bg-[#c2c2c2] w-[25px] h-[25px] rounded-full grid place-items-center">
                  <FaShoppingCart className="text-[#fff] text-[0.7rem]" />
                </div>
                <h3 className="mt-1 text-[#666] font-[700] text-[10px]">
                  Add To Cart
                </h3>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border-b">
            <td class="border-b  w-[14%] p-4">
              <div className="item ">
                <img
                  className=" border w-[80%]"
                  src="https://cdn.shopify.com/s/files/1/0511/8479/5845/products/11_03ae04d7-67a7-4e0c-9962-f459ab20b4fe.jpg?v=1605513321"
                  alt=""
                />
              </div>
            </td>
            <td className="w-[20%]">
              <div className="item grid place-items-center">
                <div className="div space-y-1">
                  <h3 className="text-[12px] capitalize text-[#222222] font-[600]">
                    Faxtex Product Sample
                  </h3>
                </div>
              </div>
            </td>
            <td className="w-[16%]">
              <div className=" font-[800] font-Poppins   text-[16px] text-[#ff7038]">
                $325.00
              </div>
            </td>
            <td className="w-[20%]">
              <div className="cart w-[80%] grid place-items-center  p-3   text-center text-[#444545]  rounded-sm border  font-[600]">
                <div className="flex   font-[600]  space-x-3 text-[10px]">
                  <div>
                    <RiDeleteBin6Line className="text-[#444545] text-[1rem]" />
                  </div>
                  <h3 className="text-[#444545] font-[700] text-[10px]">
                    remove
                  </h3>
                </div>
              </div>
            </td>
            <td className="w-[20%]">
              <div className=" grid w-[85%] place-items-center cart p-3  text-center rounded-sm bg-[#252525] text-white font-[600]">
                <div className="flex space-x-3 text-white text-[10px] font-[600]">
                  <div>
                    <FaShoppingCart className="text-[#fff] text-[1rem]" />
                  </div>
                  <h3>Add To Cart</h3>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="tem md:hidden space-x-2 flex ">
        <img
          className="w-[30%] rounded-sm border"
          src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
          alt=""
        />
        <div className="grid place-items-center">
          <h3 className="text-[12px] capitalize text-center text-[#222] font-[500]">
            Faxtex Product Sample
          </h3>
        </div>
      </div>
      <div className="md:hidden p-2 font-[800] text-left   text-[16px] text-[#ff7038]">
        $325.00
      </div>
      <div className="md:hidden p-2 space-y-2 grid place-items-center ">
        <div className="cart w-[100%] grid place-items-center  p-3   text-center text-[#444545]  rounded-sm border  font-[600]">
          <div className="flex   font-[600]  space-x-3 text-[10px]">
            <div>
              <RiDeleteBin6Line className="text-[#444545] text-[1rem]" />
            </div>
            <h3 className="text-[#444545] font-[700] text-[10px]">remove</h3>
          </div>
        </div>
        <div className=" grid w-[100%] place-items-center cart p-3  text-center rounded-sm bg-[#252525] text-white font-[600]">
          <div className="flex space-x-3 text-white text-[10px] font-[600]">
            <div>
              <FaShoppingCart className="text-[#fff] text-[1rem]" />
            </div>
            <h3>Add To Cart</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
