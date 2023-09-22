import CheckedStep from "@/app/assets/images/svg/CheckedStep";
import cx from "classnames";
import React, { useState } from "react";


export default () => {
  const [steps, setSteps] = useState([
    { name: "Cart Review", state: 1, active: false },
    { name: "Checkout", state: 1, active: false },
    { name: "Special Offer", state: 0, active: true },
    { name: "Confirmation", state: 0, active: false },
  ])
  return (
    <div className="flex mt-[17px] lg:mt-[61px] justify-center gap-x-5 lg:gap-x-[87px]">
      {steps.map((step, index) => (
          <div className="flex flex-col flex-wrap justify-center items-center lg:flex-row">
            {step.state === 0 ? 
              <div className={cx("flex justify-center items-center w-5 h-5  rounded-full border !border-primary/blue lg:w-10 lg:h-10", step.active && "bg-primary/blue")}>
                <p className={cx("m-0  text-sm lg:text-xl leading-[15.4] lg:leading-[22px]", step.active ? "text-white" : "text-primary/blue")}>
                  {index + 1}
                </p>
              </div> 
              : <CheckedStep className="w-6 h-5 lg:w-11 lg:h-10" />
            }
            <p className={cx("block lg:hidden text-xs leading-[13.2px] mt-3", step.active ? "font-bold" : "font-normal")}>
              {step.name}
            </p>
            <p className={cx("hidden lg:block ml-5 text-xl leading-[22px] mt-3", step.active ? "font-bold" : "font-normal")}>
              Step {index}: {step.name}
            </p>
          </div>
        )
      )}
    </div>
  )
}