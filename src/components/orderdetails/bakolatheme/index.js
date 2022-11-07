import React from "react";
import "../../../Font/globalfont.scss";
import "./dosisfont.scss";
export default function Bakolatheme() {
  return (
    <div className="luchianaorder p-5 shadow-sm md:p-16 md:w-[100vw] space-y-16  font-Inter text-[14px]">
      <div className=" md:inline-block shadow-lg p-3 hidden row w-[100%]">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-[15px] text-[#202435] font-[400] capitalize text-left">
                Order number:
              </th>
              <th className="text-[15px] text-[#202435] font-[400] capitalize text-left">
                Date:
              </th>

              <th className="text-[15px] text-[#202435] font-[400] capitalize text-left">
                Total:
              </th>
              <th className="text-[15px] text-[#202435] font-[400] capitalize text-left">
                Payment method:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" pt-1 text-[#202435] font-[700] text-left">
                2945
              </td>
              <td className=" pt-1 text-[#202435] font-[700] text-left">
                September 20, 2022
              </td>

              <td className=" pt-1 text-[#202435] font-[700] text-left">
                $45.00
              </td>
              <td className=" pt-1 text-[#202435] font-[700] text-left">
                Cash on delivery
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mobile md:hidden space-y-3 text-left">
        <div className="text-[15px] text-[#202435] font-[400] capitalize text-left">
          <h3 className="text-[15px] text-[#202435] font-[500] capitalize">
            Order Number:
          </h3>
          <h3 className=" pt-1 text-[#202435] font-[700] text-left">2946</h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#202435] font-[400] capitalize text-left">
            Date:
          </h3>
          <h3 className=" pt-1 text-[#202435] font-[700] text-left">
            September 20, 2022
          </h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#202435] font-[400] capitalize text-left">
            Email:
          </h3>
          <h3 className=" pt-1 text-[#202435] font-[700] text-left">
            a@gmail.com
          </h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#202435] font-[400] capitalize text-left">
            Total:
          </h3>
          <h3 className=" pt-1 text-[#202435] font-[700] text-left">2946</h3>
        </div>

        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#202435] font-[500] text-left capitalize">
            Payment Method:
          </h3>
          <h3 className=" pt-1 text-[#202435] font-[700] text-left">
            Cash on delivery
          </h3>
        </div>
      </div>

      <div className="right-order  w-full   space-y-7">
        <div className="text-left ">
          <h3 className="text-[14px]  font-[400]">
            Pay with cash upon delivery.
          </h3>
        </div>
        <div className="space-y-1">
          <h3 className="text-[20px] font-Dosis md:text-[16px] font-[700] uppercase text-[#202435]">
            Order details
          </h3>
          <table className="w-full table-auto border">
            <thead>
              <tr className="border ">
                <th className="p-3 border text-left  text-[#202435] text-[14px] font-[700]">
                  Product
                </th>
                <th className="p-3 border text-left text-[#202435] text-[14px] font-[700]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr className="border ">
                <td className="p-3 border text-[#202435]">
                  All Natural Italian-Style Chicken Meatballs × 1
                </td>
                <td className="p-3 border text-[#202435]">$29.00</td>
              </tr>
              <tr className="border ">
                <td className="p-3 border text-[14px] font-[700]  text-[#202435]">
                  Subtotal:
                </td>
                <td className="p-3 border text-[#202435]">$29.00</td>
              </tr>
              <tr className="border ">
                <td className="p-3 border text-[14px] font-[700]  text-[#202435]">
                  Shipping:
                </td>
                <td className="p-3 border">
                  $10.00 via <span className="text-[12px]">Flat rate</span>
                </td>
              </tr>
              <tr className="border ">
                <td className="p-3 border text-[14px] font-[700] ">
                  Payment method:
                </td>
                <td className="p-3 border">Direct bank transfer</td>
              </tr>
              <tr className="border ">
                <td className="p-3 border text-[14px] font-[700]  text-[#202435]">
                  Total:
                </td>
                <td className="p-3 border text-[#202435]">$39.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
