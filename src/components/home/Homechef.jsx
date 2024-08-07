import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../common/Button";

const Homechef = () => {

  const ApplyUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdoQDcz8AQowT3mQVkrpIelZGqTJRV6ecBx-zA4SiUZk5wsaA/viewform";
  return (
    <>
      <div id="HomechefSection" className="h-fit w-full  overflow-hidden">
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
        <div className="w-full  bg-theme-yellow-50  px-[2.7rem] pt-[4rem] lg:pt-[6rem]">
        <div className="px-[2rem] w-fit h-fit py-[1rem] bg-theme-green rounded-[100px] text-theme-white uppercase font-normal  text-[.75rem] tracking-[3px] z-[10] relative">
                Become A Homechef
          </div>
          <div className="flex flex-col-reverse py-[3rem] items-center gap-10 w-full lg:flex-row  lg:items-start">
          
            <div className=" gap-4 px-6 sm:w-[24rem] md:w-[28rem] flex flex-col lg:mt-[4rem] items-center lg:items-start lg:w-[45%]">
              
              <div className="text-theme-black text-[1.7rem] sm:text-[2rem] text-left sm:text-center lg:text-start  md:text-[2.5rem] md:leading-[3.2rem] leading-[38px] w-full">
              Showcase your culinary magic to the {" "}
                <span className="text-theme-green font-semibold">WORLD</span>
              </div>
              <div className="text-theme-black text-base lg:text-[1.1rem] lg:leading-[1.6rem] leading-[20px] w-full font-extralight text-justify ">
              Share your culinary creations with the world! Unleash your cooking magic and let everyone savor the flavors you create. Join us and showcase your skills, bringing the joy of home-cooked meals to a wider audience. Let your kitchen talents shine and connect with food lovers everywhere!
              </div>
            </div>

            <div className="w-full flex flex-col gap-5 justify-center items-center">
              <Image src={"/img/homechef-home1.gif"} height={500} width={500} />
              <div>
               <a href={ApplyUrl}>
                <PrimaryButton name={"Start your journey"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homechef;
