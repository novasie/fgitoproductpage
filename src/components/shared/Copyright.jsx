import { roboto_500 } from "@/app/fonts";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Copyright = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center py-[10px] bg-theme-green ">
        <div
          className={clsx(
            "text-theme-white text-[15px] text-center flex justify-center items-center gap-1",
            roboto_500.className
          )}
        >
          <span>
            ©Copyright {new Date().getFullYear()} All Right Reserved By{" "}
          </span>

          <span className="text-theme-yellow font-bold">
            <a href="/">Novasie Technologies pvt Ltd</a>
          </span>
          {/* <span>
            <Image src={"/novasie.png"} height={20} width={20} />{" "}
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Copyright;
