import React, { useState } from "react";
import PropTypes from "prop-types";
import "./minimog.scss";
import styles from "./minimog.module.scss";
import { HiOutlineMinus } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import { TbArrowsLeftRight, TbTruckDelivery } from "react-icons/tb";
import { AiOutlineQuestionCircle, AiOutlineShareAlt } from "react-icons/ai";
import { MdCardMembership } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faStar } from "@fortawesome/free-regular-svg-icons";
import { FaRegEye } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./animated.scss";
import Minimodata from "../../../pages/Minimogtheme/Minimodata.json";
export default function Minimog({ Minimodata }) {
  const [thumbsclick, setThumbs] = useState(0);
  const [tabsd, setTabs] = useState(1);
  return (
    <div className="container font-minimog-theme-font p-3 md:p-12 ">
      <div className="container-child md:flex md:space-x-20">
        <div className="row md:w-[50%] ">
          <div className="productzoom flex ">
            <div className="item thmbs w-[25%] space-y-2">
              {Minimodata.productsingleimage.map((imt, idx) => (
                <img
                  key={idx}
                  onClick={() => setThumbs(idx)}
                  className={
                    idx == thumbsclick
                      ? "w-[68%] border border-black"
                      : "w-[68%]"
                  }
                  src={imt.image}
                  alt=""
                />
              ))}
            </div>
            <div className="bg-thumbs overflow-hidden relative group group-hover:opacity-50 ">
              <img
                className="animated zoomInRight"
                onTouchMove={() => {
                  const isLeftside = thumbsclick === 0;
                  const newSlide = isLeftside
                    ? Minimodata.productsingleimage.length - 1
                    : thumbsclick - 1;
                  setThumbs(newSlide);
                }}
                src={Minimodata.productsingleimage[thumbsclick].image}
                alt=""
              />

              <div>
                <div
                  onClick={() => {
                    const isLeftside = thumbsclick === 0;
                    const newSlide = isLeftside
                      ? Minimodata.productsingleimage.length - 1
                      : thumbsclick - 1;
                    setThumbs(newSlide);
                  }}
                  className="w-[45px] h-[45px] text-[18px]
               grid place-items-center rounded-full
                group-hover:opacity-100 bg-white shadow-2xl
                 absolute duration-500 top-[50%] group-hover:left-6 -left-[18rem] "
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div
                  onClick={() => {
                    const rightSlide =
                      thumbsclick === Minimodata.productsingleimage.length - 1;
                    const newSlide = rightSlide ? 0 : thumbsclick + 1;
                    setThumbs(newSlide);
                  }}
                  className="w-[45px] h-[45px] text-[18px]
               grid group-hover:opacity-100
                place-items-center rounded-full duration-500
                 bg-white shadow-2xl absolute top-[50%]
                 group-hover:right-6 -right-[28rem]"
                >
                  {" "}
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row md:w-[50%] md:space-y-6 md:mt-5">
          <div className="title flex justify-between">
            <div className="item  text-2xl text-minimog-theme-title-color">
              <h3>Android 9.0 Tablet MT8163 Quad Core</h3>
            </div>
            <div className="item">
              <div className="wish border grid place-items-center  rounded-full w-[40px] h-[40px]">
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="pr-re flex justify-between">
            <div className="item  flex space-x-2">
              <h3 className="text-[18px] text-minimog-theme-mrp-color">
                {" "}
                <s>$39.00</s>
              </h3>
              <h3 className="text-2xl text-minimog-theme-price-color">
                $138.29
              </h3>
            </div>
            <div className="item flex space-x-3">
              <div className="r text-[14px] text-[#666]">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h3>(0 review)</h3>
            </div>
          </div>
          <div className="view mt-5 flex  space-x-2">
            <div className="grid place-items-center">
              <ImEye className="text-[1rem]" />
            </div>
            <h3 className="">
              {" "}
              <span className="text-text-minimog-theme-title-color font-semibold ">
                30
              </span>{" "}
              people are viewing this right now
            </h3>
          </div>
          <div className="color space-y-3">
            <h3 className="text-[16px] font-[600]">
              Color : <span className="font-[400]">Black</span>
            </h3>

            <div className="cplpr flex space-x-3">
              <div className="item w-[35px] bg-blue-600 rounded-full h-[35px]"></div>
              <div className="item w-[35px] bg-green-600 rounded-full h-[35px]"></div>
            </div>
          </div>
          <div className="size space-y-3">
            <h3 className="text-[16px] font-[600]">
              Size : <span className="font-[400]">36</span>
            </h3>

            <div className="cplpr flex space-x-3">
              <div className="s w-[45px] h-[45px] rounded-md hover:border-black border grid place-items-center">
                36
              </div>
            </div>
          </div>

          <div className="qty mt-3 space-y-4">
            <h3 className="text-[16px] text-minimog-theme-title-color">
              Quantity
            </h3>
            <div className="flex space-x-5">
              <div
                className="   border-minimog-theme-border-color
                   rounded-md  bottom-2 w-[30%] 
                      px-3 h-[42px]    bg-minimog-theme-default-bg-color  
                       text-minimog-theme-title-color   flex text-xl  
                        leading-9    justify-between text-center   "
                // onClick={ClickButton}
              >
                <div
                  className="  cursor-pointer
                      
                      text-sm grid place-items-center "
                  // style={{ marginTop: "-8px" }}
                >
                  <HiOutlineMinus />
                </div>
                <div className="shrink block  w-16 text-minimog-theme-title-color ">
                  <div className="grid place-items-center text-[1rem] mt-[0.3rem] font-medium ">
                    1
                  </div>
                </div>{" "}
                <div
                  // onClick={incrymentQty}
                  className=" grid place-items-center
                     cursor-pointer text-minimog-theme-title-color"
                >
                  <BsPlus />
                </div>
              </div>
              <input
                type="button"
                value="Add to cart"
                className="w-full font-[500] rounded-md border border-minimog-theme-border-color text-center text-minimog-theme-button-title-color text-sm p-3"
              />
            </div>
          </div>

          <div className="b-n mt-3">
            <input
              type="button"
              value="BUY NOW"
              className="w-full rounded-md bg-minimog-theme-buynow-bg-color text-center text-minimog-theme-button-bg-title-color text-sm p-3"
            />
          </div>

          <div className="com-as flex  text-lg space-x-12 mt-3">
            <div className="item flex space-x-2">
              <div className="grid place-items-center">
                {" "}
                <TbArrowsLeftRight />
              </div>
              <h3 className="text-font-[400] text-minimog-theme-title-color font-[400]">
                Compare
              </h3>
            </div>
            <div className="item flex space-x-2">
              <div className="grid place-items-center">
                <AiOutlineQuestionCircle />
              </div>
              <h3 className="text-font-[400] text-minimog-theme-title-color font-[400]">
                Ask a Question
              </h3>
            </div>
            <div className="item flex space-x-2">
              <div className="grid place-items-center">
                <AiOutlineShareAlt />
              </div>
              <h3 className="text-font-[400] text-minimog-theme-title-color font-[400]">
                Share
              </h3>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="del mt-3">
            <div className="item flex space-x-10">
              <h3 className="text-lg flex space-x-2 font-[400] text-minimog-theme-title-color">
                <div className="grid place-items-center">
                  {" "}
                  <TbTruckDelivery />
                </div>{" "}
                <h3>Estimated Delivery:</h3>
              </h3>
              <h3 className="ml-[75px]">01 - 08 Sep, 2022</h3>
            </div>
            <div className="item space-x-10 flex">
              <h3 className="text-lg flex space-x-2 font-[400] text-minimog-theme-title-color ">
                <div className="grid place-items-center">
                  <MdCardMembership />
                </div>{" "}
                <h3> Free Shipping & Returns:</h3>
              </h3>
              <h3>On all orders over $200.00</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 ">
        <ul className="flex  space-x-16 border-b ">
          {Minimodata.tabsdes.map((item) => (
            <li
              onClick={() => setTabs(item.id)}
              className={
                tabsd == item.id
                  ? "text-[18px] font-[600] cursor-pointer duration-1000 border-b border-black py-2"
                  : " cursor-pointer py-2 text-minimog-theme-default-title-color font-[600] text-[18px]"
              }
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          {Minimodata.tabsdes.map((des) => (
            <div>
              {tabsd == des.id ? (
                <div className="space-y-5">
                  <h3 className="text-[24px] font-[600] text-minimog-theme-title-color">
                    {des.deta.title}
                  </h3>
                  <p>{des.deta.description}</p>
                  {/* <div className="flex space-x-4">
                    {des.deta.image.map((im) => (
                      <img src={im.image} alt="" />
                    ))}
                  </div> */}
                </div>
              ) : (
                <p></p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
