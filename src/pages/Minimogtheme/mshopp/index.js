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
import Minimogshop from "../../../components/shopall/minimogshop";
import Minimogproductshort from "../../../components/productshorting/minimog";
import Minimogpro from "../../../components/Newproductgrid/minimogproduct";
// import Minimogfilter from "../../../filtermodal/minimogfilter";
// import Minimogpro from "../../../Newproductgrid/minimogproduct";
// import Minimogproductshort from "../../../components/productshorting/minimog";
export default function Mcheckoutpage({}) {
    const [logmodal, setLogmodal] = useState(false)
    const [filterminimog, setFilterminimog] = useState(false);
    const [twouitem, setTwoitem] = useState(4);
    return (
        <div className="productsingle-page font-minimog-theme-font">
            <Minimognavbar Minimodata={Minimodata} logmodal={logmodal} setLogmodal={setLogmodal}/>

            <div className="bramcu grid place-items-center p-8 space-y-3 ">
                <h3 className="text-[42px] text-minimog-theme-title-color font-[400]">Shop</h3>
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


            <div className="shopdetails flex space-x-3 mt-8">
                <div className="item leftbar w-[25%] md:block hidden">
                    <Minimogshop />
                </div>
                <div className="right rightbar w-[75%]">
                    <Minimogproductshort setTwoitem={setTwoitem} twouitem={twouitem} />
                    <Minimogpro Minimodata={Minimodata} twouitem={twouitem} />
                </div>
            </div>

            <div className="px-8">
                <Minimogfooter/>
            </div>
        </div>
    );
}
