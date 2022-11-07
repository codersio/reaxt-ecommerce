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
import Minimogcheckout from "../../../components/Productcheckout/minimogcheckout";
export default function Mcheckoutpage({}) {
    const [logmodal, setLogmodal] = useState(false)
    return (
        <div className="productsingle-page font-minimog-theme-font">
            <Minimognavbar Minimodata={Minimodata} logmodal={logmodal} setLogmodal={setLogmodal}/>

            <div className="bramcu grid place-items-center p-8 space-y-3 ">
                <h3 className="text-[42px] text-minimog-theme-title-color font-[400]">Checkout</h3>
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


<div className="px-48">
    <Minimogcheckout/>
</div>

            <div className="px-8">
                <Minimogfooter/>
            </div>
        </div>
    );
}
