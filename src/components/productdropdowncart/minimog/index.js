import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { HiOutlineMinus } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import {Link} from "gatsby"
import "./style.scss";
import {
  faPen,
  faPencil,
  faTicket,
  faTractor,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "../../../Font/globalfont.scss";
export default function Minimog({ cartmodal, seCart, Hndlecartmodal }) {
  // const [cartmodal, seCart] = useState(true);
  // const Handke = () => {
  //   seCart(!cartmodal);
  // };
  return (
    <>
      {cartmodal ? (
        <div
          className={
            cartmodal
              ? "modal-cart z-10 transition-all duration-100 bg-black bg-opacity-75 fixed top-0 right-0 bottom-0 left-0"
              : "hidden -right-28"
          }
        >
          <div
            className={
              cartmodal
                ? "transition-all delay-100 duration-800 cart-modal-body absolute p-5 top-0 right-0 space-y-4 bottom-0 bg-white w-[27%]"
                : "-right-28"
            }
          >
            <div className="flex justify-between">
              <h3 className="font-[500] text-[24px] text-minimog-theme-title-color">
                Shopping Cart
              </h3>
              <GrClose onClick={Hndlecartmodal} />
            </div>
            <h3 className="text-[16px] text-minimog-theme-title-color">
              {" "}
              🔥 These products are limited, checkout within{" "}
              <span className="font-[600]">01m 07s</span>
            </h3>
            <h3 className="text-minimog-theme-title-color">
              Buy $187.00 more to enjoy{" "}
              <span className="text-[18px] font-[700] text-minimog-theme-title-color">
                FREE Shipping
              </span>
            </h3>
            <div className=" relative cartmodal-hr w-full h-[7px] bg-minimog-theme-default-bg-color rounded-md">
              <div className="absolute border -top-[0.8rem] left-[2rem]
                grid place-items-center
                 rounded-full w-[30px]
                  h-[30px] bg-white border-minimog-theme-prgressbaractive-bg-color">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-minimog-theme-prgressbaractive-bg-color"
                />
              </div>
            </div>
            <div className="h-1"></div>
            <div className="flex space-x-3 ">
              <div className="tem border">
                <img
                  className=""
                  src="https://minimog.thememove.com/wp-content/uploads/2021/12/product_fashion_12_a_1-108x144.jpg"
                  alt=""
                />
              </div>
              <div className="item  ">
                <h3 className="text-[16px] text-minimog-theme-title-color ">
                  Wool-blend Jacket
                </h3>
                <h3 className="text-minimog-theme-title-color">
                  {" "}
                  <span className="text-[14px] text-minimog-theme-title-color font-semibold">
                    Color:
                  </span>{" "}
                  Light Blue
                </h3>
                <h3 className="text-minimog-theme-title-color">
                  <span className="text-[14px] text-minimog-theme-title-color font-semibold">
                    Size:
                  </span>{" "}
                  M
                </h3>
                <h3 className="text-minimog-theme-title-color">$13.00</h3>

                <div className="flex space-x-5">
                  <div
                    className="   border-minimog-theme-button-qty-text-color mt-3
                   rounded-md bg-minimog-theme-default-bg-color bottom-2 w-[55%]
                     px-3 h-[41px]    
                       text-minimog-theme-button-qty-text-color   flex text-xl   leading-9 
                     justify-between text-center   "
                    // onClick={ClickButton}
                  >
                    <div
                      className=" grid place-items-center cursor-pointer   bottom-4 text-[0.9rem]  "
                      // style={{ marginTop: "-8px" }}
                    >
                     <HiOutlineMinus/>
                    </div>
                    <div
                      className="shrink block
                    w-16 text-minimog-theme-button-qty-text-color"
                    >
                      <div
                        className=" grid place-items-center
                     text-[1rem] mt-[0.3rem] font-medium "
                      >
                        <h3 className="">1</h3>
                      </div>
                    </div>{" "}
                    <div
                      // onClick={incrymentQty}
                      className=" grid place-items-center
                    cursor-pointer font-semibold "
                    >
                      <BsPlus/>
                    </div>
                  </div>
                  <p
                    className="text-[16px] text-minimog-theme-title-color 
                font-medium mt-[1.5rem]"
                  >
                    Remove
                  </p>
                </div>
              </div>
            </div>

            <div className="row  bg-[#f7f7f7] absolute bottom-0 left-0 right-0 p-2  justify-center  ">
              <div className="div md:w-[100%]  ">
                <table class="border-collapse bg-[#f7f7f7] w-full  table-auto    text-sm">
                  <thead>
                    <tr>
                      <th
                        class="border-b bg-[#f7f7f7]
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
                      <td class="border-b
                      flex space-x-5
                       border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                        <h3 className="text-[16px] text-minimog-theme-default-title-color ">
                          Subtotal
                        </h3>
                      </td>
                      <td class="border-b
                       border-slate-100
                        dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                        <h3 className="text-[16px] text-black "></h3>
                      </td>

                      <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                        <h3 className="text-[16px] text-right text-minimog-theme-title-color ">
                          $290.00
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                        <h3 className="text-[16px]  text-minimog-theme-default-title-color ">
                          Shipping
                        </h3>
                      </td>
                      <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                        <h3 className="text-[16px]  text-black "></h3>
                      </td>

                      <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                        <h3 className="text-[16px] text-right text-minimog-theme-title-color ">
                          Flat rate: $10.00
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                        <h3 className="text-[18px] text-minimog-theme-title-color font-[600] ">
                          Total
                        </h3>
                      </td>
                      <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                        <h3 className="text-[16px] text-black "></h3>
                      </td>

                      <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
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
                  className="w-full bg-minimog-theme-checkoutbtn-bg-color
                   text-minimog-theme-button-bg-title-color p-2 rounded-md"
                />
                <div className="underline grid place-items-center py-2"><a >
                  <Link to="/Minimogtheme/mcartpage"> View Cart</Link>
                 </a></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" hidden minimog w-[100vw] font-minimog-theme-font">
          <div className="grid place-items-center h-[100vh]">
            {/* <button onClick={Handke} className="bg-black  text-white p-5">
              click me
            </button> */}
          </div>

          <div
            className={
              cartmodal
                ? "modal-cart transition-all duration-100 bg-black bg-opacity-75 absolute top-0 right-0 bottom-0 left-0"
                : "hidden -right-28"
            }
          >
            <div
              className={
                cartmodal
                  ? "transition-all delay-100 duration-800 cart-modal-body absolute p-5 top-0 right-0 space-y-4 bottom-0 bg-white w-[27%]"
                  : "-right-28"
              }
            >
              <div className="flex justify-between">
                <h3 className="font-[500] text-[24px] text-minimog-theme-title-color">
                  Shopping Cart
                </h3>
                <GrClose onClick={Hndlecartmodal} />
              </div>
              <h3 className="text-[16px] text-minimog-theme-title-color">
                {" "}
                🔥 These products are limited, checkout within{" "}
                <span className="font-[600]">01m 07s</span>
              </h3>
              <h3 className="text-minimog-theme-title-color">
                Buy $187.00 more to enjoy{" "}
                <span className="text-[18px] font-[700] text-minimog-theme-title-color">
                  FREE Shipping
                </span>
              </h3>
              <div className=" relative cartmodal-hr w-full h-[7px] bg-minimog-theme-default-bg-color rounded-md">
                <div className="absolute border -top-[0.8rem] left-[2rem]  grid place-items-center rounded-full w-[30px] h-[30px] bg-white border-minimog-theme-prgressbaractive-bg-color">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-minimog-theme-prgressbaractive-bg-color"
                  />
                </div>
              </div>
              <div className="h-1"></div>
              <div className="flex space-x-3 ">
                <div className="tem border">
                  <img
                    className=""
                    src="https://minimog.thememove.com/wp-content/uploads/2021/12/product_fashion_12_a_1-108x144.jpg"
                    alt=""
                  />
                </div>
                <div className="item  ">
                  <h3 className="text-[16px] text-minimog-theme-title-color font-[500]">
                    Wool-blend Jacket
                  </h3>
                  <h3 className="text-minimog-theme-title-color">
                    {" "}
                    <span className="text-[14px] text-minimog-theme-title-color font-semibold">
                      Color:
                    </span>{" "}
                    Light Blue
                  </h3>
                  <h3 className="text-minimog-theme-title-color">
                    <span className="text-[14px] text-minimog-theme-title-color font-semibold">
                      Size:
                    </span>{" "}
                    M
                  </h3>
                  <h3 className="text-minimog-theme-title-color">$13.00</h3>

                  <div className="flex space-x-5">
                    <div
                      className="   border-minimog-theme-button-bg-color mt-3
                   rounded-md bg-minimog-theme-default-bg-color bottom-2 w-[55%]
                     px-3 h-[41px]    
                       text-minimog-theme-button-qty-text-color   flex text-xl   leading-9 
                     justify-between text-center   "
                      // onClick={ClickButton}
                    >
                      <div
                        className=" -mt-2 cursor-pointer   bottom-4 text-[2rem] grid place-items-center "
                        // style={{ marginTop: "-8px" }}
                      >
                        -
                      </div>
                      <div
                        className="shrink block
                    w-16 text-minimog-theme-button-qty-text-color"
                      >
                        <div
                          className="block m-auto
                     text-[1rem] mt-[0.3rem] font-medium "
                        >
                          <h3 className="-mt-1">1</h3>
                        </div>
                      </div>{" "}
                      <div
                        // onClick={incrymentQty}
                        className="disabled 
                    cursor-pointer font-semibold "
                      >
                        +
                      </div>
                    </div>
                    <p
                      className="text-[16px] text-minimog-theme-title-color 
                font-medium mt-[1.5rem]"
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>

              <div className="row  bg-[#f7f7f7] absolute bottom-0 left-0 right-0 p-2  justify-center  ">
                <div className="div md:w-[100%] shadow-lg ">
                  <table class="border-collapse bg-[#f7f7f7] w-full  table-auto    text-sm">
                    <thead>
                      <tr>
                        <th
                          class="border-b bg-[#f7f7f7]
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
                        <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                          <h3 className="text-[16px] text-minimog-theme-default-title-color ">
                            Subtotal
                          </h3>
                        </td>
                        <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                          <h3 className="text-[16px] text-black "></h3>
                        </td>

                        <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                          <h3 className="text-[16px] text-right text-minimog-theme-title-color ">
                            $290.00
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                          <h3 className="text-[16px]  text-minimog-theme-default-title-color ">
                            Shipping
                          </h3>
                        </td>
                        <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                          <h3 className="text-[16px]  text-black "></h3>
                        </td>

                        <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                          <h3 className="text-[16px] text-right text-minimog-theme-title-color ">
                            Flat rate: $10.00
                          </h3>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                          <h3 className="text-[18px] text-minimog-theme-title-color font-[600] ">
                            Total
                          </h3>
                        </td>
                        <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                          <h3 className="text-[16px] text-black "></h3>
                        </td>

                        <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
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
                    className="w-full bg-minimog-theme-checkoutbtn-bg-color text-minimog-theme-button-title-color p-3 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
