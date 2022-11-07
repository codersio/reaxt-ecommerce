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
export default function LafkaCart() {
  return (
    <div className="container flex md:space-x-8 font-lafaka-theme-font flex-col md:flex-row md:p-5 p-5">
      <div className=" md:block hidden row-desktop w-[60%] ">
        <div className="cart border bg-lafaka-theme-default-bg-color grid place-items-center p-5">
          <div className="card-cart flex w-full space-x-16 p-3">
            <div className="item grid place-items-center text-lafaka-theme-title-color">
              <RiDeleteBinLine />
            </div>
            <div className="item w-[24%] border">
              <img
                // className="w-[90px]"
                src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger17-440x440.jpg"
                alt=""
              />
            </div>
            <div className="item flex w-[70%] justify-between ">
              <div className="cart-child space-y-2 grid place-items-center  ">
                <h3 className="  text-lafaka-theme-title-color text-[14px] ">
                  Bacon Cheeseburger
                </h3>
              </div>
            </div>
            <div className="qty  w-[29%] h-[32%]  ">
              <div className="item text-center grid place-items-center">
                <input
                  type="number"
                  name=""
                  value="1"
                  id=""
                  className="w-[50px] 
                  text-center border bg-lafaka-theme-default-bg-color
                    text-lafaka-theme-title-color border-lafaka-theme-border-color"
                />
              </div>
            </div>
            <div className="item  w-[25%] grid place-items-center">
              <p className=" font-[700] text-[14px] text-lafaka-theme-price-bg-color">
                {" "}
                <span className="text-[11.2px] font-[700]">$</span>26.99
              </p>
            </div>
            <div className="item grid place-items-center  w-[25%] ">
              <p className=" font-[700] text-[14px] text-lafaka-theme-price-bg-color">
                {" "}
                <span className="text-[11.2px] font-[700]">$</span>26.99
              </p>
            </div>
          </div>
        </div>
        <div className="row  flex  justify-center  md:justify-end">
          <div className="div w-full md:flex-row flex-col  md:w-[35%] md:justify-end flex space-y-3 md:space-y-0 md:space-x-4 p-5">
            <input
              type="button"
              value="UPDATE CART"
              className=" bg-[#333] font-[500] text-white  text-[13px] w-full md:w-[70%] rounded-3xl p-3"
            />
          </div>
        </div>
      </div>
      <div className="row md:hidden block">
        <div className="image space-y-4">
          <div className="img relative">
            <img
              className="w-[100%] border rounded-lg"
              src="https://demo1.leotheme.com/leo_wooden_demo/286-cart_default/blouse.jpg"
              alt=""
            />
            <div className="absolute bg-white shadow-xl top-0 right-0 w-[35px] h-[35px] rounded-full grid place-items-center">
              <RiDeleteBinLine />
            </div>
          </div>
          <table className="w-full">
            <tbody class="bg-white  dark:bg-slate-800 space-y-4">
              <tr>
                <td class=" flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-lafaka-theme-default-title-color ">
                    Product
                  </h3>
                </td>
                <td class=" dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-lafaka-theme-default-price-color "></h3>
                </td>

                <td class=" dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-right text-lafaka-theme-default-price-color ">
                    Bacon Cheeseburger
                  </h3>
                </td>
              </tr>
              <tr>
                <td class=" flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px]  text-lafaka-theme-default-title-color ">
                    Price
                  </h3>
                </td>
                <td class=" border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px]  text-lafaka-theme-default-price-color "></h3>
                </td>

                <td class=" border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-right text-lafaka-theme-default-price-color ">
                    $10.00
                  </h3>
                </td>
              </tr>
              <tr>
                <td class=" flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px]  text-lafaka-theme-default-title-color ">
                    Quantity
                  </h3>
                </td>
                <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px]  text-lafaka-theme-default-price-color "></h3>
                </td>

                <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-right text-lafaka-theme-default-price-color ">
                    <input
                      type="number"
                      name=""
                      value="1"
                      id=""
                      className="w-[50px] text-center border bg-[#f9f9f9] border-[#f1f1f1]"
                    />
                  </h3>
                </td>
              </tr>

              <tr>
                <td class=" flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px]  font-[500]  text-[#333] ">
                    Subtotal
                  </h3>
                </td>
                <td class=" border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px]  text-lafaka-theme-default-price-color "></h3>
                </td>

                <td class=" border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-right text-lafaka-theme-default-price-color ">
                    $589
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>

          <input
            type="button"
            value="UPDATE CART"
            className=" bg-lafaka-theme-button-bg-color mt-5 text-lafaka-theme-button-bg-title-color  text-[13px] w-full md:w-[100%] rounded-3xl p-3"
          />
        </div>
      </div>
      <div className="row w-full md:w-[35%] border p-4 space-y-6 md:mt-0 mt-5">
        <div className="utem text-[14px] border flex space-x-3 p-2 text-lafaka-theme-default-title-color">
          <div className="item border w-[40%] md:w-[20%] p-2 rounded-md h-[56px] text-center">
            <FontAwesomeIcon icon={faClock} />
            <p className=" md:text text-[9px]">40 min.</p>
          </div>
          <div className="item relative">
            <h3>Delivery from: Worldwide</h3>
            <p>
              To: Co Hwy FFF , 54016, Wisconsin, Wisconsin, United States (US)
            </p>
            <div className="absolute top-0 text-center right-0 rounded-full w-[20px] h-[20px] bg-lafaka-theme-edit-icon-bg-color">
              <FontAwesomeIcon
                className=" text-[10px] text-lafaka-theme-edit-icon-color "
                icon={faPencil}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between  p-3 border-b">
          <div className="h3 text-[14px] font-semibold text-lafaka-theme-title-color">
            CART TOTALS
          </div>
          <div className="price text-lafaka-theme-title-color">$110.00</div>
        </div>
        <table className="w-full">
          <tbody class="bg-white  dark:bg-slate-800 space-y-4">
            <tr>
              <td class=" flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-lafaka-theme-default-title-color ">
                  Subtotal
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-lafaka-theme-default-price-color "></h3>
              </td>

              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                <h3 className=" relative text-[16px] text-left text-lafaka-theme-default-price-color font-[500]">
                  {" "}
                  <span className="text-[11px] ">$</span>29.
                  <span className="text-[14px] absolute">99</span>
                </h3>
              </td>
            </tr>
            <tr>
              <td class=" flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px]  text-lafaka-theme-default-title-color ">
                  Total
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px]  text-lafaka-theme-default-price-color "></h3>
              </td>

              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                <h3 className=" relative text-[16px] text-left text-lafaka-theme-default-price-color font-[500]">
                  {" "}
                  <span className="text-[11px] ">$</span>29.
                  <span className="text-[14px] absolute">99</span>
                </h3>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="button block m-0 text-center ">
          <input
            type="button"
            value="Proceed to checkout"
            className="w-[100%] font-[600] rounded-3xl text-[13px] uppercase bg-lafaka-theme-cartbutton-bg-color text-lafaka-theme-cartbutton-title-color  p-2"
          />
        </div>
      </div>
    </div>
  );
}
