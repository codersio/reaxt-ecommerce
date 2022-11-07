import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import "./style.scss";
export default function Informationp() {
  const [activetabs, setTabs] = useState(0);
  const Handel = () => {
    setTabs(1);
  };

  const Guest = () => {
    return (
      <div className="space-y-7 p-5 mt-5">
        <div className="flex space-x-32">
          <label htmlFor="">Social title</label>{" "}
          <div className="flex space-x-3">
            <div>
              {" "}
              <input type="radio" name="" id="" />{" "}
              <label htmlFor="l">Mrs</label>
            </div>
            <div>
              <input type="radio" name="" id="" /> <label htmlFor="l">Mr</label>
            </div>
          </div>
        </div>
        <div className="fnam md:flex md:space-x-28 space-x-0">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            First name
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border md:w-[80%] w-full  border-[#e1e1e1]"
          />
        </div>
        <div className="lnam md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            Last name
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border md:w-[80%] w-full border-[#e1e1e1]"
          />
        </div>
        <div className="email md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] w-[16%] ">
            Email
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border md:w-[80%] w-full border-[#e1e1e1]"
          />
        </div>

        <div className="acc">
          <h3 className="text-[#666] font-[800]">
            Create an account <span className="font-[Italic]">(optional)</span>
          </h3>
          <p className="text-[#acaaa6]">And save time on your next order!</p>
        </div>
        <div className="password md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            Password
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border md:w-[80%] w-full border-[#e1e1e1]"
          />
        </div>
        <div className="password md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] md:w-[16%] ">
            Birthday
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border md:w-[80%] w-full border-[#e1e1e1]"
          />
        </div>
        <div className="box space-y-3">
          <div className="chck space-x-4">
            <input type="checkbox" name="" id="" />{" "}
            <label htmlFor=""> Receive offers from our partners</label>
          </div>
          <div className="chck ">
            <div className=" space-x-4">
              <input type="checkbox" name="" id="" />{" "}
              <label htmlFor="">Sign up for our newsletter</label>
            </div>
            <h3 className="italic">
              Signup to recieve our latest news and hotest promotions{" "}
            </h3>
          </div>
        </div>

        <div className="btt text-center">
          <input
            type="button"
            value="Continue"
            className="w-[40%] p-3 bg-[#373839] text-[12px] uppercase font-[600] text-white"
          />
        </div>
      </div>
    );
  };

  const SignIn = () => {
    return (
      <div className="space-y-5 p-5">
        <div className="email md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] w-[16%] ">
            Email
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border md:w-[80%] w-full border-[#e1e1e1]"
          />
        </div>
        <div className="email md:flex md:space-x-28">
          <div htmlFor="" className="text-[14px] w-[16%] ">
            Password
          </div>
          <input
            type="text"
            name=""
            // placeholder="first name"
            id=""
            className="border md:w-[80%] w-full border-[#e1e1e1]"
          />
        </div>
        <div className="btt text-center space-y-3">
          <h3 className="text-[14px]">Forgot your password?</h3>
          <input
            type="button"
            value="Continue"
            className="w-[40%] p-3 bg-[#373839] text-[12px] uppercase font-[600] text-white"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="info-container md:p-14 text-[14px] font-Raleway text-[#414141] ">
      <div className="con space-y-7 border border-t-4  shadow-lg">
        <div className="row">
          <div className="item flex ">
            <button
              onClick={() => setTabs(0)}
              className={
                activetabs === 0
                  ? "w-[50%] text-[14px] text-[#282828] p-3 "
                  : "w-[50%] text-[14px] text-[#282828] p-3 border"
              }
            >
              ORDER AS A GUEST
            </button>
            <button
              onClick={() => setTabs(1)}
              className={
                activetabs === 1
                  ? "w-[50%] text-[14px] text-[#282828] p-3 "
                  : "w-[50%] text-[14px] text-[#282828] p-3 border"
              }
            >
              SIGN IN
            </button>
          </div>
          {activetabs === 0 ? <Guest /> : <SignIn />}
        </div>
      </div>
    </div>
  );
}
