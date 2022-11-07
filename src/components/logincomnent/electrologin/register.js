import { faCheck, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Font/globalfont.scss";
export default function Register({ setTabs }) {
  return (
    <div className="register-container flex space-x-5">
      <div className="p-5 w-[50%] border-r register-left-row text-[#333e48] font-Inter space-y-4">
        <h3 className="text-[#333e48] text-[30px]">Create New Account</h3>
        <hr />
        <h3 className="text-[14px]">Create your own Account</h3>
        <div className="fomr space-y-4">
          <div className=" flex space-y-2 flex-col fomr-group">
            <label className="text-[14px] font-[700]">First Name *</label>
            <input
              type="text"
              name=""
              id=""
              className="rounded-3xl p-3 border-[#dddddd]"
            />
          </div>
          <div className=" flex space-y-2 flex-col fomr-group">
            <label className="text-[14px] font-[700]">Last Name *</label>
            <input
              type="text"
              name=""
              id=""
              className="rounded-3xl p-3 border-[#dddddd]"
            />
          </div>
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
          <div className="for-group">
            <input
              className="p-4 text-[14px] font-[700] rounded-3xl bg-[#fed700] w-[20%]"
              type="button"
              value="Register"
            />
          </div>
        </div>
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
        </div>
      </div>

      <div className="p-5 space-y-4 text-[#333e48] font-Inter register-right-riw w-[50%]">
        <h3 className="text-[#333e48] text-[30px]">Login</h3>
        <hr />
        <h3 className="text-[14px]">Welcome back! Have an account</h3>
        <div className="for-group">
          <input
            onClick={() => setTabs(0)}
            className="p-4 text-[14px] font-[700] rounded-3xl bg-[#fed700] w-[20%]"
            type="button"
            value="Login"
          />
        </div>
      </div>
    </div>
  );
}
