import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Minimognavbar from "../../../Navbarcomponent/minimognavbar";
import Minimogshop from "../../../shopall/minimogshop";
import Minimogpro from "../../../Newproductgrid/minimogproduct";
import Minimogproductshort from "../../../productshorting/minimog";
import Minimogfooter from "../../../Footer/minimogfooter";
import React, { useState } from "react";
import Minimogfilter from "../../../filtermodal/minimogfilter";
export default function Shopdpage({ minimog }) {
  const [filterminimog, setFilterminimog] = useState(false);
  const [twouitem, setTwoitem] = useState(4);
  return (
    <div className="minimogshoppage font-minimog-theme-font relative">
      <button
        onClick={() => setFilterminimog(!filterminimog)}
        className=" md:hidden block bg-white top-[50%] z-10 border p-3 fixed "
      >
        {" "}
        F <br /> I <br /> I <br />L <br />
      </button>
      <Minimogfilter
        filterminimog={filterminimog}
        setFilterminimog={setFilterminimog}
      />
      <div className="navbar">
        <Minimognavbar minimog={minimog} />
      </div>
      {/* END  OF NAVBAR COMPONENT */}
      <div className="bramcu grid place-items-center p-8 border ">
        <h3 className="text-[33.6px] text-minimog-theme-title-color">Shop</h3>
        <h3 className="flex space-x-4">
          <span>Home </span>
          <span>
            <FontAwesomeIcon icon={faAngleRight} className="text-[0.8rem]" />
          </span>{" "}
          <span> Products</span>
        </h3>
      </div>
      {/* END  OF NAVBAR bramcu */}

      <div className="shopdetails flex space-x-3 mt-8">
        <div className="item leftbar w-[25%] md:block hidden">
          <Minimogshop />
        </div>
        <div className="right rightbar w-[75%]">
          <Minimogproductshort setTwoitem={setTwoitem} twouitem={twouitem} />
          <Minimogpro minimog={minimog} twouitem={twouitem} />
        </div>
      </div>
      {/* END  OF NAVBAR FILTER */}

      <div className="footerarea p-5 px-8">
        <Minimogfooter />
      </div>
    </div>
  );
}
