import React, {useState} from "react";
import Minimognavbar from "../../../components/Navbarcomponent/minimognavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Minimogsingle from "../../../components/singleProduct/minimog"
import Minimogproduct from "../../../components/Newproductgrid/minimogproduct";
import Minimogfooter from "../../../components/Footer/minimogfooter";
import Minimodata from "../Minimodata.json";
export default function Msingle({  }) {
    const [logmodal,setLogmodal]=useState(false)
    return (
        <div className="productsingle-page font-minimog-theme-font">
            <Minimognavbar Minimodata={Minimodata} logmodal={logmodal} setLogmodal={setLogmodal}/>

            <div className="bramcu grid place-items-center p-8 border ">
                {/* <h3 className="text-[33.6px] text-minimog-theme-title-color">Shop</h3> */}
                <h3 className="flex space-x-4">
          <span className="text-minimog-theme-title-color text-[15px]">
            Home{" "}
          </span>
                    <span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[0.8rem]" />
          </span>{" "}
                    <span className="text-minimog-theme-title-color text-[15px]">
            {" "}
                        Products
          </span>
                    <span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[0.8rem]" />
          </span>{" "}
                    <span className="text-minimog-theme-title-color text-[15px]">
            {" "}
                        Fashions
          </span>
                    <span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[0.8rem]" />
          </span>{" "}
                    <span className="text-minimog-theme-title-color text-[15px]">
            {" "}
                        Boats
          </span>
                </h3>
            </div>
            {/* END  OF NAVBAR bramcu */}

            <div className="px-[10rem]">
                <Minimogsingle Minimodata={Minimodata} />
            </div>

            {/* END  OF NAVBAR singleproductpage */}
            <div className="relatepro grid place-items-center py-5">
                <h3 className="text-[36px] text-minimog-theme-title-color">
                    Related products
                </h3>
            </div>
            <div className="productgrid px-[10rem]">
                <Minimogproduct Minimodata={Minimodata} />
            </div>
            {/* END  OF NAVBAR relatatedproduct */}

            <div className="px-8">
                <Minimogfooter />
            </div>
        </div>
    );
}
