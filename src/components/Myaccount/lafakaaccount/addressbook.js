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
          <h3 className="text-[24px] font-[600] text-[#22272d]  ">
            Billing Address
          </h3>
          <h3>You have not set up this type of address yet.</h3>
          <div className="addre space-y-2">
            <h3>Name Here</h3>
            <h3>Company name here</h3>
            <h3>Addrss here</h3>
            <h3>State here</h3>
            <h3>Phone no here</h3>
            <h3>Country name here</h3>
          </div>
          <h3 className="text-[#f2002d] text-[16px]">Add</h3>
          <h3 className="text-[16px] text-[#888] italic">
            You have not set up this type of address yet.
          </h3>
        </div>
      </div>
    </div>
  );
}
