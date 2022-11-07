import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard space-y-5">
      <h3 className=" font-[600] text-[32px] text-[#253d4e] ">Hello Rosie!</h3>
      <h3 className="text-[16px] text-[#7e7e7e]">
        From your account dashboard. you can easily check & view your
        <span className="text-[#3bb77e] font-[500]">recent orders</span> ,
        manage your{" "}
        <span className="text-[#3bb77e] font-[500]">
          shipping and billing addresses
        </span>{" "}
        ,{" "}
        <span className="text-[#3bb77e] font-[500]">
          and edit your password and account details.
        </span>
      </h3>
    </div>
  );
}
