import Image from "next/image";
import React from "react";
import Link from "next/link";
import { PrimaryButton } from "../common/Button";

const Banner = () => {
  const tryFgitoUrl = "https://wa.me/+918081221164";
  

  
  

  return (
    <>
      <div className="w-full px-[2.7rem] py-[6rem] flex flex-col-reverse lg:flex-row justify-center items-center bg-theme-green-900 h-auto gap-10  lg:gap-[12rem] relative overflow-hidden ">
        <div className="z-[1] w-fit flex flex-col gap-12 lg:mt-[5rem] items-center justify-start lg:gap-[30px] ">
          <div className="text-theme-white w-[18rem] sm:w-[28rem] md:w-[34rem] lg:w-[32rem] text-[1.6rem] text-center sm:text-[2.2rem] md:text-[2.6rem]  tracking-[0.8px] lg:text-[2.8rem] leading-16  md:leading-[55px] font-extralight lg:tracking-[-2px]">
            Craving the comfort of 
            home-cooked meals?
            Your taste of home is here
            
            
          </div>
          <div className="flex flex-col md:flex-row gap-5 xl:gap-3 xl:justify-start">
            <div>
          
                <a href={tryFgitoUrl} target="_blank" rel="noopener noreferrer">
                  <PrimaryButton name={"try fgito"}></PrimaryButton>
                </a>
              
            
            </div>
            <div>
          <Link href="#HomechefSection">
              
              <PrimaryButton name={"become homechef"}></PrimaryButton>
            
          </Link>
             
          
          
            </div>
          </div>
        </div>
        <div className="z-[1] mt-[4rem] md:mt-0">
          <Image
            className="z-10"
            // src="/doodle/doodleimage_5.png"
            src="/comming_soon .png"
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
