import { faB, faCheck, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Font/globalfont.scss";
export default function Register({ setTabs }) {
  return (
    <div className="login-container flex  p-12 font-Quicksand">
      <div className="p-8 space-y-8 text-[#333e48]  register-right-riw w-[50%]">
        <div className="space-y-1">
          <h3 className="text-[#253d4e] font-Quicksand text-[48px] font-[800]">
            Create an Account
          </h3>

          <h3 className="text-[16px] font-Quicksand">
            Already have an account?{" "}
            <span onClick={() => setTabs(0)} className="text-[#3bb77e]">
              Login
            </span>
          </h3>
        </div>
        <div className="s space-y-8">
          <div className="fomr space-y-4">
            <div className="form-group">
              <input
                type="text"
                className="p-4 text-[16px] rounded-xl border border-[#ececec] w-full"
                placeholder="Username "
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="p-4 text-[16px] rounded-xl border border-[#ececec] w-full"
                placeholder="Username  "
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="p-4 rounded-xl text-[16px] w-full border border-[#ececec]"
                placeholder="Your Password "
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="p-4 rounded-xl text-[16px] w-full border border-[#ececec]"
                placeholder="Confirm password "
              />
            </div>
            <div className="form-group space-x-9 flex justify-between">
              <input
                type="text"
                className="p-4 text-[16px] rounded-xl border border-[#ececec]"
                placeholder="Security Code "
              />
              <button className="p-4 text-[24px] font-[600] bg-[#bce3c9] flex space-x-2 justify-center rounded-xl  border-[#ececec] w-[30%] text-center">
                <span className="text-[#55bb90]">6</span>
                <span className="text-[#f74b81]">7</span>
                <span className="text-[#67bcee]">7</span>
                <span className="text-[#f59758]">9</span>
              </button>
            </div>
          </div>
          <div className="inp space-y-4">
            <div className="item flex space-x-3">
              <div className="">
                {" "}
                <input type="radio" name="" id="" />{" "}
              </div>
              <label htmlFor="" className="text-[#292b2c] font-[600] font-Lato">
                I am a Customer
              </label>
            </div>
            <div className="item flex space-x-3">
              <div className="">
                {" "}
                <input type="radio" name="" id="" />{" "}
              </div>
              <label htmlFor="" className="text-[#292b2c] font-[600] font-Lato">
                I am a vendor
              </label>
            </div>
          </div>
          <div className="item flex font-Lato justify-between text-[14px]">
            <div className=" flex space-x-2">
              <input type="checkbox" name="" id="" />
              <label className="text-[#687188]">
                I agree to terms & Policy.
              </label>
            </div>{" "}
            <h3 className="text-[#b6b6b6]">Learn more</h3>
          </div>
          <div className="for-group">
            <input
              onClick={() => setTabs(1)}
              className="p-4 text-[14px] text-white font-[700] rounded-xl bg-[#29a56c] w-[40%]"
              type="button"
              value="Submit and Register"
            />
          </div>
        </div>
        <p className="text-[#b6b6b6] font-Lato text-[13px]">
          Note:Your personal data will be used to support your experience
          throughout this website, to manage access to your account, and for
          other purposes described in our privacy policy
        </p>
      </div>

      <div className="p-8 w-[50%]    register-left-row text-[#333e48] font-Inter ">
        <div className="border mt-[8rem] grid place-items-center p-7 rounded-lg   space-y-4">
          <div
            className="facevook text-[20px] font-[600] bg-[#1877f2] text-[#fff]
           rounded-lg text-center p-3 w-[60%]"
          >
            <FontAwesomeIcon icon={faB} /> Continue With Facebook
          </div>
          <div
            className="facevook text-[20px] font-[600] border text-[#7e7e7e]
           rounded-lg text-center p-3 w-[60%]"
          >
            <FontAwesomeIcon icon={faB} /> Continue With Google
          </div>
          <div
            className="facevook text-[20px] font-[600] bg-[#000] text-[#fff]
           rounded-lg text-center p-3 w-[60%]"
          >
            <FontAwesomeIcon icon={faB} /> Continue With Apple
          </div>
        </div>
      </div>
    </div>
  );
}
