import {
  faB,
  faBagShopping,
  faBarsStaggered,
  faHeart,
  faCartShopping,
  faAngleDown,
  faLocationDot,
  faHeadphones,
  faBars,
  faCartFlatbed,
  faLock,
  faMessage,
  faSearch,
  faStar,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../Font/globalfont.scss";
import React, { useState } from "react";
// import "./menu.scss";
import Loginmodal from "../../logincomnent/loginmodal";
export default function Leonavbar() {
  const [menubar, setMenubar] = useState(false);
  const Hndle = () => {
    setMenubar(!menubar);
  };
  return (
    <div className="menybar font-leo-theme-font">
      {/* <Loginmodal /> */}
      <div className="topbar md:flex hidden p-4 pl-28 pr-28 justify-between  border bg-black">
        <div className="item flex space-x-3 text-[13px] text-leo-theme-topmenu-title-color">
          <div className="icon flex space-x-2  ">
            <ul className="flex space-x-4">
              <li className="flex space-x-3">
                <a href="">Hello welcome to our store</a>
                <div className="w-[1px] h-[1rem] mt-1 bg-leo-theme-topmenu-title-color "></div>
              </li>
              <li className="flex space-x-3">
                <a href="" className="flex space-x-2">
                  <div>
                    <FontAwesomeIcon icon={faMessage} />
                  </div>
                  <h3>info@your domain.com</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item flex space-x-3 text-[13px] text-leo-theme-topmenu-title-color">
          <div className="icon flex space-x-2  ">
            <ul className="flex space-x-4 uppercase">
              <li className="flex space-x-3">
                <a href="" className="flex space-x-2">
                  <div>
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                  <h3>Sign in</h3>
                </a>
                <div className="w-[1px] h-[1rem] mt-1 bg-leo-theme-topmenu-title-color "></div>
              </li>
              <li className="flex space-x-3">
                <a href="" className="flex space-x-2">
                  <div>
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                  <h3>compare</h3>
                </a>
                <div className="w-[1px] h-[1rem] mt-1 bg-leo-theme-topmenu-title-color "></div>
              </li>
              <li className="flex space-x-3">
                <a href="" className="flex space-x-2">
                  <div>{/* <FontAwesomeIcon icon={faLock} /> */}</div>
                  <h3>currency</h3>
                </a>
                <div className="w-[1px] h-[1rem] mt-1 bg-leo-theme-topmenu-title-color "></div>
              </li>
              <li className="flex space-x-3">
                <a href="" className="flex space-x-2">
                  <div>{/* <FontAwesomeIcon icon={faLock} /> */}</div>
                  <h3>english</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className=" pl-20 shadow-lg  pr-20 md:flex
       hidden minimog-nav justify-center  bg-white p-4 space-x-6 w-full"
      >
        <div className="item grid place-items-center">
          <img
            className=" ml-10"
            src="https://demo1.leotheme.com/leo_wooden_demo/img/leo-wooden-prestashop-17-logo-1520843277.jpg"
            alt=""
          />
        </div>
        <div className="item  grid place-items-center     w-[50%] ">
          <div className="nav ">
            <ul
              className="flex uppercase 
            space-x-8  mt-2 text-[15px] text-leo-theme-menu-color font-[500]"
            >
              <li className="dropdown">
                <p>Home</p>
                <div className="dropdown-menu text-leo-theme-menu-color font-[600] space-x-80  p-10 w-full left-0 shadow-xl hidden  right-0 bg-white absolute">
                  <div className="item space-y-2 text-center ">
                    <h3>menu1</h3>
                    <ul className="space-y-5">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item space-y-2 ">
                    <h3>menu1</h3>
                    <ul className="space-y-5">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item space-y-2 ">
                    <h3>menu1</h3>
                    <ul className="space-y-5">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item space-y-2 ">
                    <h3>menu1</h3>
                    <ul className="space-y-5">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Home</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href=""></a>Shop
              </li>
              <li>
                <a href=""></a>Blog
              </li>
              <li>
                <a href=""></a>Products
              </li>
              <li>
                <a href=""></a>Pages
              </li>
            </ul>
          </div>
        </div>
        <div className="item  w-[25%] text-[18px] ">
          <div className="mt-3 flex  justify-center space-x-8 text-leo-theme-menu-icon-color">
            {/* <div className="">
              <FontAwesomeIcon icon={faUser} />
            </div> */}
            <div className="  ">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="bdg relative">
              <FontAwesomeIcon icon={faCartShopping} />
              <div className="bg-leo-theme-icon-number-color top-0 right-0 left-3 bottom-2 absolute text-[14px] font-[500]  rounded-full text-leo-theme-icon-number-text-color w-[20px] text-center h-[20px] ">
                <h3 className="text-center "> 0</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden shadow-sm relative block mobilemenu pl-10 pr-10 p-2  justify-center bg-[#fff]">
        <div className="row p-3">
          <div className="image">
            <img
              className="w-[35%] block m-auto"
              src="https://demo1.leotheme.com/leo_wooden_demo/img/leo-wooden-prestashop-17-logo-1520843277.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="row flex justify-between ">
          <div className="item  space-x-6 flex">
            <div
              className="humbar border p-1 w-[95%] grid place-items-center h-[80%] border-black"
              onClick={Hndle}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>

          <div className="item ">
            <div className="mt-1 flex justify-center space-x-5">
              {" "}
              <div className="icon relative">
                <FontAwesomeIcon icon={faSearch} className="text-[#7e7e7e]" />
              </div>
              <div className="icon relative">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-[#7e7e7e]"
                />
                <h3
                  className="bg-[#33c9db] w-[15px] absolute top-0  right-0 left-3 h-[15px] rounded-full text-[10px] 
            grid place-items-center font-[600] text-white"
                >
                  0
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            menubar
              ? " h-[100vh] bg-opacity-75 mobile absolute top-0 bottom-0 border right-0 left-0 bg-black"
              : "hidden"
          }
        >
          <div className=" h-[100vh]  nav-menu  absolute top-0  border bottom-0   left-0 right-28 bg-white">
            <div className="row flex justify-end  p-4">
              <div
                className=" text-right text-[12px] grid place-items-center w-[20px] h-[20px] bg-slate-200 rounded-full text-black"
                onClick={Hndle}
              >
                <FontAwesomeIcon icon={faXmark} />
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
            <ul className="space-y-2 justify-center text-leo-theme-menu-color   p-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
