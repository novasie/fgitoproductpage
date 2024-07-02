import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="h-fit w-full bg-theme-white ">
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
        <div className="px-[100px] pt-[6rem]">
          <div className="flex justify-start items-start">
            <div className="w-[45%]">
              <div className="px-[2rem] w-fit h-fit py-[1rem] bg-theme-green rounded-[100px] text-theme-white uppercase font-normal text-[.75rem] tracking-[3px]">
                About Fgito
              </div>
              <div className="text-theme-black text-[2rem] leading-[40px] w-[70%] mt-[3rem]">
                Bringing Back <br /> Home-Cooked Goodness in a Busy World
              </div>
              <div className="text-theme-black text-[1rem] leading-[40px] w-[70%] mt-[3rem] font-bold uppercase">
              Why FGITO?
              </div>
              <div className="text-theme-black text-[1rem] leading-[20px] w-[70%] font-extralight">
              Home cooks prioritize hygiene and quality over profit <br/>
                Reconnect with the love and tradition of home-cooked meals.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-[.5rem] gap-y-[4rem] w-[65%]">
            <div className="flex flex-col justify-start items-start">
                <Image src={"/img/icons/problem.png"} height={100} width={100} />
                <div className="text-theme-black text-[2rem] leading-[30px] w-[70%] mt-[3rem]">
                Problem
                </div>
                <div className="text-theme-black text-[1rem] leading-[20px] w-[70%] font-extralight mt-[1.25rem] text-justify">
                Busy lives, long work hours, and lack of time lead to unhealthy
                choices like junk food or impersonal restaurant meals. 
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <Image src={"/img/icons/solution.png"} height={100} width={100} />
                <div className="text-theme-black text-[2rem] leading-[30px] w-[70%] mt-[3rem]">
                Solution
                </div>
                <div className="text-theme-black text-[1rem] leading-[20px] w-[70%] font-extralight mt-[1.25rem] text-justify">
                FGITO connects you with home chefs who bring back the love and taste of "Ghar ka Khana Ghar se dur" 
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <Image src={"/img/icons/benefit.png"} height={100} width={100} />
                <div className="text-theme-black text-[2rem] leading-[30px] w-[70%] mt-[3rem]">
                Benefits
                </div>
                <div className="text-theme-black text-[1rem] leading-[20px] w-[70%] font-extralight mt-[1.25rem] text-justify">
                FGITO connects you with home chefs who bring back the love and taste of "Ghar ka Khana Ghat se dur" 
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <Image src={"/img/icons/calltoaction.png"} height={100} width={100} />
                <div className="text-theme-black text-[2rem] leading-[30px] w-[70%] mt-[3rem]">
                Call to Action
                </div>
                <div className="text-theme-black text-[1rem] leading-[20px] w-[70%] font-extralight mt-[1.25rem] text-justify">
                Eat healthier, boost your immunity, and ditch the delivery doubts FGITO and rediscover the joy of real food!
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
