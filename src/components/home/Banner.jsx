import Image from "next/image";
import React from "react";
import {PrimaryButton} from "../common/Button";

const Banner = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-theme-green-900 w-full h-[550px] gap-[100px] relative overflow-hidden">
        <div className="z-[1] flex flex-col justify-center items-start gap-[30px]">
          <div className="text-theme-white text-[3rem] leading-[55px] font-extralight tracking-[-2px]">
            Craving the comfort of <br />
            home-cooked meals? <br />
            Your taste of home is here
          </div>
          <PrimaryButton
            name={"contact"}
          ></PrimaryButton>
        </div>
        <div className="z-[1]">
          <Image
            className="z-10"
            src="/doodle/doodleimage_5.png"
            height={500}
            width={500}
          />
        </div>
        <Image className="absolute z-[0] opacity-[.05] " src={"/img/logo.png"} height={800} width={800} />
      </div>
    </>
  );
};

export default Banner;