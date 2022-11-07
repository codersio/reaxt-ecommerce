import React from "react";
import "./style.scss";
import "../../../Font/globalfont.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faClock,
  faPencil,
  faRemove,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Lafakawish() {
  return (
    <div className="container flex md:space-x-8 font-Rubik flex-col md:flex-row md:p-5 p-5">
      <div className=" md:block hidden row-desktop w-[70%] ">
        <div className="cart border  grid place-items-center p-5">
          <div className="card-cart flex w-full space-x-16 p-3">
            <div className="item grid place-items-center">
              <RiDeleteBinLine />
            </div>
            <div className="item">
              <img
                // className="-mt-[11px]"
                src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
                alt=""
              />
            </div>
            <div className="item flex w-[70%] justify-between ">
              <div className="cart-child space-y-2 grid place-items-center  ">
                <h3 className="  text-[#f2002d] text-[14px] ">
                  Bacon Cheeseburger
                </h3>
              </div>
            </div>
            {/* <div className="qty  w-[29%] h-[32%]  ">
              <div className="item ">
                <input
                  type="number"
                  name=""
                  value="1"
                  id=""
                  className="w-[50px] text-center border bg-[#f9f9f9] border-[#f1f1f1]"
                />
              </div>
            </div> */}
            <div className="item flex justify-between w-[25%] grid place-items-center ">
              <h3 className=" relative text-[16px] text-left text-[#888888] font-[500]">
                {" "}
                <span className="text-[11px] ">$</span>29.
                <span className="text-[14px] absolute">99</span>
              </h3>
            </div>
            <div className="item flex justify-between w-[35%] font-[Rubik] grid place-items-center">
              <p className=" font-[400] text-[16px] text-[#f2002d]">
                {" "}
                Add To cart
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row md:hidden block">
        <div className="image space-y-3 border">
          <div className="img relative">
            <img
              className="w-[100%] border rounded-lg"
              src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
              alt=""
            />
            <div className="absolute top-0 right-0 text-white grid place-items-center bg-[#222222] rounded-full w-[29px] h-[29px]">
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-[16px]  text-[#f2002d] ">Bacon Cheeseburger</h3>
          </div>
          <table className="w-full">
            <tbody class="bg-white  dark:bg-slate-800 space-y-4">
              <tr>
                <td class=" flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px]  text-[#666] ">Price</h3>
                </td>
                <td class=" border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px]  text-black "></h3>
                </td>

                <td class=" border-slate-100 text-right dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="-ml-3 relative right-4 text-[16px]  text-[#888888] font-[500]">
                    {" "}
                    <span className="text-[11px] ">$</span>29.
                    <span className="text-[14px] absolute">99</span>
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="text-center text-[#f2002d]">
            {" "}
            <h3>Add to Cart</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
