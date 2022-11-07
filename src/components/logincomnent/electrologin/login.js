import { faCheck, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Font/globalfont.scss";
import "./style.scss";
export default function Login({ setTabs }) {
  return (
    <div className="register-container flex space-x-9 p-8">
      <div className="p-8 w-[50%] border-r register-left-row text-[#333e48] font-Inter space-y-4">
        <h3 className="text-[#333e48] text-[30px]">Login</h3>
        <hr className="electro-login" />
        <h3 className="text-[14px]">Welcome back! Sign in to your account</h3>
        <div className="fomr space-y-4">
          <div className=" flex space-y-2 flex-col fomr-group">
            <label className="text-[14px] font-[700]">Email *</label>
            <input
              type="text"
              name=""
              id=""
              className="rounded-3xl p-3 border-[#dddddd]"
            />
          </div>
          <div className=" flex space-y-2 flex-col fomr-group">
            <label className="text-[14px] font-[700]">Password *</label>
            <input
              type="text"
              name=""
              id=""
              className="rounded-3xl p-3 border-[#dddddd]"
            />
          </div>
          <div className="for ">
            <div className="item flex justify-between text-[14px]">
              <h3>Return To Store</h3>
              <h3>Forgote Password</h3>
            </div>
          </div>
          <div className="for-group">
            <input
              className="p-4 text-[14px] font-[700] rounded-3xl bg-[#fed700] w-[20%]"
              type="button"
              value="Login"
            />
          </div>
        </div>
      </div>

      <div className="p-8 space-y-4 text-[#333e48] font-Inter register-right-riw w-[50%]">
        <h3 className="text-[#333e48] text-[30px]">Create your own Account</h3>
        <hr />
        <h3 className="text-[14px]">Create your own Account</h3>
        <div className="s space-y-4">
          <h3 className="text-[18px]">Sign up today and you'll be able to :</h3>
          <div className="space-y-2 text-[14px]">
            <div className="flex space-x-2">
              <div>
                <FontAwesomeIcon icon={faCheck} className="text-[#5bb300]" />
              </div>
              <p>Speed your way through the checkout</p>
            </div>
            <div className="flex space-x-2">
              <div>
                <FontAwesomeIcon icon={faCheck} className="text-[#5bb300]" />
              </div>
              <p>Track your orders easily</p>
            </div>
            <div className="flex space-x-2">
              <div>
                <FontAwesomeIcon icon={faCheck} className="text-[#5bb300]" />
              </div>
              <p>Track your orders easily</p>
            </div>
          </div>
          <div className="for-group">
            <input
              onClick={() => setTabs(1)}
              className="p-4 text-[14px] font-[700] rounded-3xl bg-[#fed700] w-[20%]"
              type="button"
              value="Register"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
