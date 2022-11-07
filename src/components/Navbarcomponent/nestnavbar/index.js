import {
  faAngleDown,
  faBackspace,
  faBarsStaggered,
  faCartFlatbed,
  faCodeCommit,
  faCodeCompare,
  faHeart,
  faList,
  faLocationDot,
  faMagic,
  faMessage,
  faXmark,
  faPhone,
  faSearch,
  faUser,
  faBriefcase,
  faCartShopping,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import { FiHeart, FiUser } from "react-icons/fi";
import { BiGridAlt } from "react-icons/bi";
import { ImLoop2 } from "react-icons/im";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsSearch, BsGlobe } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../Font/globalfont.scss";
import React, { useState } from "react";

export default function Nestnavbar() {
  const [menubar, setMenubar] = useState(false);
  const Hndle = () => {
    setMenubar(!menubar);
  };
  return (
    <div className="menubar font-nest-theme-font">
      <div className=" md:block hidden electro-container font-Quicksand border-b-2">
        <div className="topbar p-2 justify-between flex border">
          <div className="item flex space-x-3 text-[13px] text-nest-theme-menu-default-title-color">
            <div className="icon flex space-x-2  ">
              <ul className="flex space-x-4 text-nest-theme-menu-default-title-color">
                <li className="flex space-x-3">
                  <a href="">About Us</a>
                  <div className="w-[1px] h-[1rem] mt-1 bg-[#333e481a] "></div>
                </li>
                <li className="flex space-x-3">
                  <a href="">My Account</a>
                  <div className="w-[1px] h-[1rem] mt-1 bg-[#333e481a] "></div>
                </li>
                <li className="flex space-x-3">
                  <a href="">wishlist</a>
                  <div className="w-[1px] h-[1rem] mt-1 bg-[#333e481a] "></div>
                </li>
                <li className="flex space-x-3">
                  <a href="">Order Tracking</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="item flex space-x-3 text-[13px] text-nest-theme-menu-default-title-color">
            <div className="icon flex space-x-2  ">
              <ul className="flex space-x-4">
                <li className="flex space-x-3">
                  <h3>
                    Need help?{" "}
                    <span className="text-[#3BB77E]">Call Us: + 1800 900</span>
                  </h3>
                  <div className="w-[1px] h-[1rem] mt-1 bg-[#333e481a] "></div>
                </li>
                <li className="flex space-x-3">
                  <h3>English</h3>
                  <div className="w-[1px] h-[1rem] mt-1 bg-[#333e481a] "></div>
                </li>
                <li className="flex space-x-3">
                  <h3>USD</h3>
                  <div className="w-[1px] h-[1rem] mt-1 bg-[#333e481a] "></div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="main-header flex space-x-12 p-5">
          <div className="item w-[15%]">
            <img
              className=""
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
              alt=""
            />
          </div>
          <div className="item w-[75%]  ">
            <div className="input-cat rounded-sm p-1 w-[100%] border-nest-theme-border-color border-2">
              <select
                name=""
                id=""
                className="border-r border-[#7e7e7e] border-l-0 border-t-0 border-b-0 text-[#253d4e] text-[14px] font-[600]"
              >
                <option value="">All Categories</option>
              </select>
              <input
                type="text"
                value="Search for items...."
                className="border-none w-[60%] text-[14px] text-[#7e7e7e]"
              />
              <button className=" w-[15%]  p-2  text-right ">
                <BsSearch className="text-[#7e7e7e] text-[17px] mt-1" />
              </button>
            </div>
          </div>
          {/* <div
            className="item w-[12%] h-[5%]  p-1 grid place-items-center 
           text-[#3bb77e] text-[14px]"
          >
            <select
              name=""
              id=""
              className="border border-[#B6B6B6] rounded-md shadow-xl"
            >
              <option value="">Your Location</option>
            </select>
          </div> */}
          <div className="item w-[50%] flex mt-3 justify-center space-x-10 text-[25px]">
            <div className="icon flex space-x-2">
              <div className="relative">
                <ImLoop2 className="rotate-[77deg] text-nest-theme-menu-icon-color" />
                <h3
                  className="bg-nest-theme-menu-icon-number-bg-color w-[20px] absolute -top-2   right-0 left-4 h-[20px] rounded-full text-[14px] 
            grid place-items-center font-[600] text-white"
                >
                  0
                </h3>
              </div>
              <h3 className="text-[15px] font-[600] mt-2 text-nest-theme-menu-default-title-color">
                Compare
              </h3>
            </div>
            <div className="icon flex space-x-2">
              <div className="relative">
                <FiHeart className="text-nest-theme-menu-icon-color" />
                <h3
                  className="bg-nest-theme-menu-icon-number-bg-color w-[20px] absolute -top-2   right-0 left-4 h-[20px] rounded-full text-[14px] 
            grid place-items-center font-[600] text-white"
                >
                  0
                </h3>
              </div>
              <h3 className="text-[15px] font-[600] mt-2 text-nest-theme-menu-default-title-color">
                Wishlist
              </h3>
            </div>
            <div className="icon relative">
              <div className="flex mt-1">
                <HiOutlineShoppingCart className=" text-[29px] text-nest-theme-menu-icon-color" />
                <h3 className="text-[15px] font-[600] mt-2 text-nest-theme-menu-default-title-color">
                  Cart
                </h3>
                <h3
                  className="bg-nest-theme-menu-icon-number-bg-color w-[20px] text-white absolute -top-2   right-0 left-3 h-[20px] rounded-full text-[14px] 
            grid place-items-center  "
                >
                  0
                </h3>
              </div>
            </div>
            <div className="icon relative">
              <div className="flex mt-1">
                <FiUser className="text-nest-theme-menu-icon-color" />
                <h3 className="text-[14px] font-[600] mt-1 text-nest-theme-menu-default-title-color">
                  Account
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation flex pl-5 space-x-4">
          <div
            className="item flex justify-center space-x-3
           w-[19%] text-nest-theme-allcate-title-color rounded-md text-[14px] font-[600]  p-3 bg-nest-theme-allcate-bg-color"
          >
            <div>
              {" "}
              <BiGridAlt className="text-[23px]" />
            </div>
            <h3 className="text-[16px] font-[800]"> Browse All Categories</h3>
            <FontAwesomeIcon icon={faAngleDown} className="text-white mt-1" />
          </div>
          <div className="item w-[75%]  text-nest-theme-menu-title-color font-[800]">
            <ul className="flex space-x-11 p-3 text-[14px] ">
              <li>
                <a href="">Home</a> <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li>
                <a href="">Catalog</a> <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li>
                <a href="">Gift Cards</a> <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li>
                <a href="">Pages</a> <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li>
                <a href="">Features</a> <FontAwesomeIcon icon={faAngleDown} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:hidden shadow-xl relative block mobilemenu pl-10 pr-10 p-2  justify-center bg-[#fff]">
        <div className="row flex justify-between ">
          <div className="item  space-x-6 flex">
            <div className="humbar " onClick={Hndle}>
              <FontAwesomeIcon icon={faBarsStaggered} />
            </div>
          </div>
          <div className="image">
            <img
              className="w-[35%] block m-auto"
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
              alt=""
            />
          </div>
          <div className="item ">
            <div className="mt-1 flex justify-center space-x-5">
              {" "}
              <div className="icon relative">
                <FontAwesomeIcon icon={faHeart} className="text-[#7e7e7e]" />
                <h3
                  className="bg-[#3bb74e] w-[15px] absolute top-0  right-0 left-3 h-[15px] rounded-full text-[10px] 
            grid place-items-center font-[700] text-white"
                >
                  0
                </h3>
              </div>
              <div className="icon relative">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-[#7e7e7e]"
                />
                <h3
                  className="bg-[#3bb74e] w-[15px] absolute top-0  right-0 left-3 h-[15px] rounded-full text-[10px] 
            grid place-items-center font-[700] text-white"
                >
                  0
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[100vh] bg-opacity-75 mobile absolute top-0 bottom-0 border right-0 left-0 bg-black">
          <div className=" h-[100vh]  nav-menu  absolute top-0  border bottom-0   left-0 right-28 bg-white">
            <div className="row flex justify-between p-4">
              <div className="item">
                <img
                  className="w-[35%] "
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
                  alt=""
                />
              </div>
              <div className="item">
                <div
                  className=" text-[12px] grid place-items-center w-[20px] h-[20px] bg-slate-200 rounded-full text-black"
                  onClick={Hndle}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
            </div>
            <hr />
            <div className="p-5">
              <div className="input-cat   w-[100%] bg-[#f2f3f4]  ">
                <input
                  type="text"
                  value="Search for items...."
                  className="border-none w-[85%] bg-[#f2f3f4] text-[14px] text-[#7e7e7e]"
                />
                <button className="   w-[10%] text-right text-[13px] text-gray-300">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
            <ul className="space-y-2 justify-center   p-4 text-nest-theme-menu-title-color">
              <li className="flex justify-between border-b p-2">
                <a href="">Home</a>
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li className="flex justify-between border-b p-2">
                <a href="">Shop</a>
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li className="flex justify-between border-b p-2">
                <a href="">Blog</a>
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li className="flex justify-between border-b p-2">
                <a href="">Products</a>
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
              <li className="flex justify-between  p-2">
                <a href="">Pages</a>
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
            </ul>
            <div className="log space-y-5  w-full p-4">
              <div className="w-full rounded-lg space-y-4 border p-5 text-[14px]">
                <div className="icon flex space-x-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[#3bb77e]"
                  />
                  <h3>Our Location</h3>
                </div>
                <div className="icon flex space-x-2">
                  <FontAwesomeIcon icon={faUser} className="text-[#3bb77e]" />
                  <h3>Login / SignUp</h3>
                </div>
                <div className="icon flex space-x-2">
                  <FontAwesomeIcon
                    icon={faHeadphones}
                    className="text-[#3bb77e]"
                  />
                  <h3>(+01) 8785785598</h3>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-[#253d4e] font-[600]">Follow Us</h3>

                <div className="flex space-x-3">
                  <div className="icon w-[25px] h-[25px] text-[14px ] text-nest-theme-menu-icon-color bg-nest-theme-allcate-bg-color rounded-full  grid place-items-center">
                    <FontAwesomeIcon icon={faHeadphones} />
                  </div>
                  <div className="icon w-[25px] h-[25px] text-[14px ] text-nest-theme-menu-icon-color bg-nest-theme-allcate-bg-color rounded-full  grid place-items-center">
                    <FontAwesomeIcon icon={faHeadphones} />
                  </div>
                  <div className="icon w-[25px] h-[25px] text-[14px ] text-nest-theme-menu-icon-color bg-nest-theme-allcate-bg-color rounded-full  grid place-items-center">
                    <FontAwesomeIcon icon={faHeadphones} />
                  </div>
                  <div className="icon w-[25px] h-[25px] text-[14px ] text-nest-theme-menu-icon-color bg-nest-theme-allcate-bg-color rounded-full  grid place-items-center">
                    <FontAwesomeIcon icon={faHeadphones} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
