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
} from "@fortawesome/free-solid-svg-icons";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Nestwishlist() {
  return (
    <div className=" flex w-[100vw] md:flex-row flex-col md:space-x-4 font-Quicksand md:p-2 p-5 md:space-y-0 space-y-14">
      <div className="row  md:w-[100%] border      ">

        <table class=" md:inline-table hidden border-collapse table-auto w-full text-sm">
          <thead className="bg-[#ececec] rounded-3xl p-2">
            <tr>

              <div className="description">
                <h1>heel</h1>

              </div>


              <th class="border-b text-[16px] font-[700] dark:border-slate-600  p-4  pt-5  text-[#253d4e] dark:text-slate-200 text-left">
                <input type="checkbox" name="" id="" />
              </th>
              <th class="border-b text-[16px] font-[700] dark:border-slate-600  p-4  pt-5  text-[#253d4e] dark:text-slate-200 text-left">
                Product
              </th>

              <th class="border-b text-[16px] font-[700] dark:border-slate-600  p-4  pt-5  text-[#253d4e] dark:text-slate-200 text-left">
                Price
              </th>
              <th class="border-b text-[16px] font-[700] dark:border-slate-600  p-4  pt-5  text-[#253d4e] dark:text-slate-200 text-left">
                Stock Status
              </th>
              <th class="border-b text-[16px] font-[700] dark:border-slate-600  p-4  pt-5  text-[#253d4e] dark:text-slate-200 text-left">
                Action
              </th>
              <th class="border-b text-[16px] font-[700] dark:border-slate-600  p-4  pt-5  text-[#253d4e] dark:text-slate-200 text-left">
                Remove
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
              <td class="border-b  space-x-5 border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <input type="checkbox" name="" id="" />
              </td>
              <td class="border-b flex space-x-9 border-slate-100 dark:border-slate-700 p-4  text-slate-500 dark:text-slate-400">
                <div className="item">
                  <img
                    className=" rounded-2xl"
                    src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
                    alt=""
                  />
                </div>
                <div className="item grid place-items-center">
                  <div className="div space-y-1">
                    <h3 className="text-[16px] text-[#3bb77e] font-[600]">
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
                <h3 className=" font-[800]   text-[24px] text-[#3bb77e]">
                  $2.51
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                <div className="cart rounded-md  p-2 w-[53%] text-center text-[#3bb77e]   bg-[#def9ec]  font-[600]">
                  InStock
                </div>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <div
                  className="cart p-2 w-[58%] text-center 
                rounded-sm bg-[#3bb77e] text-white font-[600]"
                >
                  Add To Cart
                </div>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <RiDeleteBinLine />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="tem md:hidden block pt-[3.25rem]">
          <img
            className="w-[50%] block m-auto border rounded-xl"
            src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
            alt=""
          />
        </div>
        <div className="item space-y-8 md:hidden block mt-5">
          <div>
            <h3 className="text-[16px] text-center text-[#3bb77e] font-[600]">
              Field Roast Chao Cheese Creamy Original
            </h3>
            <div className="star  flex space-x-2 text-center  justify-center">
              <div className="text-[0.8rem] space-x-1 text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="rive text-slate-300">(32 reviews)</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="price ">
              <div className="item flex justify-between w-[70%]">
                <h3 className="text-[14px] text-[#253d4e] font-[800]">Price</h3>
                <h3 className=" font-[800] text-cener  text-[34px] text-[#3bb77e]">
                  $2.51
                </h3>
              </div>
            </div>
            <div className="price ">
              <div className="item flex justify-between w-[70%]">
                <h3 className="text-[14px] text-[#253d4e] font-[800]">Stock</h3>
                <div className="rounded-md cart ml-12  p-[0.2rem] w-[32%] text-center text-[#3bb77e]   bg-[#def9ec]  font-[600]">
                  InStock
                </div>
              </div>
            </div>
            <div className="price ">
              <div className="item flex justify-between w-[55%]">
                <h3 className="text-[14px] text-[#253d4e] font-[800]">Cart</h3>
                <div
                  className=" p-3 text-[12px] cart  
              md:static absolute 
              w-[32%] left-[11rem]  md:w-[58%] text-center rounded-md bg-[#3bb77e] text-white font-[600]"
                >
                  Add To Cart
                </div>
              </div>
            </div>
            <div className="remove ">
              <div className="item relative mt-[2rem] flex justify-between w-[70%]">
                <h3 className="text-[14px] text-[#253d4e] font-[800]">
                  Remove
                </h3>
                <RiDeleteBinLine className=" absolute left-[13rem]" />
              </div>
            </div>
            <div className="w-[5px] h-[0.5rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
