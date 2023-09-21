"use client"

import Checkmark from "./assets/images/svg/CheckmarkRegular.jsx"
import CheckmarkIc from "./assets/images/svg/CheckMark.jsx"
import Heart from "./assets/images/svg/Heart.jsx"
import Truck from "./assets/images/svg/Truck.jsx"
import LeftChevron from "./assets/images/svg/leftChevron.jsx"
import RightChevron from "./assets/images/svg/rightChevron.jsx"
import React, { useState } from "react"
import cx from "classnames"
import Steps from "./components/steps/Steps.jsx"

export default function Home() {
  const [currentNavSlide, setCurrentNavSlide] = useState(0)
  console.log(currentNavSlide);
  return (
    <main className="flex flex-col justify-between items-center">
      <div className="hidden px-7 w-full h-12 lg:px-32 bg-primary/dark lg:flex">
        <div className="flex justify-center items-center w-full text-white">
          <CheckmarkIc />
          <p className="ml-2 uppercase">
            30-DAY SATISFACTION GUARANTEE
          </p>
        </div>
        <div className="flex items-center w-full text-white">
          <Truck />
          <p className="ml-2 uppercase">
            Free delivery on orders over $40.00
          </p>
        </div>
        <div className="flex items-center w-full text-white">
          <Heart />
          <p className="ml-2 uppercase">
            50.000+ HAPPY CUSTOMERS
          </p>
        </div>
        <div className="flex items-center w-full text-white">
          <Checkmark />
          <p className="ml-2 uppercase">
            100% Money Back Guarantee
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center px-7 w-full h-12 lg:px-32 lg:hidden bg-primary/dark">
        <button onClick={() => { setCurrentNavSlide(currentNavSlide > 0 ? currentNavSlide - 1 : 0) }}>
          <LeftChevron />
        </button>
        <div>
          <div className={cx("hidden justify-center items-center w-full text-white transition-all", currentNavSlide === 0 && "!flex")}>
            <CheckmarkIc />
            <p className="ml-2 !text-xs !leading-3 uppercase">
              30-DAY SATISFACTION GUARANTEE
            </p>
          </div>
          <div className={cx("hidden items-center w-full text-white transition-all", currentNavSlide === 1 && "!flex")}>
            <Truck />
            <p className="ml-2 text-xs leading-3 uppercase">
              Free delivery on orders over $40.00
            </p>
          </div>
          <div className={cx("hidden items-center w-full text-white transition-all", currentNavSlide === 2 && "!flex")}>
            <Heart />
            <p className="ml-2 text-xs leading-3 uppercase">
              50.000+ HAPPY CUSTOMERS
            </p>
          </div>
          <div className={cx("hidden items-center w-full text-white transition-all", currentNavSlide === 3 && "!flex")}>
            <Checkmark />
            <p className="ml-2 text-xs leading-3 uppercase">
              100% Money Back Guarantee
            </p>
          </div>
        </div>
        <button onClick={() => { setCurrentNavSlide(currentNavSlide < 3 ? currentNavSlide + 1 : 0) }}>
          <RightChevron />
        </button>
      </div>
      <div className="flex justify-between px-7 w-full lg:px-32 h-[62px] lg:h-[98px] items-center">
        <img src="./companyLogo.png" className="w-[106.67px] h-5 lg:w-48 lg:h-9" />
        <div className="flex items-center">
          <img src="./MCAfee.png" className="mr-4 w-11 h-4 lg:mr-8" />
          <img src="./norton-antivirus-logo.png" className="w-11 h-4 lg:w-[88px] lg:h-8" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[32px] leading-[44.8px] lg:text-5xl lg:leading-[48px] capitalize text-center">
          Wait ! your order in progress.
        </h1>
        <h2 className="text-base leading-[22.4px] lg:text-2xl lg:leading-6 text-secondary/gray capitalize text-center mt-2 lg:mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing 
        </h2>
      </div>
      <Steps />
      <div className="px-7 w-full lg:px-32 mt mt-6 lg:mt-[38px] ">
        <div className="bg-secondary/light-gray p-[26px] w-full grid grid-cols-2 gap-6">
        <div >
          <img src="./productImage.png" />
          <div>
           <div>

           </div>
          </div>
        </div>
        <div>
          <p className="text-2xl leading-[33.6px] lg:text-[32px] lg:leading-[44.8px]">
            <span className="font-bold text-primary/blue">
              ONE TIME ONLY
            </span>
            {' '}
            special price for 6 extra Clarifion for only{' '}
            <span className="font-bold text-primary/blue">$14 each</span>{' '}
            ($84.00 total!)
          </p>
          <div className="flex mt-[22px]">
            <img src="./productImageSmall.png" />
            <div className="ml-4 lg:ml-5">
              <div className="flex items-center">
                <p className="text-sm font-normal lg:text-xl">Clarifion Air Ionizer</p>
                <div className="flex items-center ml-11">
                  <p className="mr-2 text-xs line-through text-secondary/dark-gray">$180</p>
                  <p className="font-semibold text-primary/blue">$84</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}
