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
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../Font/globalfont.scss";
import React, { useState } from "react";

export default function Cosmetica() {
  const [menubar, setMenubar] = useState(false);
  const Hndle = () => {
    setMenubar(!menubar);
  };
  return (
    <div className="menubar font-cosmetica-theme-font">
      <div className=" md:block hidden electro-container font-Inter border-b-2">
        <div className="topbar  justify-between flex border">
          <div className="item flex space-x-3 text-[13px] text-cosmetica-theme-navbar-default-title-color">
            <div className="icon flex space-x-2  ">
              <ul className="flex space-x-4">
                <li className="flex space-x-3 border-r p-3">
                  Express Delivery in 3-7 Business days in All the World
                </li>
                <li className="flex space-x-3 border-r p-3">Help & Advice</li>
              </ul>
            </div>
          </div>
          <div className="item flex space-x-3 text-[13px] text-cosmetica-theme-navbar-default-title-color">
            <div className="icon flex space-x-2  ">
              <ul className="flex space-x-4">
                <li className="flex space-x-3 border-r border-l p-3">
                  <h3>English</h3>
                  <div className="w-[1px] h-[1rem] mt-1 bg-[#333e481a] "></div>
                </li>
                <li className="flex space-x-3 border-l p-3">
                  <h3>USD</h3>
                  <div className="w-[1px] h-[1rem] mt-1 bg-[#333e481a] "></div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="main-header flex space-x-12 p-5">
          <div className="item w-[35%]">
            <img
              className=""
              src="https://cdn.shopify.com/s/files/1/0511/8479/5845/files/logo_300x.png?v=1605000089"
              alt=""
            />
          </div>
          <div className="item w-[55%]  ">
            <div className="input-cat flex rounded-3xl justify-between p-1 w-[100%] border-cosmetica-theme-input-border-color border">
              <input
                type="text"
                placeholder="Enter ypur product"
                className="border-none w-[60%] text-[14px] text-cosmetica-theme-input-title-color"
              />
              <button className=" bg-cosmetica-theme-search-bg-color text-cosmetica-theme-search-title-color rounded-3xl  space-x-2 text-[14px] w-[30%] grid place-items-center  p-3  ">
                <div className="flex space-x-1">
                  <div>
                    {" "}
                    <FontAwesomeIcon icon={faSearch} />
                  </div>{" "}
                  <h3>Search</h3>
                </div>
              </button>
            </div>
          </div>

          <div className="item w-[30%] flex justify-center space-x-10 text-[25px]">
            <div className="icon relative">
              <div className=" text-center mt-1">
                <FaRegUser className="text-cosmetica-theme-navbar-default-icon-color text-[30px]" />
                <h3 className="text-[13px] text-cosmetica-theme-navbar-default-title-color font-[500] -m-2">
                  Account
                </h3>
                {/* <h3
                  className="bg-[#96ce8b] w-[20px] absolute top-0  right-0  h-[20px] rounded-full text-[14px] 
            grid place-items-center font-[600] text-white"
                >
                  0
                </h3> */}
              </div>
            </div>

            <div className="icon relative">
              <div className=" text-center mt-1">
                <FiHeart className="text-cosmetica-theme-navbar-default-icon-color text-[30px]" />
                <h3 className="text-[13px] text-cosmetica-theme-navbar-default-title-color font-[500] -m-2">
                  Wishlist
                </h3>
                {/* <h3
                  className="bg-[#96ce8b] w-[20px] absolute top-0  right-0  h-[20px] rounded-full text-[14px] 
            grid place-items-center font-[600] text-white"
                >
                  0
                </h3> */}
              </div>
            </div>
            {/* <div className="icon relative">
              <div className=" text-center  mt-1">
                <FiHeart className="text-[#7e7e7e]" />
                <h3 className="text-[13px] text-cosmetica-theme-navbar-default-title-color font-[500]">
                  Wishlist
                </h3>
              </div>
            </div> */}
            <div className="icon relative">
              <div className=" text-center mt-1">
                <HiOutlineShoppingBag className="text-cosmetica-theme-navbar-default-icon-color text-[30px]" />
                <h3 className="text-[13px] text-cosmetica-theme-navbar-default-title-color font-[500] -m-2">
                  Shop Cart
                </h3>
                <h3
                  className="bg-cosmetica-theme-count-number-bg-color w-[20px] absolute top-0  right-0  h-[20px] rounded-full text-[14px] 
            grid place-items-center font-[600] text-cosmetica-theme-count-number-title-color"
                >
                  0
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation flex justify-center pl-5 space-x-4">
          <div className="item w-[100%]  ">
            <ul className="flex text-cosmetica-theme-input-title-color space-x-11 justify-center p-3 text-[14px] font-[400]">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Catalog</a>
              </li>
              <li>
                <a href="">Gift Cards</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Features</a>
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
            grid place-items-center font-[600] text-white"
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
            grid place-items-center font-[600] text-white"
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
            <ul className="space-y-2 justify-center   p-4">
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
                  <div className="icon w-[25px] h-[25px] text-[14px ] text-white bg-[#3bb77e] rounded-full  grid place-items-center">
                    <FontAwesomeIcon icon={faHeadphones} />
                  </div>
                  <div className="icon w-[25px] h-[25px] text-[14px ] text-white bg-[#3bb77e] rounded-full  grid place-items-center">
                    <FontAwesomeIcon icon={faHeadphones} />
                  </div>
                  <div className="icon w-[25px] h-[25px] text-[14px ] text-white bg-[#3bb77e] rounded-full  grid place-items-center">
                    <FontAwesomeIcon icon={faHeadphones} />
                  </div>
                  <div className="icon w-[25px] h-[25px] text-[14px ] text-white bg-[#3bb77e] rounded-full  grid place-items-center">
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
