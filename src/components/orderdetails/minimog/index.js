import React from "react";

import "../../../Font/globalfont.scss";
export default function Monomogorder() {
  return (
    <div className="orderdetails p-3 md:p-20 md:flex md:space-x-4 font-Jost text-[16px] text-[#666]">
      <div className="row w-full md:w-[60%]  space-y-5">
        <h3>Thank you. Your order has been received.</h3>
        <table className="md:w-[40%] w-full">
          <tbody>
            <tr>
              <td className="p-1">Order number:</td>
              <td className="p-1">20129</td>
            </tr>

            <tr>
              <td className="p-1">Date:</td>
              <td className="p-1">Sep 19, 2022</td>
            </tr>
            <tr>
              <td className="p-1">Email:</td>
              <td className="p-1">a@gmail.com</td>
            </tr>
            <tr>
              <td className="p-1">Total:</td>
              <td className="p-1">$39.00</td>
            </tr>
            <tr>
              <td className="p-1">Payment method:</td>
              <td className="p-1">Direct bank transfer</td>
            </tr>
          </tbody>
        </table>
        <div className="flex space-x-9 ">
          <div className="item-billing w-[50%] space-y-5">
            <div className="space-y-2">
              <div className="item flex space-x-5">
                <h3 className=" text-[20px] md:text-[24px] text-black font-[400]">
                  Billing Address
                </h3>
              </div>
              <hr />
            </div>
            <h3>You have not set up this type of address yet.</h3>
            <div className="addre space-y-2">
              <h3 className="italic">Name Here</h3>
              <h3 className="italic">Company name here</h3>
              <h3 className="italic">Addrss here</h3>
              <h3 className="italic">State here</h3>
              <h3 className="italic">Phone no here</h3>
              <h3 className="italic">Country name here</h3>
            </div>
          </div>
          <div className="item-billshippinging w-[50%] space-y-5">
            <div className="space-y-2">
              <div className="item flex space-x-5">
                <h3 className="text-[20px] md:text-[24px] text-black font-[400]">
                  Shipping Address
                </h3>
              </div>
              <hr />
            </div>
            <h3>You have not set up this type of address yet.</h3>
            <div className="addre space-y-2">
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
      <div className="row w-full md:w-[40%]  ">
        <div className="right-order shadow-lg w-full p-6 space-y-4">
          <h3 className="text-[20px] md:text-[24px] font-[600] text-black">
            Order details
          </h3>
          <table className="w-full table-auto border">
            <thead>
              <tr className="border ">
                <th className="p-3 border text-left  text-black font-[400]">
                  Product
                </th>
                <th className="p-3 border text-left text-black font-[400]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr className="border ">
                <td className="p-3 border text-black">Wool-blend Jacket × 1</td>
                <td className="p-3 border text-black">$29.00</td>
              </tr>
              <tr className="border ">
                <td className="p-3 border text-black">Subtotal:</td>
                <td className="p-3 border text-black">$29.00</td>
              </tr>
              <tr className="border ">
                <td className="p-3 border text-black">Shipping:</td>
                <td className="p-3 border">
                  $10.00 via <span className="text-[12px]">Flat rate</span>
                </td>
              </tr>
              <tr className="border ">
                <td className="p-3 border">Payment method:</td>
                <td className="p-3 border">Direct bank transfer</td>
              </tr>
              <tr className="border ">
                <td className="p-3 border text-black">Total:</td>
                <td className="p-3 border text-black">$39.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
