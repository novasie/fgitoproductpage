import { roboto_500, roboto_700 } from "@/app/fonts";
import clsx from "clsx";
import React from "react";

const Content = () => {
  return (
    <div className="flex justify-center px-4 lg:px-20">
      <div className="w-full grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2 my-8 items-center">
        <div className="flex justify-center items-center">
          <img className="h-64 lg:h-96" src="/img/homechef-home1.gif" />
        </div>
        <div>
          <h2 className={clsx("uppercase text-4xl", roboto_700.className)}>
            Welcome to fgito
          </h2>
          <div className="h-0.5 w-[35%] bg-theme-red"></div>
          <h3
            className={clsx(
              "text-justify text-lg font-light text-theme-black mt-3",
              roboto_500.className
            )}
          >
            A busy lifestyle often interferes with maintaining a good health and
            opting for good food. You might be working long hours and hence most
            of the days depend on outside food. This is one of the main reasons
            why FGITO not just came up with a permanent solution to your
            problem, but also make sure that you are not losing out on some
            important nutrients.
          </h3>
          <div className="flex justify-start items-center mt-3 gap-16 flex-1">
            <button
              className={clsx(
                "px-[8px] py-[8px] bg-theme-green text-theme-white rounded-[5px]",
                roboto_700
              )}
            >
              Connect with us
            </button>
            <img
              className="w-[146px] h-[40px] rounded-[5px]"
              src="/img/play-store-logo.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
