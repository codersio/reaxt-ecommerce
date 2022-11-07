import React, { useState } from "react";
import "../../../Font/globalfont.scss";
import Dashboard from "./dashboard";
import Addressbook from "./addressbook";
import Accountdetails from "./accountdetails";
import OrderDetails from "./orderdetails";
export default function Minimog() {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="font-Jost text-[16px] p-9 text-[#666] minimog-account flex space-x-8">
      <div className="left-bar w-[45%] ">
        <div className="  p-5 space-y-16">
          <div className="item flex space-x-3">
            <div className="image rounded-full">
              <img
                className="rounded-full"
                src="https://secure.gravatar.com/avatar/70b03db954aa45fc2559e85f5d5bd13e?s=100&d=mm&r=g"
                alt=""
              />
            </div>
            <div className="grid place-items-center">
              <div>
                <h3>Hello!</h3>
                <p className="text-black font-[600]">Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div className="item ">
            <div>
              {" "}
              <button
                onClick={() => setTabs(0)}
                className="bg-black text-left 
            text-white border font-[600] w-full p-4"
              >
                <span className="ml-4">Dashboard</span>
              </button>{" "}
            </div>
            <div>
              <button
                onClick={() => setTabs(1)}
                className="border text-left 
            text-[#666]  font-[600] w-full p-4"
              >
                <span className="ml-4">Orders</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => setTabs(2)}
                className="border text-left 
                text-[#666]  font-[600] w-full p-4"
              >
                <span className="ml-4">Downloads</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => setTabs(3)}
                className="border text-left 
                text-[#666]  font-[600] w-full p-4"
              >
                <span className="ml-4">Addresses</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => setTabs(4)}
                className="border text-left 
                text-[#666]  font-[600] w-full p-4"
              >
                <span className="ml-4">Account details</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => setTabs(5)}
                className="border text-left 
                text-[#666]  font-[600] w-full p-4"
              >
                <span className="ml-4">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-bar  w-[80%]">
        <div className="w-[100%]  p-4 mt-[10rem]">
          {tabs == 0 ? (
            <Dashboard />
          ) : tabs == 1 ? (
            <OrderDetails />
          ) : tabs == 2 ? (
            <p>Downloads</p>
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
