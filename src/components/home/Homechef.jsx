import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../common/Button";

const Homechef = () => {
  return (
    <>
      <div className="h-fit w-full relative overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute transform scaleX(-1)"
        >
          {" "}
          {/* <path
            className="fill-theme-white"
            opacity=""
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>{" "} */}
          <path
            className="fill-theme-white"
            opacity="1"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>{" "}
          {/* <path
            className="fill-theme-white"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>{" "} */}
        </svg>
        <div className="w-full bg-theme-yellow-50 px-[100px] pt-[8rem] pb-[3rem] ">
          <div className="flex justify-start items-start">
            <div className="w-[45%]">
              <div className="px-[2rem] w-fit h-fit py-[1rem] bg-theme-green rounded-[100px] text-theme-white uppercase font-normal text-[.75rem] tracking-[3px] z-[10] relative">
                Become A Homechef
              </div>
              <div className="text-theme-black text-[2rem] leading-[40px] w-[70%] mt-[3rem]">
              Showcase your culinary magic to the {" "}
                <span className="text-theme-red font-semibold">WORLD</span>
              </div>
              <div className="text-theme-black text-[1rem] leading-[20px] w-[70%] font-extralight mt-[2rem] text-justify">
              Share your culinary creations with the world! Unleash your cooking magic and let everyone savor the flavors you create. Join us and showcase your skills, bringing the joy of home-cooked meals to a wider audience. Let your kitchen talents shine and connect with food lovers everywhere!
              </div>
            </div>

            <div className="w-[65%] flex flex-col gap-5 justify-center items-center">
              <Image src={"/img/homechef-home1.gif"} height={500} width={500} />
              <div>
                <PrimaryButton name={"Start you journey "} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homechef;
