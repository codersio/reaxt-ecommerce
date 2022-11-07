import React, { useState } from "react";
import {
  faAngleLeft,
  faPen,
  faPencil,
  faTicket,
  faTractor,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Cosmetica() {
  const [ordersumm, setOrder] = useState(false);

  const Hndlorder = () => {
    setOrder(!ordersumm);
  };
  return (
    <div className="cosmetica-check md:flex font-Source ">
      <div className=" space-y-5  row md:w-[50%] md:p-8 p-2 border-r ">
        <div className="showorder">
          <span onClick={Hndlorder}>Show Order summery</span>
          <div
            className={
              ordersumm
                ? " md:hidden block row w-[100%] bg-[#E8F3F6] md:p-8 p-2"
                : "hidden"
            }
          >
            <div className=" md:p-6 p-2 w-[100%]">
              <div className="imcrt space-y-3">
                <div className="img flex justify-between ">
                  <div className="div flex space-x-5">
                    <img
                      className="w-[60px]"
                      src="https://minimog.thememove.com/wp-content/uploads/2021/12/product_fashion_15_a_1-80x106.jpg"
                      alt=""
                    />
                    <h3 className="mt-[2rem]">
                      Wool-blend Jacket <span> x1</span>
                    </h3>
                  </div>
                  <p className="mt-[2rem]">$29.00</p>
                </div>
                <hr className="border-[#666]" />
              </div>
              <table class="border-collapse w-full  table-auto    text-sm">
                <tbody class="   dark:bg-slate-800 space-y-4">
                  <tr>
                    <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                      <h3 className="text-[16px] text-[#666] ">Subtotal</h3>
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                      <h3 className="text-[16px] text-black "></h3>
                    </td>

                    <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                      <h3 className="text-[18px] font-[700] font-jost text-right text-black ">
                        $290.00
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                      <h3 className="text-[16px]  text-[#666] ">Total</h3>
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                      <h3 className="text-[16px]  text-black "></h3>
                    </td>

                    <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                      <h3 className="text-[16px] text-right text-black ">
                        Flat rate: $10.00
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                      <h3 className="text-[16px] text-[#666] ">Shipping</h3>
                    </td>
                    <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                      <h3 className="text-[16px] text-black "></h3>
                    </td>

                    <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                      <h3 className="text-[18px] font-[700] font-jost text-right text-black ">
                        $290.00
                      </h3>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="dic flex space-x-3 mt-5">
                <input
                  type="text"
                  value="Discount code"
                  className="border-[#d9d9d9] text-[#c8c8c8] rounded-md p-2 w-[80%]"
                />
                <input
                  type="button"
                  value="Apply"
                  className="bg-[#c8c8c8] p-2 rounded-md w-[20%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="headin-log md:flex md:justify-between">
          <div className="item">
            <h3 className="text-[#333] text-[18px]">Contact information</h3>
          </div>
          <div className="item">
            <p className="text-[#545454]">
              Already have an account?{" "}
              <span className="text-[#1990c6]">Log in</span>
            </p>
          </div>
        </div>
        <div className="form-group space-y-2">
          <input
            type="text"
            name=""
            placeholder="Country / region *"
            className="w-[100%] border-[#d9d9d9] rounded-md p-3"
            id=""
          />
          <div className="chck">
            <input type="checkbox" name="" id="" />{" "}
            <label htmlFor=""> Email me with news and offers</label>
          </div>
        </div>

        <h3>Shipping address</h3>
        <div className="for1 space-y-4">
          <div className="company space-y-3">
            <input
              type="text"
              name=""
              placeholder="Country / region *"
              className="w-[100%] border-[#d9d9d9] rounded-md p-3"
              id=""
            />
          </div>
          <div className="form-cls md:flex md:space-y-0 space-y-2 md:space-x-3 ">
            <div className="item w-[100%] space-y-3">
              {/* <label htmlFor="">First Name *</label> <br /> */}
              <input
                type="text"
                name=""
                placeholder="First name"
                className="w-[100%] border-[#d9d9d9] rounded-md p-3"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="Lirst name"
                className="w-[100%] border-[#d9d9d9] rounded-md p-3"
                id=""
              />
            </div>
          </div>
          <div className="address space-y-3">
            <input
              type="text"
              name=""
              placeholder="Address"
              className="w-[100%] border-[#d9d9d9] rounded-md p-3"
              id=""
            />
          </div>
          <div className="address space-y-3">
            <input
              type="text"
              name=""
              placeholder="Appartment , suit etc"
              className="w-[100%] border-[#d9d9d9] rounded-md p-3"
              id=""
            />
          </div>

          <div className="form-cls md:flex md:space-y-0 space-y-3 md:space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="City"
                className="w-[100%] border-[#d9d9d9] rounded-md p-3"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="State"
                className="w-[100%] border-[#d9d9d9] rounded-md p-3"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <input
                type="text"
                name=""
                placeholder="Pincode"
                className="w-[100%] border-[#d9d9d9] rounded-md p-3"
                id=""
              />
            </div>
          </div>
        </div>
        <div className="chck">
          <input type="checkbox" name="" id="" />{" "}
          <label htmlFor=""> Save this information for next time</label>
        </div>

        <div className="shop md:flex md:justify-between">
          <div className="flex space-x-1">
            <FontAwesomeIcon icon={faAngleLeft} className="mt-1" />{" "}
            <h3 className="text-[#1990c6]">Return to cart</h3>
          </div>
          <input
            type="button"
            value="Continue to Shopping"
            className="bg-[#23314e] md:w-[30%] w-[100%] 
          p-4 rounded-md text-white"
          />
        </div>
      </div>

      <div className="row md:block hidden  w-[50%] bg-[#E8F3F6] md:p-8 p-2 top-0 bottom-0 md:absolute right-0">
        <div className=" md:p-6 p-2 w-[80%]">
          <div className="imcrt space-y-3">
            <div className="img flex justify-between ">
              <div className="div flex space-x-5">
                <div className="image relative">
                  <img
                    className="w-[70px] rounded-lg border"
                    src="https://minimog.thememove.com/wp-content/uploads/2021/12/product_fashion_15_a_1-80x106.jpg"
                    alt=""
                  />
                  <h3 className="bg-gray-500 -top-2 absolute right-0 text-white w-[20px] grid place-items-center text-xs h-[20px] rounded-full text-center">
                    1
                  </h3>
                </div>
                <h3 className="mt-[2rem] text-[#2e3131]">
                  Wool-blend Jacket <span> x1</span>
                </h3>
              </div>
              <p className="mt-[2rem]">$29.00</p>
            </div>
            <hr className="border-[#d9d9d9]" />
          </div>

          <div className="dic flex space-x-3 mt-5">
            <input
              type="text"
              value="Discount code"
              className="border-[#d9d9d9] text-[#c8c8c8] rounded-md p-2 w-[80%]"
            />
            <input
              type="button"
              value="Apply"
              className="bg-[#c8c8c8] p-2 rounded-md w-[20%]"
            />
          </div>
          <hr className="border-[#d9d9d9] mt-5" />
          <table class="border-collapse w-full  table-auto    text-sm">
            <tbody class="   dark:bg-slate-800 space-y-4">
              <tr>
                <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-[#666] ">Subtotal</h3>
                </td>
                <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-black "></h3>
                </td>

                <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[14px] font-[600] font-jost text-right text-[#2e3131] ">
                    $290.00
                  </h3>
                </td>
              </tr>
              <tr>
                <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px]  text-[#666] ">Shipping</h3>
                </td>
                <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px]  text-black "></h3>
                </td>

                <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className=" text-right text-[#686d6f] text-[13px]">
                    Calculated at next step
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <hr className="border-[#d9d9d9]" />
                </td>
                <td>
                  <hr className="border-[#d9d9d9]" />
                </td>
                <td>
                  <hr className="border-[#d9d9d9]" />
                </td>
              </tr>
              <tr>
                <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-[#666] ">Total</h3>
                </td>
                <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-black "></h3>
                </td>

                <td class="border-b  pt-4 p-2 ">
                  <h3 className="text-[24px] font-[700] font-jost text-right text-[#2e3131] ">
                    $290.00
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <div className="w-full space-y-2">
            <input
              type="text"
              name=""
              placeholder="Coupon"
              className="w-full"
              id=""
            />
            <input
              type="button"
              value="Checkout"
              className="w-full bg-black text-white p-2 rounded-md"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
