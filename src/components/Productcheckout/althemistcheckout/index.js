import React, { useState } from "react";
import {
  faPen,
  faPencil,
  faTicket,
  faTractor,
  faClock,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import DeliveryPickup from "../../deliverypickup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Althemistcheckout() {
  const [hidebt, setShowbt] = useState(false);
  const [delpickup, setDelpickup] = useState(0);
  const Handlebtn = () => {
    setShowbt(!hidebt);
  };
  return (
    <div className="container font-Rubik p-5 md:flex md:space-x-9">
      <DeliveryPickup delpickup={delpickup} setDelpickup={setDelpickup} />
      <div className="row w-full md:w-[60%] space-y-4">
        <h3 className=" text-[#666] text-[14px] leading-3 bg-[#f6f6f6] p-6">
          RETURNING CUSTOMER?
          <a href="" className="text-[#f2002d] font-[500] text-[16px]">
            CLICK HERE TO LOGIN
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
                placeholder="first name"
                className="w-[100%] bg-[#f6f6f6] border-none rounded-md p-"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">First Name *</label> <br />
              <input
                type="text"
                name=""
                placeholder="first name"
                className="w-[100%] bg-[#f6f6f6] border-none rounded-md p-"
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
              className="w-[100%] bg-[#f6f6f6] border-none rounded-md p-"
              id=""
            />
          </div>
          <div className="country space-y-3">
            <label htmlFor="">Country / Region * *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name space-y-3"
              className="w-[100%] bg-[#f6f6f6] border-none rounded-md p-"
              id=""
            />
          </div>
          <div className="address space-y-3">
            <label htmlFor="">Street address * *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name space-y-3"
              className="w-[100%] bg-[#f6f6f6] border-none rounded-md p-"
              id=""
            />
          </div>
          <div className="city space-y-3">
            <label htmlFor="">Town / City *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name"
              className="w-[100%] bg-[#f6f6f6] border-none rounded-md p-"
              id=""
            />
          </div>
          <div className="state space-y-3">
            <label htmlFor="">State *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name"
              className="w-[100%] bg-[#f6f6f6] border-none rounded-md p-"
              id=""
            />
          </div>
          <div className="zip space-y-3">
            <label htmlFor="">ZIP Code *</label> <br />
            <input
              type="text"
              name=""
              placeholder="first name"
              className="w-[100%] bg-[#f6f6f6] border-none rounded-md p-"
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
                className="w-[100%] bg-[#f6f6f6] border-none rounded-md p-"
                id=""
              />
            </div>
            <div className="item w-[100%] space-y-3">
              <label htmlFor="">First Name *</label> <br />
              <input
                type="text"
                name=""
                placeholder="first name"
                className="w-[100%] bg-[#f6f6f6] border-none rounded-md p-"
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
              <label htmlFor="">password *</label> <br />
              <input
                type="text"
                name=""
                placeholder="first name"
                className="w-[50%] bg-[#f6f6f6] rounded-md p-"
                id=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row w-full md:w-[40%] border p-4 space-y-6 md:mt-0 mt-5">
        <div className="utem text-[14px] border flex space-x-3 p-2 text-[#666]">
          <div className="item border w-[40%] md:w-[20%] p-2 rounded-md h-[56px] text-center">
            <FontAwesomeIcon icon={faClock} />
            <p className=" md:text text-[9px]">40 min.</p>
          </div>
          <div className="item relative">
            <h3>Delivery from: Worldwide</h3>
            <p>
              To: Co Hwy FFF , 54016, Wisconsin, Wisconsin, United States (US)
            </p>
            <div className="absolute top-0 text-center right-0 rounded-full w-[20px] h-[20px] bg-[#f2002d]">
              <FontAwesomeIcon
                className=" text-[10px] text-white "
                icon={faPencil}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between  p-3 border-b">
          <div className="h3 text-[14px] font-semibold ">CART TOTALS</div>
          <div className="price">$110.00</div>
        </div>
        <table className="w-full">
          <thead className="w-full bg-slate-300 ">
            <th className="text-left  p-4">Product</th>
            <th></th>
            <th></th>

            <th className="text-left">Subtotal</th>
            <th></th>
            <th></th>
          </thead>
          <tbody class="bg-white  dark:bg-slate-800 space-y-4">
            <tr>
              <td class="border-b flex space-x-5  dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-[#666] ">
                  Bacon Cheeseburger × 1
                </h3>
              </td>
              <td class="border-b  dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>

              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>

              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className=" relative text-[16px] text-left text-black font-[500]">
                  {" "}
                  <span className="text-[11px] ">$</span>29.
                  <span className="text-[14px] absolute">99</span>
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>
            </tr>
            <tr>
              <td class=" flex space-x-5  dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                <h3 className="text-[15px] text-[#666] font-[600]">Subtotal</h3>
              </td>
              <td class="border-b  dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>

              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>

              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                <h3 className=" relative text-[16px] text-left text-black font-[500]">
                  {" "}
                  <span className="text-[11px] ">$</span>29.
                  <span className="text-[14px] absolute">99</span>
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>
            </tr>

            <tr>
              <td class=" flex space-x-5  dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                <h3 className="text-[15px] text-[#666] font-[600] ">
                  Shipping
                </h3>
              </td>
              <td class="border-b  dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>

              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>

              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                <input type="radio" name="" id="" />{" "}
                <label htmlFor="" className=" text-[12px]">
                  STANDARD DELIVERY:{" "}
                  <h3 className=" relative text-[15px] text-left text-[#666] font-[500]">
                    {" "}
                    <span className="text-[11px] ">$</span>29.
                    <span className="text-[14px] absolute">99</span>
                  </h3>
                </label>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>
            </tr>
            <tr>
              <td class=" flex space-x-5  dark:border-slate-700 pt-4 p-2  text-slate-500 dark:text-slate-400">
                <h3 className="text-[15px] font-[600] text-[#666] ">Total</h3>
              </td>
              <td class="border-b  dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>

              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>

              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-2 text-slate-500 dark:text-slate-400">
                <h3 className=" relative text-[20px] text-left text-black font-[700]">
                  {" "}
                  <span className="text-[11px] ">$</span>29.
                  <span className="text-[14px] absolute">99</span>
                </h3>
              </td>
              <td class="border-b border-slate-100 dark:border-slate-700 pt-4 p-1 text-slate-500 dark:text-slate-400">
                <h3 className="text-[16px] text-black "></h3>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="tes rounded-md bg-[#f1f1f1] p-4 text-[18px]">
          <h3>
            Pinpoint your location on the map if it's not accurately marked.
          </h3>
        </div>
        <div class="relative mb-4">
          <input type="checkbox" id="toggle1" class="toggle hidden" />
          <label
            class="title justify-between flex  border-b  bg-white p-4 cursor-pointer"
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
            class="title justify-between flex  border-b font-bold bg-white p-4 cursor-pointer"
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
            <FontAwesomeIcon icon={faTicket} className=" flex justify-end" />
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
        <h3>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <span className="text-[#f2002d] font-[500]">privacy policy</span>.
        </h3>

        <div>
          <input type="checkbox" name="" id="" />{" "}
          <label htmlFor="" className="text-[12px] text-[#e4666]">
            I HAVE READ AND AGREE TO THE WEBSITE{" "}
            <span className="text-[#f2002d] font-[500]">
              TERMS AND CONDITIONS *
            </span>
          </label>
        </div>
        <div className="button block m-0 text-center ">
          <input
            type="button"
            value="Proceed to checkout"
            className="w-[100%] rounded-3xl uppercase bg-[#f2002d] text-white font-[rubik] p-2"
          />
        </div>
      </div>
    </div>
  );
}
