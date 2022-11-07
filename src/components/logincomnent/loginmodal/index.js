import { faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Loginmodal({ logmodal, setLogmodal }) {
  const [tabsbt, setTabs] = useState(0);

  const Login = () => {
    return (
      <div className="space-y-6">
        <h3 className="text-[36px]">Sign In</h3>
        <p className="text-[16px] text-[#666]">
          Don't have an account yet? Sign up for free
        </p>

        <input
          type="text"
          value="Email Address"
          className="border border-[#e5e5e5] w-full p-4"
        />
        <div className="border border-[#e5e5e5] justify-between w-full p-2 flex">
          <input
            type="text"
            value="Password"
            className="border-none w-[80%] "
          />
          <div>
            <FontAwesomeIcon icon={faEye} className="mt-3 text-[#666]" />
          </div>
        </div>
        <div className="f flex justify-between">
          <div className="item flex space-x-2">
            <div>
              {" "}
              <input type="checkbox" name="" id="" />{" "}
            </div>
            <label htmlFor=""> Remember password</label>
          </div>
          <div className="item">
            <h3>Forgot Password</h3>
          </div>
        </div>

        <input
          type="button"
          value="Login"
          className="w-full text-white font-[600] uppercase text-[14px] p-2 bg-[#373839]"
        />
        <h3 onClick={() => setTabs(1)}>No account ? Create an account</h3>
      </div>
    );
  };

  const Register = () => {
    return (
      <div className="space-y-6">
        <h3 className="text-[36px]">Sign In</h3>
        <p className="text-[16px] text-[#666]">
          Don't have an account yet? Sign up for free
        </p>
        <input
          type="text"
          value="First name"
          className="border border-[#e5e5e5] w-full p-4"
        />
        <input
          type="text"
          value="Last name"
          className="border border-[#e5e5e5] w-full p-4"
        />
        <input
          type="text"
          value="Email Address"
          className="border border-[#e5e5e5] w-full p-4"
        />
        <div className="border border-[#e5e5e5] justify-between w-full p-2 flex">
          <input
            type="text"
            value="Password"
            className="border-none w-[80%] "
          />
          <div>
            <FontAwesomeIcon icon={faEye} className="mt-3 text-[#666]" />
          </div>
        </div>
        <div className="f flex justify-between">
          <div className="item flex space-x-2">
            <div>
              {" "}
              <input type="checkbox" name="" id="" />{" "}
            </div>
            <label htmlFor=""> Remember password</label>
          </div>
          <div className="item">
            <h3>Forgot Password</h3>
          </div>
        </div>

        <input
          type="button"
          value="Login"
          className="w-full text-white font-[600] uppercase text-[14px] p-2 bg-[#373839]"
        />
        <h3 onClick={() => setTabs(0)}>Already have ab account ? Login</h3>
      </div>
    );
  };
  return (
    <div
      className={
        logmodal
          ? " z-10 overflow-hidden login-container grid place-items-center bg-black bg-opacity-75 fixed top-0 right-0 bottom-0 left-0"
          : "hidden"
      }
    >
      <div className="fomr text-center bg-white w-[45%] space-y-6 relative ">
        <div className="close  space-y-3">
          <div
            onClick={() => setLogmodal(!logmodal)}
            className="text-right p-3 w-[50px] h-[50px]
            bg-white grid place-items-center 
            absolute text-[1.3rem] -top-7 rounded-full -right-8 shadow-2xl text-black "
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          {/* <hr /> */}
        </div>

        <div className="space-y-6 p-5">
          {tabsbt == 0 ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
}
