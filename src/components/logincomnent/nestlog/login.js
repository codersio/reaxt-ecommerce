import { faCheck, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Font/globalfont.scss";
export default function Login({ setTabs }) {
  return (
    <div className="login-container flex  p-12 font-Quicksand">
      <div className="p-8 w-[50%]   register-left-row text-[#333e48] font-Inter ">
        <img
          className="w-[80%] rounded-xl block m-auto"
          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/page/login-1.png"
          alt=""
        />
      </div>

      <div className="p-8 space-y-8 text-[#333e48]  register-right-riw w-[50%]">
        <div className="space-y-1">
          <h3 className="text-[#253d4e] font-Quicksand text-[48px] font-[800]">
            Login
          </h3>

          <h3 className="text-[16px]">
            Don't have an account?{" "}
            <span onClick={() => setTabs(1)} className="text-[#3bb77e]">
              Create here
            </span>
          </h3>
        </div>
        <div className="s space-y-8">
          <div className="fomr space-y-4">
            <div className="form-group">
              <input
                type="text"
                className="p-4 text-[16px] rounded-xl border border-[#ececec] w-full"
                placeholder="Username or Email "
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="p-4 rounded-xl text-[16px] w-full border border-[#ececec]"
                placeholder="Your Password "
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
          <div className="item flex font-Lato justify-between text-[14px]">
            <div className=" flex space-x-2">
              <input type="checkbox" name="" id="" />
              <label className="text-[#687188]">Return To Store</label>
            </div>{" "}
            <h3 className="text-[#b6b6b6]">Forgote Password</h3>
          </div>
          <div className="for-group">
            <input
              onClick={() => setTabs(1)}
              className="p-4 text-[14px] text-white font-[700] rounded-xl bg-[#253D4E] w-[20%]"
              type="button"
              value="Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
