import React from "react";

export default function OrderDetails() {
  return (
    <div className="orderdetails bg-[#f6f6f6]">
      <table className="table-auto w-full space-y-3">
        <thead className="p-9 text-[12px] text-[#acaaa6]">
          <tr>
            <th className=" border  font-[500] p-3">Order</th>
            <th className="border font-[500] p-3">Date</th>

            <th className=" border  font-[500] p-3">Total Price</th>
            <th className=" border  font-[500] p-3">Payment</th>
            <th className=" border  font-[500] p-3">Status</th>
            <th className=" border  font-[500] p-3">Invoice</th>
            <th className=" border  font-[500] p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center mt-5 text-[12px]">
          <tr>
            <td className=" border text-black font-[600] p-2">#20109</td>
            <td className=" border text-[#878787] p-2">09/15/2022</td>
            <td className=" border text-[#878787] p-2">$33.99 </td>
            <td className=" border text-[#878787] p-2">Bank transfer </td>
            <td className=" border p-5 text-center grid place-items-center">
              <h3 className="bg-[#4169e1] w-[50%] p-1  text-[#fff] rounded-md">
                Awaiting bank wire payment
              </h3>
            </td>
            <td></td>
            <td className="p-2 border ">
              <div className="flex space-x-4 justify-center">
                <h3>Details</h3> <h3>Record</h3>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
