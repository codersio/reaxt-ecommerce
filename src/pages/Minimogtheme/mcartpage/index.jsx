import React, {useState} from "react";
import Minimognavbar from "../../../components/Navbarcomponent/minimognavbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Minimogsingle from "../../../components/singleProduct/minimog"
import Minimogproduct from "../../../components/Newproductgrid/minimogproduct";
import Minimogfooter from "../../../components/Footer/minimogfooter";
import Minimodata from "../Minimodata.json";
import Minimogcart from "../../../components/productcart/minimogcart";
import {faStar} from "@fortawesome/free-regular-svg-icons";

export default function Mcartpage({}) {
    const [logmodal, setLogmodal] = useState(false)
    return (
        <div className="productsingle-page font-minimog-theme-font">
            <Minimognavbar Minimodata={Minimodata} logmodal={logmodal} setLogmodal={setLogmodal}/>

            <div className="bramcu grid place-items-center p-8 space-y-3 ">
                <h3 className="text-[42px] text-minimog-theme-title-color font-[400]">Shopping Cart</h3>
                <h3 className="flex space-x-4">
          <span className="text-minimog-theme-title-color text-[15px]">
            Home{" "}
          </span>
                    <span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[0.8rem]"/>
          </span>{" "}
                    <span className="text-minimog-theme-title-color text-[15px]">
            {" "}
                        Products
          </span>
                    <span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[0.8rem]"/>
          </span>{" "}
                    <span className="text-minimog-theme-title-color text-[15px]">
            {" "}
                        Fashions
          </span>
                    <span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[0.8rem]"/>
          </span>{" "}
                    <span className="text-minimog-theme-title-color text-[15px]">
            {" "}
                        Boats
          </span>
                </h3>
            </div>
            {/* END  OF NAVBAR bramcu */}

            <div className="grid place-items-center w-full">
                <div className=" md:w-[36rem] grid place-items-center w-full space-y-7">
                    <h3 className="text-[22px] text-minimog-theme-title-color">
                        {" "}
                        🔥 These products are limited, checkout within{" "}
                        <span className="font-[600]">01m 07s</span>
                    </h3>
                   <div className="space-y-3 grid place-items-center">
                       <h3 className="text-minimog-theme-title-color text-[16px]">
                           Buy $187.00 more to enjoy{" "}
                           <span className="text-[18px] font-[700] text-minimog-theme-title-color">
                FREE Shipping
              </span>
                       </h3>
                       <div className=" relative cartmodal-hr w-[32rem] h-[7px] bg-minimog-theme-default-bg-color rounded-md">
                           <div className="absolute border -top-[0.8rem] left-[2rem]
                grid place-items-center
                 rounded-full w-[30px]
                  h-[30px] bg-white border-minimog-theme-prgressbaractive-bg-color">
                               <FontAwesomeIcon
                                   icon={faStar}
                                   className="text-minimog-theme-prgressbaractive-bg-color"
                               />
                           </div>
                       </div>
                   </div>
                </div>
            </div>
            <div>
                <Minimogcart/>
            </div>


            <div className="px-8">
                <Minimogfooter/>
            </div>
        </div>
    );
}
