import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa0,
  faGreaterThan,
  faChevronRight,
  faChevronLeft,
  faAngleRight,
  faAngleLeft,
  faLessThan,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
export default function Singleproduct17() {
  return (
    <div className="container p-2">
      <div className="container-child md:flex md:space-x-9">
        <div className="row md:w-[80%]">
          <Carousel autoPlay={true} showThumbs={false}>
            <img
              className="md:w-[50px]"
              src="https://cdn.shopify.com/s/files/1/0511/8479/5845/products/11_900x900.jpg?v=1605513224"
              alt=""
              srcset=""
            />
            <img
              className="md:w-[50px]"
              src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-7-600x540.jpg"
              alt=""
              srcset=""
            />
          </Carousel>

          <div class=" md:block hidden mx-auto mt-8 text-oscuro">
            <div class="flex flex-col justify-center w-full">
              <div>
                <div class="relative mb-4">
                  <input type="checkbox" id="toggle1" class="toggle hidden" />
                  <label
                    class=" border-b title block font-bold bg-white p-4 cursor-pointer"
                    for="toggle1"
                  >
                    DESCRIPTION
                  </label>
                  <div class="content bg-white overflow-hidden">
                    <p class="p-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </div>
                </div>
                <div class="relative mb-4">
                  <input type="checkbox" id="toggle2" class="toggle hidden" />
                  <label
                    class="border-b title block font-bold bg-white p-4 cursor-pointer"
                    for="toggle2"
                  >
                    CUSTOMER REVIEWS
                  </label>
                  <div class="content bg-white overflow-hidden">
                    <p class="p-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </div>
                </div>
                <div class="relative mb-4">
                  <input type="checkbox" id="toggle3" class="toggle hidden" />
                  <label
                    class=" border-b title block font-bold bg-white p-4 cursor-pointer"
                    for="toggle3"
                  >
                    DELIVERY POLICY
                  </label>
                  <div class="content bg-white overflow-hidden">
                    <p class="p-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body-cls md:w-[60%]">
          <div class=" md:hidden block mx-auto mt-8 text-oscuro">
            <div class="flex flex-col justify-center w-full">
              <div>
                <div class="relative mb-4">
                  <input type="checkbox" id="toggle1" class="toggle hidden" />
                  <label
                    class=" border-b title block font-bold bg-white p-4 cursor-pointer"
                    for="toggle1"
                  >
                    DESCRIPTION
                  </label>
                  <div class="content bg-white overflow-hidden">
                    <p class="p-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </div>
                </div>
                <div class="relative mb-4">
                  <input type="checkbox" id="toggle2" class="toggle hidden" />
                  <label
                    class="border-b title block font-bold bg-white p-4 cursor-pointer"
                    for="toggle2"
                  >
                    CUSTOMER REVIEWS
                  </label>
                  <div class="content bg-white overflow-hidden">
                    <p class="p-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </div>
                </div>
                <div class="relative mb-4">
                  <input type="checkbox" id="toggle3" class="toggle hidden" />
                  <label
                    class=" border-b title block font-bold bg-white p-4 cursor-pointer"
                    for="toggle3"
                  >
                    DELIVERY POLICY
                  </label>
                  <div class="content bg-white overflow-hidden">
                    <p class="p-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="title space-y-5">
            <h3 className="text-black font-semibold text-2xl font-[Montserrat,HelveticaNeue,Helveti]">
              Diamond Halo Stud Magnis
            </h3>
            <div className="star  flex space-x-3 ">
              <div className="text-[0.8rem] space-x-2 text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="rive text-slate-300">(32 reviews)</div>
            </div>
          </div>

          <div className="sk  md:p-1 p-5  font-[Josefin Sans, sans-serif] mt-8">
            <table className="w-full text-base space-y-3">
              <tr>
                <td className="w-[20%] text-xs ">
                  <h3 className="text-[#222] font-semibold font-[Montserrat,HelveticaNeue,Helveti] text-[12px]">
                    Available:
                  </h3>
                </td>
                <td className="text-[#6BB853] font-semibold font-[Montserrat,HelveticaNeue,Helveti] text-[11px]">
                  INSTOCK
                </td>
              </tr>
              {/* <tr>
                <td className="w-[20%] text-xs ">
                  <h3 className="-mt-5">TAGS:</h3>
                </td>
                <td>
                  $101 - $200, Acessories, Makeup, Men, Police, Vendor Levi's,
                  Women
                </td>
              </tr> */}
              <div className="h-2"></div>
              <tr className="mt-9">
                <td className="md:w-[20%] text-xs ">
                  <h3 className="text-[#222] font-semibold font-[Montserrat,HelveticaNeue,Helveti] text-[12px]">
                    SKU:
                  </h3>
                </td>
                <td className="text-red-600 font-semibold text-sm font-[Montserrat,HelveticaNeue,Helveti]">
                  YX135-01{" "}
                </td>
              </tr>
              <div className="h-2"></div>
              <tr className="mt-9">
                <td className="md:w-[20%] text-xs ">
                  <h3 className="text-[#222] font-semibold font-[Montserrat,HelveticaNeue,Helveti] text-[12px]">
                    CATE:
                  </h3>
                </td>
                <td className=" font-semibold text-sm font-[Montserrat,HelveticaNeue,Helveti] text-[#999]">
                  New Arrivals, Shop Makeup{" "}
                </td>
              </tr>
            </table>
          </div>
          <div className="desc text-[#666] mt-10  font-[Montserrat,HelveticaNeue,Helveti] font-thin text-[14px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex
            non nesciunt odio facilis, possimus architecto asperiores a at
            debitis qui cum sint harum quam cupiditate accusamus in minima
            omnis.
          </div>

          <div className="cat-p border mt-5 rounded-md">
            <div className="price p-5 bg-gray-200">
              <h3 className=" text-green-500   font-[Montserrat,HelveticaNeue,Helveti]  text-2xl font-semibold">
                $325{" "}
                <span className="ml-16 text-base text-slate-300">
                  {" "}
                  <s>$362.00</s>
                </span>
              </h3>
            </div>
            <hr />
            <div className="p-5 ">
              <div className="view  mt-5 bg-white  ">
                <div className=" qty w-full flex space-x-2    ">
                  <div className="md:w-[32%] w-full flex    ">
                    <div className="item border text-3xl  w-[25%] text-center p-3">
                      -
                    </div>
                    <div className="item bg-[#f3f3f3] flex-shrink text-xl p-3  w-[95%] text-center">
                      2
                    </div>
                    <div className="item border text-center p-3 text-2xl w-[25%]">
                      +
                    </div>
                  </div>
                  <input
                    type="button"
                    value="Add to Wishlist"
                    className="w-full md:w-[25%] font-[Montserrat,HelveticaNeue,Helveti] p-3 bg-[#f3f3f3] text-center text-[15px] text-black"
                  />
                </div>

                <div className="mt-3 space-y-3">
                  <input
                    type="button"
                    value="ADD TO CART"
                    className="w-full p-3 font-[Montserrat,HelveticaNeue,Helveti] border border-black text-center text-[10px] text-black"
                  />
                  <input
                    type="button"
                    value="BUY NOW"
                    className="w-full p-3 font-[Montserrat,HelveticaNeue,Helveti] bg-black text-center text-[10px] text-white"
                  />
                </div>
              </div>
              {/* <div className="chek space-y-3">
                <h3 className="text-slate-600 text-sm font-semibold mt-3">
                  GUARANTEED SAFE CHECKOUT:
                </h3>
                <img
                  src="https://cdn.shopify.com/s/files/1/0560/9393/3729/files/payment_700x.png?v=1620896411"
                  alt=""
                />
              </div>

              <h3 className="text-slate-500 text-sm font-semibold mt-4">
                ADD TO WISHLIST
              </h3>
              <h3 className="text-slate-500 text-sm  mt-4">
                Orders ship within 5 to 10 business days.
              </h3> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
