import React from "react";

import "../../../Font/globalfont.scss";
export default function Lafakaorder() {
  return (
    <div className="lafakaorderdetails p-5  font-Rubik text-[#333]">
      <h3 className="p-6">
        Order <span className="bg-[#ffff00]">#6248</span> was placed on
        <span className="bg-[#ffff00]">September 19, 2022</span> and is
        currently
        <span className="bg-[#ffff00]">Processing.</span>
      </h3>
      <div className="row w-full md:w-[80%]  ">
        <div className="right-order  w-full p-6 space-y-4">
          <h3 className="text-[20px] md:text-[24px] font-[600] text-[#333]">
            Order details
          </h3>
          <table className="w-full table-auto ">
            <thead className="bg-[#F1F1F1]">
              <tr className="border-b ">
                <th className="p-6 border-b text-left  text-[#333] font-[400]">
                  Product
                </th>
                <th className="p-6 border-b text-left text-[#333] font-[400]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr className="border-b ">
                <td className="p-6 border-b text-[#333]">
                  Wool-blend Jacket × 1
                </td>
                <td className="p-6 border-b text-[#333]">$29.00</td>
              </tr>
              <tr className="border-b ">
                <td className="p-6 border-b text-[#333]">Subtotal:</td>
                <td className="p-6 border-b text-[#333]">$29.00</td>
              </tr>
              <tr className="border-b ">
                <td className="p-6 border-b text-[#333]">Shipping:</td>
                <td className="p-6 border-b">
                  $10.00 via <span className="text-[12px]">Flat rate</span>
                </td>
              </tr>
              <tr className="border-b ">
                <td className="p-6 border-b text-[#333]">Payment method:</td>
                <td className="p-6 border-b text-[#888]">
                  Direct bank transfer
                </td>
              </tr>
              <tr className="border-b ">
                <td className="p-6 border-b text-[#333]">Total:</td>
                <td className="p-6 border-b text-[#333]">$39.00</td>
              </tr>
              <tr>
                <td className="p-6 border-b text-left text-[#333] font-[400]">
                  Order Type:
                </td>
                <td className="p-6 border-b text-left text-[#888] font-[400]">
                  Pickup
                </td>
              </tr>
              <tr>
                <td className="p-6 border-b text-left text-[#333] font-[400]">
                  Branch:
                </td>
                <td className="p-6 border-b text-left text-[#888] font-[400]">
                  Lafka Bronx NY
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row w-full md:w-[60%] p-6  space-y-5">
        {/* <h3>Thank you. Your order has been received.</h3> */}

        <div className="flex space-x-9 ">
          <div className="item-billing w-[50%] space-y-5">
            <div className="space-y-2">
              <div className="item flex space-x-5">
                <h3 className=" text-[20px] md:text-[24px] text-[#22272d] font-[700]">
                  Billing Address
                </h3>
              </div>
            </div>
            {/* <h3>You have not set up this type of address yet.</h3> */}
            <div className="addre space-y-2 text-[#888]">
              <h3 className="italic">Name Here</h3>
              <h3 className="italic">Company name here</h3>
              <h3 className="italic">Addrss here</h3>
              <h3 className="italic">State here</h3>
              <h3 className="italic">Phone no here</h3>
              <h3 className="italic">Country name here</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
