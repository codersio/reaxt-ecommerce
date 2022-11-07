import React, { useState } from "react";
import {
  faCheese,
  faMoneyBillAlt,
  faMoneyCheck,
  faMoneyCheckAlt,
  faPen,
  faPencil,
  faTicket,
  faTractor,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import Couponcomponent from "../../couponcomponent";
import "./style.scss";
import "../../../Font/globalfont.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Minimogcheckout() {
  const [hidebt, setShowbt] = useState(false);
  const [coupons, setCoupon] = useState(false);
  const Hndcoupon = () => {
    setCoupon(!coupons);
  };
  const Handlebtn = () => {
    setShowbt(!hidebt);
  };
  return (
    <div className="containersss font-Jost p-5 md:flex md:space-x-9">
      <div className="row w-full md:w-[60%] space-y-4">
        <h3 className=" text-[#666] text-[14px] leading-3">
          Returning customer?{" "}
          <a href="" className="text-black font-[500] text-[16px]">
            Click here to login
          </a>
        </h3>
        <h3 className=" font-[600] text-[24px]">Billing Details</h3>
        <div className="for1 space-y-4">
          <div className="form-cls flex space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">First Name *</label> <br />
              <input
                type="text"
                name=""
                placeholder="First name"
                className="w-[100%] border-[#d2d2d2] text-[#7A7A7A] rounded-md p-"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">Last Name *</label> <br />
              <input
                type="text"
                name=""
                placeholder="Last name"
                className="w-[100%] border-[#d2d2d2] rounded-md p-"
                id=""
              />
            </div>
          </div>

          <div className="company space-y-3">
            <label htmlFor="">Company Name *</label> <br />
            <input
              type="text"
              name=""
              placeholder="Company name "
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="country space-y-3">
            <label htmlFor="">Country / Region * </label> <br />
            <select name="" id="" className="w-full rounded-md text-[#000] border-[#d2d2d2]">
              <option value="">United State</option>
            </select>
          </div>
          <div className="address space-y-3">
            <label htmlFor="">Street address * </label> <br />
            <input
              type="text"
              name=""
              placeholder="House number and street number"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
            <input
              type="text"
              name=""
              placeholder="House number and street number"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="city space-y-3">
            <label htmlFor="">Town / City *</label> <br />
            <input
              type="text"
              name=""
              placeholder="Town / City"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="state space-y-3">
            <label htmlFor="">State *</label> <br />
            <input
              type="text"
              name=""
              placeholder="State"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="zip space-y-3">
            <label htmlFor="">ZIP Code *</label> <br />
            <input
              type="text"
              name=""
              placeholder="Zip code"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="form-cls flex space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">Phone *</label> <br />
              <input
                type="text"
                name=""
                placeholder="phone"
                className="w-[100%] border-[#d2d2d2] rounded-md p-"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">Email Address *</label> <br />
              <input
                type="text"
                name=""
                placeholder="Email address"
                className="w-[100%] border-[#d2d2d2] rounded-md p-"
                id=""
              />
            </div>
          </div>
        </div>
        <div className="cl">
          <input type="checkbox" onClick={Handlebtn} name="" id="" />{" "}
          <label htmlFor="" className="mt-1">
            Ship to a different address?
          </label>
        </div>
        <div className={hidebt ? "for1 space-y-4 block" : "hidden"}>
          <div className="form-cls flex space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">First Name *</label> <br />
              <input
                type="text"
                name=""
                placeholder="first name"
                className="w-[100%] border-[#d2d2d2] rounded-md p-"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">First Name *</label> <br />
              <input
                type="text"
                name=""
                placeholder="first name"
                className="w-[100%] border-[#d2d2d2] rounded-md p-"
                id=""
              />
            </div>
          </div>

          <div className="company space-y-3">
            <label htmlFor="">Company Name *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="country space-y-3">
            <label htmlFor="">Country / Region * *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name space-y-3"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="address space-y-3">
            <label htmlFor="">Street address * *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name space-y-3"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="city space-y-3">
            <label htmlFor="">Town / City *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="state space-y-3">
            <label htmlFor="">State *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="zip space-y-3">
            <label htmlFor="">ZIP Code *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name"
              className="w-[100%] border-[#d2d2d2] rounded-md p-"
              id=""
            />
          </div>
          <div className="form-cls flex space-x-3 ">
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">First Name *</label> <br />
              <input
                type="text"
                name=""
                placeholder="first name"
                className="w-[100%] border-[#d2d2d2] rounded-md p-"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">First Name *</label> <br />
              <input
                type="text"
                name=""
                placeholder="first name"
                className="w-[100%] border-[#d2d2d2] rounded-md p-"
                id=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row w-full md:w-[40%]   space-y-9 mt-[5rem] ">
        {/* <h3 className="  text-[#666] text-[14px] leading-3">
          Returning customer?{" "}
          <a href="" className="text-black font-[500] text-[16px]">
            Click here to login
          </a>
        </h3> */}
        <div className="div md:w-[100%] shadow-lg p-5 space-y-9">
          <div className="space-y-3">
            <div className="div space-y-3">
              <h3 className="font-[500] text-[24px]">Order summary</h3>
              <hr className="border-[#666]" />
            </div>
            <div className="imcrt space-y-3">
              <div className="img flex justify-between ">
                <div className="div flex space-x-5">
                  <img
                    className="w-[60px] rounded-lg"
                    src="https://minimog.thememove.com/wp-content/uploads/2021/12/product_fashion_15_a_1-80x106.jpg"
                    alt=""
                  />
                  <h3 className="mt-6 text-black font-[600]">
                    Wool-blend Jacket <span> x1</span>
                  </h3>
                </div>
                <p className="mt-6 text-black font-[400]">$29.00</p>
              </div>
              <hr className="border-[#666]" />
            </div>
          </div>

          <table class="border-collapse w-full  table-auto    text-sm">
            <thead>
              <tr>
                <th class="border-b text-center border-r space-y-2  text-[16px] font-[jost] dark:border-slate-600  p-4 pl-8 pt-0 pb-3 text-black dark:text-slate-200 ">
                  <FontAwesomeIcon
                    className="text-[16px] text-[#666]"
                    icon={faPencil}
                  />
                  <h3 className="text-[16px] text-[#666] font-[600]">Note</h3>
                </th>
                <th class="border-b border-r text-[16px]  dark:border-slate-600  p-4 pt-0 pb-3 text-black dark:text-slate-200 text-center">
                  <FontAwesomeIcon
                    className="text-[16px] text-[#666]"
                    icon={faTruckFast}
                  />
                  <h3 className="text-[16px] text-[#666] font-[600]">
                    Shipping
                  </h3>
                </th>
                <th class="border-b  text-[16px]  dark:border-slate-600  p-4 pr-8 pt-0 pb-3 text-black dark:text-slate-200 text-center">
                  <FontAwesomeIcon
                    className="text-[16px] text-[#666]"
                    icon={faTicket}
                  />
                  <h3 className="text-[16px] text-[#666] font-[600]">Coupon</h3>
                </th>
              </tr>
            </thead>
            <tbody class="  bg-white dark:bg-slate-800 space-y-4">
              <tr>
                <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-[#666] ">Subtotal</h3>
                </td>
                <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-black "></h3>
                </td>

                <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[18px] font-[500] font-jost text-right text-black ">
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
                  <h3 className="text-[16px] text-right text-black ">
                    Flat rate: $10.00
                  </h3>
                </td>
              </tr>
              <tr>
                <td class="border-b flex space-x-5 border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                  <h3 className="text-[16px] text-black font-[500] ">Total</h3>
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
          <div className="w-full flex space-y-2 justify-between text-[#666]">
            <div className="item grid place-items-center space-x-2">
              {/* <FontAwesomeIcon icon={faCheese} /> */}
              <h3>Apply Coupon</h3>
            </div>

            <div className="item">
              <h3
                onClick={Hndcoupon}
                className="border p-1 border-[#666] text-center min-w-min"
              >
                Apply
              </h3>
            </div>
          </div>
        </div>

        <div className="item space-y-6">
          <h3 className="text-[24px] font-[600]">Payment information</h3>
          <div class="relative mb-4">
            <input type="checkbox" id="toggle1" class="toggle hidden" />
            <label
              class="title justify-between flex  border  bg-white p-4 cursor-pointer"
              for="toggle1"
            >
              <span className="flex space-x-3">
                <input
                  type="radio"
                  className="chek mt-1"
                  name=""
                  id=""
                  for="toggle1"
                />
                <h3 className="font-[500] text-black ">Direct Bank Transfer</h3>
              </span>
              <FontAwesomeIcon icon={faTicket} className=" flex justify-end" />
            </label>
            <div class="content bg-white overflow-hidden">
              <p class="p-4 font-[jost]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
          <div class="relative mb-4">
            <input type="checkbox" id="toggle2" class="toggle hidden" />

            <label
              class="title justify-between flex  border font-bold bg-white p-4 cursor-pointer"
              for="toggle2"
            >
              <span className="flex space-x-3">
                <input
                  type="radio"
                  className="chek mt-1"
                  name=""
                  id=""
                  for="toggle2"
                />
                <h3 className="font-[500] text-black ">Check payment</h3>
              </span>
              <FontAwesomeIcon
                icon={faMoneyCheckAlt}
                className=" flex justify-end"
              />
            </label>
            <div class="content bg-white overflow-hidden">
              <p class="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
          <div class="relative mb-4">
            <input type="checkbox" id="toggle3" class="toggle hidden" />
            <label
              class="title justify-between flex  border font-bold bg-white p-4 cursor-pointer"
              for="toggle3"
            >
              <span className="flex space-x-3">
                <input
                  type="radio"
                  className="chek mt-1"
                  name=""
                  id=""
                  for="toggle3"
                />
                <h3 className="font-[500] text-black ">Cash On Delivery</h3>
              </span>
              <FontAwesomeIcon
                icon={faMoneyBillAlt}
                className=" flex justify-end"
              />
            </label>
            <div class="content bg-white overflow-hidden">
              <p class="p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>

          <hr />

          <h3>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <span className="text-black font-[500]">privacy policy</span>
            .
          </h3>

          <input
            type="button"
            value="Place Order"
            className="w-full bg-black p-3 rounded-md text-white text-[14px] font-[700]"
          />
        </div>
      </div>
      <Couponcomponent coupons={coupons} Hndcoupon={Hndcoupon} />
    </div>
  );
}
