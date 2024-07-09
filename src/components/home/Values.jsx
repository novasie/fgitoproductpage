import Image from "next/image";
import React from "react";
// import CollabImg from "../../../public/img/icons/agreement.png"
const Values = () => {
  return (
    <>
      <div className="h-fit w-full relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute"
        >
          {" "}
          {/* <path
            className="fill-theme-white"
            opacity=""
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>{" "} */}
          {/* <path
            className="fill-theme-white"
            opacity="1"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>{" "} */}
          <path
            className="fill-theme-white"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>{" "}
        </svg>
        <div className="w-full bg-theme-green-50 px-[2.7rem] py-[6rem]">
          <div className="px-[2rem] w-fit h-fit py-[1rem] bg-theme-green rounded-[100px] text-theme-white uppercase font-normal text-xs lg:text-[.75rem] tracking-[3px] z-[10] relative">
            Our Values
          </div>
          <div className="mt-8 grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="pt-[3rem]">
              <div className="flex flex-col justify-start items-start h-full bg-theme-white py-[2rem] px-[2.5rem] rounded-lg mt-[]">
                <Image
                  src={"/img/icons/agreement.png"}
                  height={120}
                  width={120}
                />
                <div className="text-theme-black text-[2rem] leading-[30px]  mt-[2rem]">
                Collaboration
                </div>
                <div className="text-theme-black text-[1rem] leading-[20px]  font-extralight mt-[20px]">
                Collaborate and uplift each other to become the best versions of yourselves.
                </div>
              </div>
            </div>
            <div className="pt-[3rem]">
              <div className="flex flex-col justify-start items-start h-full bg-theme-white py-[2rem] px-[2.5rem] rounded-lg">
                <Image
                  src={"/img/icons/compassion.png"}
                  height={100}
                  width={100}
                />
                <div className="text-theme-black text-[2rem] leading-[30px]  mt-[3rem]">
                Compassion
                </div>
                <div className="text-theme-black text-[1rem] leading-[20px]  font-extralight mt-[20px]">
                Embrace compassion and kindness towards everyone around you.
                </div>
              </div>
            </div>
            <div className="pt-[3rem]">
              <div className="flex flex-col justify-start items-start h-full bg-theme-white py-[2rem] px-[2.5rem] rounded-lg">
                <Image
                  src={"/img/icons/Commitment.png"}
                  height={100}
                  width={100}
                />
                <div className="text-theme-black text-[2rem] leading-[30px]  mt-[3rem]">
                Commitment
                </div>
                <div className="text-theme-black text-[1rem] leading-[20px]  font-extralight mt-[20px]">
                Unwavering Commitment to Our Goal
                </div>
              </div>
            </div>
            <div className="pt-[3rem] ">
              <div className="flex flex-col justify-start items-start bg-theme-white h-full py-[2rem] px-[2.5rem] rounded-lg">
                <Image
                  src={"/img/icons/goal.png"}

                  height={100}
                  width={100}
                />
                <div className="text-theme-black text-[2rem] leading-[30px]  mt-[3rem]">
                Conquer
                </div>
                <div className="text-theme-black text-[1rem] leading-[20px]  font-extralight mt-[20px]">
                Conquer the world with your humility and grace
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
