import { roboto_300, roboto_400, roboto_500, roboto_700 } from "@/app/fonts";
import classNames from "classnames";
import React from "react";

const Content = () => {
  return (
    <div className="px-[80px] flex justify-center items-center">
      <div className="w-full grid grid-cols-2 my-[30px]">
        <div className="flex justify-center items-center">
          <img className="h-[300px] " src="/img/homechef1.gif" />
        </div>
        <div className="block">
          <h2
            className={classNames(
              "uppercase text-[36px]",
              roboto_700.className
            )}
          >
            Want to Become a Homechef ?
          </h2>
          <div className="h-[2px] w-[65%] bg-theme-red"></div>
          <div className="mt-[50px]">
            <h3
              className={classNames("text-theme-green text-[18px]", roboto_400)}
            >
              Start your journey here
            </h3>
            <ul className={classNames("ml-[30px] text-[16px] text-theme-black",roboto_300)}>
              <li className="list-disc">Get yourself Registered with Us!</li>
              <li className="list-disc">Recieve Your First Order</li>
              <li className="list-disc">Show your Cooking Skills</li>
              <li className="list-disc">Get it Delivered</li>
            </ul>
          </div>
          <div className="flex justify-start items-center mt-[50px] gap-[64px]">
            <button
              className={classNames(
                "text-[16px] px-[12px] py-[8px] bg-theme-green text-theme-white rounded-[5px]",
                roboto_700
              )}
            >
              Apply here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
