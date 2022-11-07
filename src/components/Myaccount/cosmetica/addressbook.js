import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import "./style.scss";
export default function Addressbook() {
  return (
    <div className="addressbook space-y-6">
      <h3>
        The following addresses will be used on the checkout page by default.
      </h3>

      <div className="flex space-x-9 ">
        <div className="item-billing w-[50%] space-y-5">
          <div className="space-y-2">
            <div className="item flex space-x-5">
              <h3 className="text-[32px] text-[#253d4e]  font-[500]">
                Billing Address
              </h3>
              <div>
                {" "}
                <FontAwesomeIcon icon={faPencil} className="mt-2 text-black" />
              </div>
            </div>
            <hr className="brdhr" />
          </div>
          <h3>You have not set up this type of address yet.</h3>
          <div className="addre space-y-2">
            <h3>Name Here</h3>
            <h3>Company name here</h3>
            <h3>Addrss here</h3>
            <h3>State here</h3>
            <h3>Phone no here</h3>
            <h3>Country name here</h3>
          </div>
        </div>
        <div className="item-billshippinging w-[50%] space-y-5">
          <div className="space-y-2">
            <div className="item flex space-x-5">
              <h3 className="text-[24px] text-black font-[500]">
                Shipping Address
              </h3>
              <div>
                {" "}
                <FontAwesomeIcon icon={faPencil} className="mt-2 text-black" />
              </div>
            </div>
            <hr className="brdhr" />
          </div>
          <h3>You have not set up this type of address yet.</h3>
        </div>
      </div>
    </div>
  );
}
