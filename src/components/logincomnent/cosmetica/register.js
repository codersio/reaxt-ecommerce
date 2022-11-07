import {
  faCheck,
  faEnvelope,
  faEye,
  faLock,
  faRightLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Font/globalfont.scss";
export default function Login({ setTabs }) {
  return (
    <div className="register-container grid place-items-center   p-8">
      <div className="p-8 w-[50%]  register-left-row text-[#333e48] font-Poppins space-y-4">
        <h3 className="text-[#212222] text-[16px] font-[500] uppercase">
          CREATE AN ACCOUNT
        </h3>
        <hr />
        <h3 className="text-[14px]">Welcome back! Sign in to your account</h3>
        <div className="fomr space-y-4">
          <div className="icon flex p-1  space-x-3 border border-[#e5e5e8] text-[14px]">
            <div className="w-[10%]  p-1  grid place-items-center border-r">
              <FontAwesomeIcon
                icon={faUser}
                className="text-[#e5e5e8] text-[14px]"
              />
            </div>
            <input
              type="text"
              placeholder="First name"
              name=""
              id=""
              className="w-full border-none text-[14px] text-[#e5e5e8]"
            />
          </div>
          <div className="icon flex p-1  space-x-3 border border-[#e5e5e8] text-[14px]">
            <div className="w-[10%]  p-1  grid place-items-center border-r">
              <FontAwesomeIcon
                icon={faUser}
                className="text-[#e5e5e8] text-[14px]"
              />
            </div>
            <input
              type="text"
              placeholder="Last name"
              name=""
              id=""
              className="w-full border-none text-[14px] text-[#e5e5e8]"
            />
          </div>
          <div className=" flex space-y-2 flex-col fomr-group">
            <div className="icon flex p-1  space-x-3 border border-[#e5e5e8] text-[14px]">
              <div className="w-[10%]  p-1  grid place-items-center border-r">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#e5e5e8] text-[14px]"
                />
              </div>
              <input
                type="text"
                placeholder="Email"
                name=""
                id=""
                className="w-full border-none text-[14px] text-[#e5e5e8]"
              />
            </div>
          </div>
          <div className="icon flex p-1 space-x-3 border border-[#e5e5e8] text-[14px]">
            <div className="w-[11%] grid place-items-center border-r">
              <FontAwesomeIcon icon={faLock} className="text-[#e5e5e8] " />
            </div>
            <input
              type="text"
              placeholder="."
              name=""
              id=""
              className="w-full border-none"
            />
            <div className="eye grid place-items-center w-[10%] bg-[#e9e9e9]">
              <FontAwesomeIcon icon={faEye} className="text-[14px]" />
            </div>
          </div>
          <div className="for font-Poppins">
            <div className="item  text-[14px] space-y-2">
              <div className="icon flex space-x-3 text-[11px]">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <h3 className="text-[#bbb]">Sign up for our newsletter</h3>
              </div>
              <h3 className="text-[#666] text-[12px]">
                If you have an account, please
                <span onClick={() => setTabs(0)} className="text-[#6aa1da]">
                  {" "}
                  Login Here
                </span>
              </h3>
            </div>
          </div>
          <div className="for-group">
            <input
              className="p-3 text-[14px] border-none  font-[700] text-white rounded-md bg-[#222] w-[20%]"
              type="button"
              value="Register"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
