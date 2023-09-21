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
    <div className="flex">
      {steps.map((step, index) => (
          <div className="flex flex-col justify-center items-center mr-5 lg:mr-[87px] lg:flex-row">
            {step.state === 0 ? 
              <div className={cx("flex justify-center items-center w-5 h-5 lg: rounded-full border !border-primary/blue lg:w-10 lg:h-10", step.active && "bg-primary/blue")}>
                <p className={cx("m-0  text-sm lg:text-xl leading-[15.4] lg:leading-[22px]", step.active ? "text-white" : "text-primary/blue")}>
                  {index + 1}
                </p>
              </div> 
              : <CheckedStep className="w-5 h-5 lg:w-10 lg:h-10" />
            }
            <p className="block lg:hidden text-xs leading-[13.2px]">
              {step.name}
            </p>
            <p className={cx("hidden lg:block ml-5 text-xl leading-[22px]", step.active && "font-bold")}>
              Step {index}: {step.name}
            </p>
          </div>
        )
      )}
    </div>
  )
}