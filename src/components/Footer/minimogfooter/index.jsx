import React from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Minimogfooter() {
  return (
    <div className="footer-minimog ">
      <div className="minimogfooter py-[4rem]  flex justify-between space-x-16  font-minimog-theme-font">
        <div className="item space-y-4 w-[35%]">
          <h3 className="text-[36px]">Don’t miss a thing</h3>
          <h3 className="text-[16px] text-minimog-theme-footer-title-default-color">
            Enter your email below to be the first to know about new collections
            and product launches.
          </h3>
          <div className="unp border w-full flex justify-between px-[1rem] mt-3">
            <div className="flex space-x-3">
              <div className="icon grid place-items-center ">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                type="text"
                placeholder="Your Email"
                className="border-none"
              />
            </div>
            <div className="icon grid place-items-center">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        {/* ITEM1 END */}
        <div className="item w-[20%] space-y-4">
          <h3 className="text-minimog-theme-footer-title-color text-[16px] font-[500]">
            Company
          </h3>
          <div className="bod text-minimog-theme-footer-title-default-color">
            <h3>Find a location nearest you.</h3> <h3>See Our Stores</h3>
          </div>
          <div className="bod text-minimog-theme-footer-title-default-color">
            <h3>+391 (0)35 2568 4593</h3> <h3>hello@domain.com</h3>
          </div>
        </div>
        {/* ITEM2 END */}
        <div className="item w-[20%] space-y-4">
          <h3 className="text-minimog-theme-footer-title-color text-[16px] font-[500]">
            Services
          </h3>
          <div className="fmenu">
            <ul className="space-y-2 text-minimog-theme-footer-title-default-color">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Delivery Inforamtion</a>
              </li>
              <li>
                <a href="">Terms & Condition</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ITEM3 END */}
        <div className="item w-[20%] space-y-4">
          <h3 className="text-minimog-theme-footer-title-color text-[16px] font-[500]">
            Social Media
          </h3>
          <div className="icon flex space-x-3">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="footerbottom flex justify-between py-4">
        <div className="item">
          <h3>© Minimog 2022</h3>
        </div>
        <div className="item">
          <img
            src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/11/payment.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
