import { roboto_500, roboto_700 } from "@/app/fonts";
import classNames from "classnames";
import React from "react";

const Content = () => {
  return (
    <>
      <div className="lg:block sm1:hidden px-[80px] flex justify-center items-center">
        <div className="w-full grid grid-cols-2 my-[30px]">
          <div className="block">
            <h2
              className={classNames(
                "uppercase text-[36px]",
                roboto_700.className
              )}
            >
              Welcome to fgito
            </h2>
            <div className="h-[2px] w-[35%] bg-theme-red"></div>
            <h3
              className={classNames(
                "w-[532px] h-fit text-justify text-[16px] font-[300] text-theme-black mt-[30px]",
                roboto_500.className
              )}
            >
              A busy lifestyle often interferes with maintaining a good health
              and opting for good food. You might be working long hours and
              hence most of the days depend on outside food. This is one of the
              main reasons why FGITO not just came up with a permanent solution
              to your problem, but also make sure that you are not losing out on
              some important nutrients.
            </h3>
            <div className="flex justify-start items-center mt-[50px] gap-[64px]">
              <button
                className={classNames(
                  "text-[16px] px-[12px] py-[8px] bg-theme-green text-theme-white rounded-[5px]",
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
          <div className="flex justify-center items-center">
            <img className="h-[300px] " src="/img/homechef-home1.gif" />
          </div>
        </div>
      </div>
      <div className="px-[20px] sm1:block lg:hidden flex justify-center items-center">
        <div className="w-full grid grid-cols-1 my-[30px]">
          <div className="flex justify-center items-center">
            <img className="h-[236px] " src="/img/homechef-home1.gif" />
          </div>
          <div className="block">
            <h2
              className={classNames(
                "uppercase text-[36px]",
                roboto_700.className
              )}
            >
              Welcome to fgito
            </h2>
            <div className="h-[2px] w-[35%] bg-theme-red"></div>
            <h3
              className={classNames(
                "h-fit text-justify text-[16px] font-[300] text-theme-black mt-[10px]",
                roboto_500.className
              )}
            >
              A busy lifestyle often interferes with maintaining a good health
              and opting for good food. You might be working long hours and
              hence most of the days depend on outside food. This is one of the
              main reasons why FGITO not just came up with a permanent solution
              to your problem, but also make sure that you are not losing out on
              some important nutrients.
            </h3>
            <div className="flex justify-start items-center mt-[10px] gap-[64px]">
              <button
                className={classNames(
                  "text-[16px] px-[8px] py-[8px] bg-theme-green text-theme-white rounded-[5px]",
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
    </>
  );
};

export default Content;
