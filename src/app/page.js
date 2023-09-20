"use client"

import Checkmark from "./assets/images/svg/CheckmarkRegular.jsx"
import CheckmarkIc from "./assets/images/svg/CheckMark.jsx"
import Heart from "./assets/images/svg/Heart.jsx"
import Truck from "./assets/images/svg/Truck.jsx"
import LeftChevron from "./assets/images/svg/leftChevron.jsx"
import RightChevron from "./assets/images/svg/rightChevron.jsx"
import React, { useState } from "react"
import cx from "classnames"

export default function Home() {
  const [currentNavSlide, setCurrentNavSlide] = useState(0)
  console.log(currentNavSlide);
  return (
    <main className="flex flex-col justify-between items-center">
      <div className="hidden w-full h-12 bg-primary/dark lg:flex">
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

      <div className="flex justify-between items-center w-full h-12 lg:hidden bg-primary/dark">
        <button onClick={() => { setCurrentNavSlide(currentNavSlide > 0 ? currentNavSlide - 1 : 0) }}>
          <LeftChevron />
        </button>
        <div>
          <div className={cx("hidden justify-center items-center w-full text-white transition-all", currentNavSlide === 0 && "!flex")}>
            <CheckmarkIc />
            <p className="ml-2 uppercase">
              30-DAY SATISFACTION GUARANTEE
            </p>
          </div>
          <div className={cx("hidden items-center w-full text-white transition-all", currentNavSlide === 1 && "!flex")}>
            <Truck />
            <p className="ml-2 uppercase">
              Free delivery on orders over $40.00
            </p>
          </div>
          <div className={cx("hidden items-center w-full text-white transition-all", currentNavSlide === 2 && "!flex")}>
            <Heart />
            <p className="ml-2 uppercase">
              50.000+ HAPPY CUSTOMERS
            </p>
          </div>
          <div className={cx("hidden items-center w-full text-white transition-all", currentNavSlide === 3 && "!flex")}>
            <Checkmark />
            <p className="ml-2 uppercase">
              100% Money Back Guarantee
            </p>
          </div>
        </div>
        <button onClick={() => { setCurrentNavSlide(currentNavSlide < 3 ? currentNavSlide + 1 : 0) }}>
          <RightChevron />
        </button>
      </div>
    </main>
  )
}
