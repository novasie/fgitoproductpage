import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../common/Button";

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
          <div className="flex gap-3 justify-start">
            <div>
              <PrimaryButton name={"try fgito"}></PrimaryButton>
            </div>
            <div>
              <PrimaryButton name={"become homechef"}></PrimaryButton>
            </div>
          </div>
        </div>
        <div className="z-[1]">
          <Image
            className="z-10"
            // src="/doodle/doodleimage_5.png"
            src="/comming_soon.png"
            height={500}
            width={500}
          />
        </div>
        <Image
          className="absolute z-[0] top-5 left-5 opacity-[1] "
          src={"/img/logo.png"}
          height={120}
          width={120}
        />
        <div className="absolute z-[0] flex gap-1 justify-center items-center bottom-5 right-5 opacity-[1]">
          <Image
            className=""
            src={"/img/location.png"}
            height={20}
            width={20}
          />
          <span className="text-theme-white font-bold text-[.75rem]">
            Only Available in Noida
          </span>
        </div>

        {/* <div className="text-theme-white  absolute bottom-10 left-20 flex gap-5">
          <button className="px-[2rem] w-fit h-fit py-[1rem] bg-theme-green rounded-[100px] text-theme-white uppercase text-[1rem] tracking-[3px] z-[10] font-bold">
            Become Homechef
          </button>
          <button className="px-[2rem] w-fit h-fit py-[1rem] bg-theme-green rounded-[100px] text-theme-white uppercase text-[1rem] tracking-[3px] z-[10] font-bold">
            Download app
          </button>

        </div> */}
      </div>
    </>
  );
};

export default Banner;
