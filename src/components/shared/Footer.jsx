import { roboto_500 } from "@/app/fonts";
import classNames from "classnames";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center py-[10px] bg-theme-green ">
        <div
          className={classNames(
            "text-theme-white text-[15px] text-center",
            roboto_500.className
          )}
        >
          ©Copyright 2022 All Right Reserved By{" "}
          <span className="underline">
            <a href="/">Novasie Technologies Pvt Ltd</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
