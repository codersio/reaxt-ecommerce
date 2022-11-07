import React, { useState } from "react";
import "../../../Font/globalfont.scss";
import { FaSlidersH } from "react-icons/fa";
import { FiUser, FiLogOut } from "react-icons/fi";
import Dashboard from "./dashboard";
import Addressbook from "./addressbook";
import Accountdetails from "./accountdetails";
import Trackorderc from "./trackorder";
import {
  MdOutlineShoppingBag,
  MdAddShoppingCart,
  MdLocationOn,
} from "react-icons/md";
import OrderDetails from "./orderdetails";
export default function Cosmetica() {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="font-Quicksand text-[16px] p-9 text-[#666] minimog-account flex space-x-8">
      <div className="left-bar w-[30%]">
        <div className="  p-5 space-y-16">
          <div className="item space-y-2">
            <div>
              {" "}
              <button
                onClick={() => setTabs(0)}
                className="bg-[#3bb77e] text-left 
            text-white border font-[600]  rounded-lg w-full p-4"
              >
                <span className="ml-4 flex space-x-3">
                  {" "}
                  <div>
                    {" "}
                    <FaSlidersH className="text-[20px] text-[#fff]" />
                  </div>{" "}
                  <h3>Dashboard</h3>
                </span>
              </button>{" "}
            </div>
            <div>
              <button
                onClick={() => setTabs(1)}
                className="border text-left  rounded-lg
            text-black  font-[600] w-full p-4"
              >
                <span className="ml-4 text-[#7e7e7e] text-[15px]">
                  {" "}
                  <MdOutlineShoppingBag className="text-[25px]" /> Orders
                </span>
              </button>
            </div>
            <div>
              <button
                onClick={() => setTabs(2)}
                className="border text-left rounded-lg
            text-black  font-[600] w-full p-4"
              >
                <span className="ml-4 text-[#7e7e7e] text-[15px] font-[900]">
                  {" "}
                  <MdAddShoppingCart className="text-[25px]" /> Track Your Order
                </span>
              </button>
            </div>
            <div>
              <button
                onClick={() => setTabs(3)}
                className="border text-left rounded-lg
            text-black  font-[600] w-full p-4"
              >
                <span className="ml-4 flex space-x-2 text-[#7e7e7e] text-[15px] font-[900]">
                  {" "}
                  <MdLocationOn className="text-[25px]" />
                  <h3>My Address</h3>
                </span>
              </button>
            </div>
            <div>
              <button
                onClick={() => setTabs(4)}
                className="border text-left rounded-lg
            text-black  font-[600] w-full p-4"
              >
                <span className="ml-4 flex space-x-2 text-[#7e7e7e] text-[15px] font-[900]">
                  {" "}
                  <div>
                    {" "}
                    <FiUser className="text-[25px]" />
                  </div>
                  <h3>Account Details</h3>
                </span>
              </button>
            </div>
            <div>
              <button
                onClick={() => setTabs(5)}
                className="border text-left rounded-lg
            text-black  font-[600] w-full p-4"
              >
                <span className="ml-4 flex space-x-2 text-[#7e7e7e] text-[15px] font-[900]">
                  {" "}
                  <div>
                    {" "}
                    <FiLogOut className="text-[25px]" />
                  </div>
                  <h3>Log out</h3>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-bar  w-[80%]">
        <div className="w-[100%]  p-4 ">
          {tabs == 0 ? (
            <Dashboard />
          ) : tabs == 1 ? (
            <OrderDetails />
          ) : tabs == 2 ? (
            <Trackorderc />
          ) : tabs == 3 ? (
            <Addressbook />
          ) : tabs == 4 ? (
            <Accountdetails />
          ) : (
            <div>Not here</div>
          )}
        </div>
      </div>
    </div>
  );
}
