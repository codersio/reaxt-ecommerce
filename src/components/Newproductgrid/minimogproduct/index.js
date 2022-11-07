import { faEye, faShare, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./style.scss";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { ImEye } from "react-icons/im";
import { Link } from "gatsby";
import Minimodata from "../../../pages/Minimogtheme/Minimodata.json";
import { WhatsappShareButton } from "react-share";
export default function Minimogpro({
  minimog,
  twouitem,
  Minimodata,
  handleView,
}) {
  const [colorproduct, setColorproduct] = useState(1);

  return (
    <>
      {Minimodata ? (
        // DYNAMIC WITH PROPS WISE
        <div
          className={
            twouitem == 2
              ? "minimog-product grid grid-cols-2 md:grid-cols-2 font---minimog-theme-font"
              : twouitem == 3
              ? "minimog-product grid grid-cols-2 md:grid-cols-3 font---minimog-theme-font"
              : twouitem == 4
              ? "minimog-product grid grid-cols-2 md:grid-cols-4 font---minimog-theme-font"
              : "minimog-product grid grid-cols-2 md:grid-cols-5 font---minimog-theme-font"
          }
        >
          {Minimodata.product.map((item) => (
            <div className="cols-item space-y-3 p-3 ">
              <div
                className="image overflow-hidden group
               relative flex justify-center group-hover:opacity-50"
              >
                {item.colorid == null ? (
                  <img
                    className="scale-125 hover:scale-150 duration-300 "
                    src={item.image}
                    alt=""
                  />
                ) : (
                  item.color.map((col) =>
                    colorproduct == col.id ? (
                      <img
                        className="scale-125 hover:scale-150 duration-300"
                        src={col.image}
                        alt=""
                      />
                    ) : (
                      <div></div>
                    )
                  )
                )}

                {item.showasProduct == true ? (
                  item.colorid == null ? (
                    <input
                      type="button"
                      value="Add To Cart"
                      className="w-[80%] opacity-0 -bottom-[28rem] 
            duration-300 group-hover:opacity-100 absolute rounded-lg 
            font-[500] group-hover:bottom-5 
              bg-minimog-theme-card-cartbutton-bg-color 
              text-minimog-theme-cartbutton-title-color p-2"
                    />
                  ) : (
                    <a
                      href=""
                      type="button"
                      className="w-[80%] opacity-0 -bottom-[28rem] text-center
            duration-300 group-hover:opacity-100 absolute rounded-lg font-[500] group-hover:bottom-5
              bg-minimog-theme-card-cartbutton-bg-color text-minimog-theme-cartbutton-title-color p-2"
                    >
                      <Link to="/Minimogtheme/minimogsingle">
                        Select Options
                      </Link>
                    </a>
                  )
                ) : (
                  <div
                    className="w-[80%] opacity-0 -bottom-[28rem] text-center
            duration-300 group-hover:opacity-100 absolute rounded-lg font-[500] group-hover:bottom-5
              bg-minimog-theme-card-cartbutton-bg-color text-minimog-theme-cartbutton-title-color p-2 "
                  >
                    <WhatsappShareButton
                      url={
                        "http://localhost:8000/Minimogtheme/Homepage/" +
                        item.slug
                      }
                    >
                      <div className="flex justify-center space-x-2">
                        <img
                          className="w-[2rem]"
                          src="https://www.pngitem.com/pimgs/m/40-404856_transparent-whatsapp-icon-transparent-png-circle-logo-whatsapp.png"
                          alt=""
                        />{" "}
                        <h3 className="grid place-items-center">Enquery Now</h3>
                      </div>
                    </WhatsappShareButton>
                  </div>
                )}

                <div className="icon space-y-3 absolute -right-[25rem] duration-300 group-hover:right-4 top-6 opacity-0 group-hover:opacity-100">
                  <div
                    className="item text-minimog-theme-title-color bg-minimog-theme-default-button-bg-color hover:bg-minimog-theme-default-bg-hover-color
             hover:text-minimog-theme-title-hover-color rounded-full place-items-center text-[16px] grid w-[45px] h-[45px]"
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div
                    onClick={handleView}
                    className="item text-minimog-theme-title-color bg-minimog-theme-default-button-bg-color hover:bg-minimog-theme-default-bg-hover-color
             hover:text-minimog-theme-title-hover-color rounded-full place-items-center text-[16px] grid w-[45px] h-[45px]"
                  >
                    <ImEye />
                  </div>
                  <div
                    className="item text-minimog-theme-title-color bg-minimog-theme-default-button-bg-color hover:bg-minimog-theme-default-bg-hover-color
             hover:text-minimog-theme-title-hover-color rounded-full place-items-center text-[16px] grid w-[45px] h-[45px]"
                  >
                    <RiArrowLeftRightFill />
                  </div>
                </div>
              </div>
              <div className="p-t space-y-1">
                <h3 className="text-minimog-theme-title-color font-[500] text-[18px]">
                  {item.title}
                </h3>
                <h3 className="text-minimog-theme-price-color">
                  <span className=" text-[14px] text-minimog-theme-mrp-color">
                    {" "}
                    <s>{item.Mrp}</s>{" "}
                  </span>{" "}
                  {item.storePrice}
                </h3>
              </div>

              <div className="cplpr flex space-x-3">
                {item.colorid == null ? (
                  <div></div>
                ) : (
                  item.color.map((col) => (
                    <div
                      onClick={() => setColorproduct(col.id)}
                      className={
                        colorproduct == col.id
                          ? "w-[28px] grid place-items-center border-black h-[28px] border rounded-full "
                          : "w-[28px] grid place-items-center border-none h-[28px]  rounded-full"
                      }
                    >
                      {" "}
                      <div
                        style={{ backgroundColor: `${col.title}` }}
                        className={`item w-[18px]  rounded-full h-[18px]`}
                      ></div>
                    </div>
                  ))
                )}

                {/* <div className="item w-[25px] bg-blue-600 rounded-full h-[25px]"></div>
                <div className="item w-[25px] bg-green-600 rounded-full h-[25px]"></div> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // BYDEFAULT PRODUCT SHOW ONLY CHECK PURPOSE
        <div className="minimog-product grid grid-cols-2 md:grid-cols-5 font---minimog-theme-font">
          <div className="cols-item space-y-3 p-3">
            <div className="image overflow-hidden group relative flex justify-center group-hover:opacity-50">
              <img
                className="scale-100 hover:scale-110 duration-300 "
                src="https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_6-450x600.jpg"
                alt=""
              />

              <input
                type="button"
                value="Add To Cart"
                className="w-[80%] opacity-0 -bottom-[28rem] 
            duration-300 group-hover:opacity-100 absolute rounded-lg font-[500] group-hover:bottom-5 
              bg-minimog-theme-card-cartbutton-bg-color text-minimog-theme-cartbutton-title-color p-2"
              />

              <div className="icon space-y-3 absolute -right-[25rem] duration-300 group-hover:right-4 top-6 opacity-0 group-hover:opacity-100">
                <div
                  className="item text-minimog-theme-title-color bg-minimog-theme-default-button-bg-color hover:bg-minimog-theme-default-bg-hover-color
             hover:text-minimog-theme-title-hover-color rounded-full place-items-center text-[16px] grid w-[45px] h-[45px]"
                >
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div
                  className="item text-minimog-theme-title-color bg-minimog-theme-default-button-bg-color hover:bg-minimog-theme-default-bg-hover-color
             hover:text-minimog-theme-title-hover-color rounded-full place-items-center text-[16px] grid w-[45px] h-[45px]"
                >
                  <ImEye />
                </div>
                <div
                  className="item text-minimog-theme-title-color bg-minimog-theme-default-button-bg-color hover:bg-minimog-theme-default-bg-hover-color
             hover:text-minimog-theme-title-hover-color rounded-full place-items-center text-[16px] grid w-[45px] h-[45px]"
                >
                  <RiArrowLeftRightFill />
                </div>
              </div>
            </div>
            <div className="p-t space-y-1">
              <h3 className="text-minimog-theme-title-color font-[500] text-[18px]">
                Wool-blend Jacket
              </h3>
              <h3 className="text-minimog-theme-price-color">
                <span className=" text-[14px] text-minimog-theme-mrp-color">
                  {" "}
                  <s>$39.00</s>{" "}
                </span>{" "}
                $29.00
              </h3>
            </div>

            <div className="cplpr flex space-x-3">
              <div className="w-[28px] grid place-items-center border-black h-[28px] border rounded-full ">
                {" "}
                <div className="item w-[18px] bg-black rounded-full h-[18px]"></div>
              </div>
              <div className="item w-[25px] bg-blue-600 rounded-full h-[25px]"></div>
              <div className="item w-[25px] bg-green-600 rounded-full h-[25px]"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
