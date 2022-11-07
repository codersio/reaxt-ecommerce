import React from "react";
import "../../../Font/globalfont.scss";
// import "./dosisfont.scss";
import "./robotofont.scss";
export default function Xpeedorderdeti() {
  return (
    <div className="luchianaorder p-5 shadow-sm md:p-16 md:w-[100vw] space-y-5  font-Roboto text-[14px]">
      <div className=" md:inline-block  hidden row w-[50%]">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-[15px] border-r pl-2  border-dashed text-[#4a4a4a] font-[400] capitalize text-left">
                Order number:
              </th>
              <th className="text-[15px] border-r pl-2  border-dashed text-[#4a4a4a] font-[400] capitalize text-left">
                Date:
              </th>

              <th className="text-[15px] border-r  pl-2  border-dashed text-[#4a4a4a] font-[400] capitalize text-left">
                Total:
              </th>
              <th className="text-[15px] text-[#4a4a4a] border-r  pl-2  border-dashed font-[400] capitalize text-left">
                Payment method:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" pt-1 border-r  pl-2  border-dashed text-[#4a4a4a] font-[700] text-left">
                2945
              </td>
              <td className=" pt-1 border-r  pl-2  border-dashed text-[#4a4a4a] font-[700] text-left">
                September 20, 2022
              </td>

              <td className=" pt-1 border-r  pl-2  border-dashed text-[#0562d2] font-[700] text-left">
                $45.00
              </td>
              <td className=" pt-1 pl-2 text-[#4a4a4a] font-[700] text-left">
                Cash on delivery
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mobile md:hidden space-y-3 text-left">
        <div className="text-[15px] text-[#4a4a4a] font-[400] capitalize text-left">
          <h3 className="text-[15px] text-[#4a4a4a] font-[500] capitalize">
            Order Number:
          </h3>
          <h3 className=" pt-1 text-[#4a4a4a] font-[700] text-left">2946</h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#4a4a4a] font-[400] capitalize text-left">
            Date:
          </h3>
          <h3 className=" pt-1 text-[#4a4a4a] font-[700] text-left">
            September 20, 2022
          </h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#4a4a4a] font-[400] capitalize text-left">
            Email:
          </h3>
          <h3 className=" pt-1 text-[#4a4a4a] font-[700] text-left">
            a@gmail.com
          </h3>
        </div>
        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#4a4a4a] font-[400] capitalize text-left">
            Total:
          </h3>
          <h3 className=" pt-1 text-[#4a4a4a] font-[700] text-left">2946</h3>
        </div>

        <div className="item text-center space-y-1">
          <h3 className="text-[15px] text-[#4a4a4a] font-[500] text-left capitalize">
            Payment Method:
          </h3>
          <h3 className=" pt-1 text-[#4a4a4a] font-[700] text-left">
            Cash on delivery
          </h3>
        </div>
      </div>

      <div className="right-order  w-full   space-y-4">
        <div className="text-left ">
          <h3 className="text-[14px]  font-[500] text-[#4a4a4a]">
            Pay with cash upon delivery.
          </h3>
        </div>
        <div className="space-y-1">
          <h3 className="text-[20px]  md:text-[32px] font-[700] capitalize text-[#1c1c24]">
            Order details
          </h3>
          <table className="w-full table-auto border">
            <thead>
              <tr className="border ">
                <th className="p-5 border   text-center   text-[#4a4a4a] text-[14px] font-[700]">
                  Product
                </th>
                <th className="p-5 border   text-center  text-[#4a4a4a] text-[14px] font-[700]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr className="border ">
                <td className="p-5 border text-[#007bff]  text-center ">
                  All Natural Italian-Style Chicken Meatballs × 1
                </td>
                <td className="p-5 border font-[700] text-center text-[#0564d2]">
                  $29.00
                </td>
              </tr>
              <tr className="border ">
                <td className="p-5 border text-[14px] font-[700]  text-center  text-[#4a4a4a]">
                  Subtotal:
                </td>
                <td className="p-5 border text-center font-[700]  text-[#0564d2]">
                  $29.00
                </td>
              </tr>

              <tr className="border ">
                <td className="p-5  text-center text-[#4a4a4a]  border text-[14px] font-[700] ">
                  Payment method:
                </td>
                <td className="p-5 font-[700] text-[#4a4a4a] text-center  border">
                  Direct bank transfer
                </td>
              </tr>
              <tr className="border ">
                <td className="p-5  text-center border text-[14px] font-[700]  text-[#4a4a4a]">
                  Total:
                </td>
                <td className="p-5 text-center font-[700]  border text-[#0564d2]">
                  $39.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
