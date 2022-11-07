import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import { VscHeart } from "react-icons/vsc";
import Lafakesingleproduttheme from "../../../pages/lafakatheme/singleproductpage";
import "./style.scss";
export default function Lafakaproduct({ Lafak }) {
  return (
    <div className="lafaka-product font-lafaka-theme-font p-5">
      <div className="lafaka-container grid gap-6 grid-cols-1 md:grid-cols-4 overflow-hidden">
        {Lafak ? (
          Lafak.product.map((i) => (
            <div className="item space-y-2">
              <div className="image border rounded-lg relative">
                <img className=" rounded-lg" src={i.image} alt="" />
                {i.productSingle ? (
                  <h3
                    className=" absolute top-2 left-4 font-[600]
             text-lafaka-theme-price-color text-[16px] bg-lafaka-theme-price-bg-color p-2 rounded-lg"
                  >
                    <span className="text-[12.8px] ">{i.priceSign}</span>
                    {i.storePriceT}
                    <sub className=" bottom-1 text-[12px]">
                      .{i.storePriceP}
                    </sub>
                  </h3>
                ) : (
                  ""
                )}

                <div className=" absolute top-3 right-3 review text-lafaka-theme-review-color text-[14px]">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <VscHeart className="absolute bottom-4 right-5 text-[1.4rem] text-lafaka-theme-wishlist-icon-bg-color" />
              </div>
              <div className="title text-center py-3 space-y-2 ">
                <h3 className=" text-[17px] font-[500] text-lafaka-theme-title-color">
                  <Link
                    to={`/lafakatheme/singleproductpage/`}
                    component={Lafakesingleproduttheme}
                  >
                    {" "}
                    {i.title}
                  </Link>
                </h3>
                {i.productSingle ? (
                  <>
                    <p className="text-lafaka-theme-description-color text-[14px]">
                      {i.description}
                    </p>
                    <input
                      type="button"
                      value="Order now"
                      className="uppercase mt-2 w-[37%] text-[12px] text-lafaka-theme-button-title-color p-1 rounded-3xl border-2 border-lafaka-theme-border-color"
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="item space-y-2">
            <div className="image border rounded-lg relative">
              <img
                className=" rounded-lg"
                src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger17-440x440.jpg"
                alt=""
              />
              <h3
                className=" absolute top-2 left-4 font-[600]
             text-lafaka-theme-price-color text-[16px] bg-lafaka-theme-price-bg-color p-2 rounded-lg"
              >
                <span className="text-[12.8px] ">$</span>11
                <sub className=" bottom-1 text-[12px]">.99</sub>
              </h3>

              <div className=" absolute top-3 right-3 review text-lafaka-theme-review-color text-[14px]">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <VscHeart className="absolute bottom-4 right-5 text-[1.4rem] text-lafaka-theme-wishlist-icon-bg-color" />
            </div>
            <div className="title text-center py-3 space-y-2 ">
              <h3 className=" text-[17px] font-[500] text-lafaka-theme-title-color">
                Bacon Cheeseburger
              </h3>
              <p className="text-lafaka-theme-description-color text-[14px]">
                Smoked brisket, tender ribs, smoked sausage, bacon & cheddar
                with lettuce, tomato, house BBQ & ranch.
              </p>
              <input
                type="button"
                value="Order now"
                className="uppercase mt-2 w-[37%] text-[12px] text-lafaka-theme-button-title-color p-1 rounded-3xl border-2 border-lafaka-theme-border-color"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
