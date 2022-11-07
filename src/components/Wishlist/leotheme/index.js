import React from "react";
// import "./style.scss";
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
export default function Leotheme() {
  return (
    <div className=" uppercase flex w-[100vw] md:flex-row flex-col md:space-x-4 font-Poppins md:p-2 p-5 md:space-y-0 space-y-14">
      <div className="row  md:w-[100%] md:border      ">
        <table class=" md:inline-table hidden border-collapse table-auto w-full text-sm">
          <thead className=" rounded-3xl p-2 text-[14px] text-[#666]">
            <tr>
              <th class="border-b   dark:border-slate-600  p-4  pt-5  text-black dark:text-slate-200 text-left">
                Name
              </th>

              <th class="border-b   dark:border-slate-600  p-4  pt-5  text-black dark:text-slate-200 text-left">
                <h3 className=" ">Quantity</h3>
              </th>
              <th class="border-b   dark:border-slate-600  p-4  pt-5  text-black dark:text-slate-200 text-left">
                <h3 className=" ">Viewed</h3>
              </th>
              <th class="border-b   dark:border-slate-600  p-4  pt-5  text-black dark:text-slate-200 text-left">
                <h3 className=" ">Created</h3>
              </th>
              <th class="border-b   dark:border-slate-600  p-4  pt-5  text-black dark:text-slate-200 text-left">
                <h3 className=" ">Direct Link</h3>
              </th>
              <th class="border-b   dark:border-slate-600  p-4  pt-5  text-black dark:text-slate-200 text-left">
                <h3 className=" ">Default</h3>
              </th>
              <th class="border-b   dark:border-slate-600  p-4  pt-5  text-black dark:text-slate-200 text-left">
                <h3 className=" ">Delete</h3>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b  border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <h3>My wishlist</h3>
              </td>
              <td class="border-b  border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <h3>1</h3>
              </td>
              <td class="border-b  border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <h3>0</h3>
              </td>
              <td class="border-b  border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <h3>2022-09-14 06:12:11</h3>
              </td>
              <td class="border-b  border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <h3>View</h3>
              </td>
              <td class="border-b  border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <input type="checkbox" name="" id="" />
              </td>
              <td class="border-b  border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <FontAwesomeIcon icon={faRemove} />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="grid grid-cols-4">
          <div className="row space-y-3 text-center">
            <div className="image relative">
              <img
                src="https://demo1.leotheme.com/leo_wooden_demo/288-home_default/printed-dress.jpg"
                alt=""
              />
              <div
                className=" grid place-items-center text-white
                text-[14px] top-0 right-0 remove absolute bg-[#373839] w-[50px]
              h-[50px]"
              >
                <FontAwesomeIcon icon={faRemove} />
              </div>
            </div>
            <h3 className="text-[16px]">Occaecat Cupi</h3>
            <p className="text-[#999] text-[14px] mt-4">Quantity</p>

            <input
              type="text"
              value="1"
              className="text-[#999] text-[14px] w-full border-none bg-[#ebebeb] text-center"
            />
            <p>Priority</p>
            <select
              name=""
              id=""
              className="text-[#999] text-[14px] w-full border-none bg-[#ebebeb] text-center"
            >
              <option value="">Medium</option>
            </select>
            <input
              type="text"
              placeholder="Save"
              className="w-full text-center bg-[#373839]"
            />
          </div>
        </div>
        <div className="tem md:hidden space-x-2 flex p-5">
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
          <div className="cart grid place-items-center  p-3 w-[100%] text-center text-[#444545]  rounded-sm border  font-[600]">
            <div className="flex   font-[600]  space-x-3 text-[10px]">
              <div>
                <FontAwesomeIcon icon={faRemove} />
              </div>
              <h3>remove</h3>
            </div>
          </div>
          <div className=" grid place-items-center cart p-3 w-[100%] text-center rounded-sm bg-[#252525] text-white font-[600]">
            <div className="flex space-x-3 text-white text-[10px] font-[600]">
              <div>
                <FontAwesomeIcon icon={faCartFlatbed} />
              </div>
              <h3>Add To Cart</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
