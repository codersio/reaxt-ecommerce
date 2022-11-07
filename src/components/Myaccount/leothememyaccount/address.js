import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Address() {
  return (
    <div className="address-acct space-y-5">
      <div className="grid grid-cols-3 gap-4">
        <div className="item  shadow-md  w-full  bg-white">
          <div className="space-y-1 p-5">
            <h3 className="text-black font-[600] ">My Address</h3>
            <h3>qq qq</h3>
            <h3>ww</h3>
            <h3>ww ww ww</h3>
            <h3>w, Indiana 45423</h3>
            <h3>w, Indiana 45423</h3>
            <h3>345675678</h3>
          </div>
          <div className="row border-t flex space-x-3 p-2">
            <div className="flex space-x-2">
              <div>
                <FontAwesomeIcon icon={faPencil} />
              </div>
              <h3>Update</h3>
            </div>{" "}
            <div className="flex space-x-2">
              <div>
                <FontAwesomeIcon icon={faPencil} />
              </div>
              <h3>Delete</h3>
            </div>{" "}
          </div>
        </div>
      </div>
      <h3>
        {" "}
        <FontAwesomeIcon icon={faPlus} /> Create new address
      </h3>
    </div>
  );
}
