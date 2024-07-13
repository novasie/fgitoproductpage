import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="h-fit  w-full bg-theme-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
         
        >
          {" "}
          <path
            className="fill-theme-red-200"
            opacity=".5"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>{" "}
          <path
            className="fill-theme-yellow"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>{" "}
          <path
            className="fill-theme-green-900"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>{" "}
        </svg>
        <div className="w-full px-[2.7rem] pt-[3rem]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="flex flex-col gap-8 md:w-1/2">
              <div className="px-[2rem] w-fit h-fit py-[1rem] bg-theme-green rounded-[100px] text-theme-white uppercase font-normal text-[.75rem] tracking-[3px]">
                About Fgito
              </div>
              <div className="text-theme-black text-[2rem] leading-[40px] w-full sm:w-[70%] ">
                Bringing Back Home-Cooked Goodness in a Busy World
              </div>
              <div className="flex flex-col gap-1 lg:gap-2">
                <div className="text-theme-black text-xl lg:text-[1rem] leading-[40px] w-[70%] font-bold uppercase">
                  Why FGITO?
                </div>
                <div className="text-theme-black w-full text-base  lg:text-[1rem] leading-[20px]  lg:w-[70%] font-extralight">
                Home cooks a.k.a our mother priorities hygiene and quality over profit Reconnect with the love and tradition of home-cooked meals.
                </div>
              </div>
            </div>
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-[.5rem] md:gap-y-[4rem] lg:w-[65%]">
              <div className="flex gap-6 lg:gap-8 w-full flex-col justify-start items-start ">
                <Image
                  src={"/img/icons/problem.png"}
                  height={100}
                  width={100}
                />
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="text-theme-black text-2xl lg:text-[2rem]  leading-[30px] sm:w-[60%]  ">
                    Problem
                  </div>
                  <div className="text-theme-black text-base lg:text-[1rem] leading-[20px] md:w-[70%]  w-full font-extralight text-justify">
                  Busy lives, long working hours, and lack of time lead to unhealthy food choices
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:gap-8 justify-start items-start">
                <Image
                  src={"/img/icons/solution.png"}
                  height={100}
                  width={100}
                />
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="text-theme-black text-2xl lg:text-[2rem] leading-[30px] sm:w-[60%] ">
                    Solution
                  </div>
                  <div className="text-theme-black text-base lg:text-[1rem] leading-[20px] sm:w-[90%] md:w-[70%]  font-extralight text-justify">
                  FGITO connects you with our home chefs who bring back the love and taste of "Ghar ka Khana Ghar se dur"
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:gap-8 justify-start items-start">
                <Image
                  src={"/img/icons/benefit.png"}
                  height={100}
                  width={100}
                />
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="text-theme-black text-2xl lg:text-[2rem] leading-[30px] sm:w-[60%] ">
                    Benefits
                  </div>
                  <div className="text-theme-black text-base lg:text-[1rem] leading-[20px]  md:w-[70%] font-extralight  text-justify">
                  Eat healthier, boost your immunity, leave the delivery doubts on FGITO and rediscover the joy of home food!
                  </div>
                </div>
              </div>
              <div className="flex  flex-col gap-6 lg:gap-8 justify-start items-start">
                <Image
                  src={"/img/icons/calltoaction.png"}
                  height={100}
                  width={100}
                />

                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="text-theme-black text-2xl lg:text-[2rem] leading-[30px]  ">
                    Call to Action
                  </div>
                  <div className="text-theme-black text-base lg:text-[1rem] leading-[20px]  sm:w-[90%] md:w-[70%] font-extralight text-justify">
                  Skip the stress, skip the junk - Order on FGITO and enjoy “Maa ke hath ka khana”
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
