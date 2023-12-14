import { roboto_300, roboto_500, roboto_700 } from "@/app/fonts";
import clsx from "clsx";

import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className={clsx("mt-[70px] px-[80px]")}>
        <div className="flex justify-center">
          <div>
            <h2
              className={clsx(
                "text-center text-[28px] text-theme-black",
                roboto_700
              )}
            >
              Testimonials
            </h2>
            <div
              className={clsx(
                "flex justify-center items-center gap-2 text-[14px] text-theme-green",
                roboto_500.className
              )}
            >
              <div className="bg-theme-red w-[40px] h-[2px]"></div>
              <div>our work</div>
              <div className="bg-theme-red w-[40px] h-[2px]"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-[10px]">
          <div className="col-span-1 h-[400px] w-[400px] bg-theme-gray-500 flex justify-center items-center">
            <img className="h-[70px] w-[70px]" src="/img/playButton.svg" />
          </div>
          <div className="col-span-1 h-[400px] w-[400px] bg-theme-gray-500 flex justify-center items-center">
            <img className="h-[70px] w-[70px]" src="/img/playButton.svg" />
          </div>
          <div className="col-span-1 h-[400px] w-[400px] bg-theme-gray-500 flex justify-center items-center">
            <img className="h-[70px] w-[70px]" src="/img/playButton.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
