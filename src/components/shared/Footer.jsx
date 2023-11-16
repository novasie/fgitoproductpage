import { roboto_500 } from "@/app/fonts";
import clsx from "clsx";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center py-[10px] bg-theme-green ">
        <div
          className={clsx(
            "text-theme-white text-[15px] text-center",
            roboto_500.className
          )}
        >
          ©Copyright {new Date().getFullYear()} All Right Reserved By
          <span className="underline">
            <a href="/">Novasie Technologies Pvt Ltd</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
