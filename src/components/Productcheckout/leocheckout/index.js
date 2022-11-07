import React, { useState } from "react";
import Stepper from "./stepper";
import Addressleo from "./address";
import Informationp from "./info";
import Shipp from "./shipp";
import Paymentch from "./payent";
function Wizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const stepArray = [
    "PERSONAL INFORMATION",
    // "Location",
    // "Service Offered",
    "ADDRESSES",
    "SHIPPING METHOD",
    "PAYMENT",
  ];

  const handleClick = (clickType) => {
    let newStep = currentStep;
    clickType == "next" ? newStep++ : newStep--;
    // Check if steps are within the boundary
    if (newStep > 0 && newStep <= stepArray.length) {
      setCurrentStep(newStep);
    }
  };
  return (
    <div className=" row leocheckout-container w-full md:w-[60%] ">
      <div className=" horizontal mt-5 mb-12 ">
        <Stepper steps={stepArray} currentStepNumber={currentStep} />
      </div>
      {currentStep == 1 ? <Informationp /> : <div></div>}
      {currentStep == 2 ? <Addressleo /> : <div></div>}
      {currentStep == 3 ? <Shipp /> : <div></div>}
      {currentStep == 4 ? <Paymentch /> : <div></div>}
      {/* <div className="container flex justify-around my-8 ">
        <button
          onClick={() => handleClick()}
          className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-orange-700 hover:bg-orange-900 text-white font-normal py-2 px-4 mr-1 rounded"
        >
          {" "}
          Previous{" "}
        </button>
        <button
          onClick={() => handleClick("next")}
          className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-orange-700 hover:bg-orange-700 text-orange-700 hover:text-white font-normal py-2 px-4 rounded"
        >
          {" "}
          Next{currentStep}
        </button>
      </div> */}
    </div>
  );
}
export default Wizard;
