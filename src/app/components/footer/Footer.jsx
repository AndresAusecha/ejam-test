import LockIc from "@/app/assets/images/svg/LockIc"
import React from "react"

export default () => {
  return (
    <div className="w-full bg-primary/dark h-[88px] px-7 lg:px-32 flex lg:justify-between flex-wrap justify-center lg:mt-12">
      <div className="flex items-center lg:h-full">
        <p className="border-r border-white text-xs leading-4 lg:text-base lg:leading-[22px] text-white pr-3">
          Copyright (c) 2023
        </p>
        <p className="ml-3 text-white text-xs leading-4 lg:text-base lg:leading-[22px]">
          clarifionsupport@clarifion.com
        </p>
      </div>
      <div className="flex items-center lg:h-full">
        <LockIc stroke="white" />
        <p className="text-xs leading-4 lg:text-base lg:leading-[22px] text-white ml-3">
          Secure 256-bit SSL encryption.
        </p>
      </div>
    </div>
  )
}