import Image from "next/image";
import React from "react";

const Services = () => {
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
            className="fill-theme-green-50"
            opacity=""
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>{" "} */}
          <path
            className="fill-theme-green-50"
            opacity="1"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>{" "}
          {/* <path
            className="fill-theme-green-50"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>{" "} */}
        </svg>
        <div className="w-full bg-theme-white px-[2.7rem] pt-[4rem] lg:pt-[6rem]">
          <div className="flex flex-wrap justify-start items-start">
            <div className="w-full md:w-1/2 lg:w-2/5">
              <div className="px-[2rem] w-fit h-fit py-[1rem] bg-theme-green rounded-[100px] text-theme-white uppercase font-normal text-xs lg:text-[.75rem] tracking-[3px] z-[10] relative">
                Services
              </div>
              <div className="text-theme-black text-[2rem] leading-[40px] w-full md:w-[70%] lg:w-[80%] mt-[3rem]">
                Begin your culinary adventure with{" "}
                <span className="text-theme-green font-semibold">FGITO</span>
              </div>
              <div className="text-theme-black text-base lg:text-[1rem] leading-[20px] w-full md:w-[70%] lg:w-[80%] font-extralight mt-[2rem] text-justify">
              FGITO proudly offers a variety of services designed to connect you with the joy of home-cooked meals. If you're craving the taste of homemade food, we've got you covered.
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-3/5 flex-wrap mt-10 lg:mt-0 flex justify-between items-start gap-8 lg:gap-0 ">
              <div className="group w-full sm:my-4 sm:w-[45%] lg:w-[24%] h-fit sm:h-[500px] border-[.6px] border-opacity-[.6] rounded-sm border-theme-black py-4 sm:py-[.25rem] px-[.125rem] relative overflow-hidden">
                <div className="sm:absolute bottom-[2rem] md:bottom-0 py-[.75rem] px-[.5rem] z-10 transition-all duration-1000 ease-in-out">
                  <div className="transition-transform duration-1000 ease-in-out lg:group-hover:scale-105">
                    <Image src={"/services/bulk.png"} width={80} height={80} />
                  </div>
                  <div className="text-theme-black text-[1.25rem] leading-6 font-bold uppercase mt-[.75rem] transition-all duration-1000 ease-in-out">
                    <span className="text-theme-red-100 transition-all duration-1000 ease-in-out">
                      Get-Together
                    </span>{" "}
                    <br />
                    <span className="lg:group-hover:text-theme-white transition-all duration-1000 ease-in-out">
                      Order
                    </span>
                  </div>
                  <div className="text-theme-black text-base leading-[26px] lg:text-[.75rem] lg:leading-[20px] font-semibold mt-[.75rem] lg:group-hover:text-theme-white transition-all duration-1000 ease-in-out md:hidden group-hover:block">
                    We understand the big things you need to handle while
                    hosting your small party at home. Especially when it comes
                    to food. We are happy to provide delectable, hot, and
                    healthy cuisine at your doorstep for home gatherings
                  </div>
                </div>
                <div className="absolute lg:top-0 left-0 w-full h-full bg-theme-green transition-transform duration-1000 ease-in-out lg:group-hover:translate-y-0 translate-y-full z-0"></div>
                <button className="px-[1rem] hidden py-[.25rem] bg-theme-red-200 rounded text-theme-white uppercase text-xl lg:text-[1rem] font-bold absolute top-2 right-2">
                  info
                </button>
              </div>
              <div className="group w-full sm:my-4 sm:w-[45%] lg:w-[24%] h-fit sm:h-[500px] border-[.6px] border-opacity-[.6] rounded-sm border-theme-black py-4 sm:py-[.25rem] px-[.125rem] relative overflow-hidden">
                <div className="sm:absolute bottom-[2rem] md:bottom-0 py-[.75rem] px-[.5rem] z-10 transition-all duration-1000 ease-in-out">
                  <div className="transition-transform duration-1000 ease-in-out lg:group-hover:scale-105">
                    <Image
                      src={"/services/subscription.png"}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="text-theme-black text-xl lg:text-[1.25rem] leading-6 font-bold uppercase mt-[.75rem] transition-all duration-1000 ease-in-out">
                    <span className="text-theme-red-100 transition-all duration-1000 ease-in-out">
                      Apply
                    </span>{" "}
                    <br />
                    <span className="lg:group-hover:text-theme-white transition-all duration-1000 ease-in-out">
                      Subscription
                    </span>
                  </div>
                  <div className="text-theme-black text-base lg:text-[.75rem] leading-[26px] lg:leading-[20px] font-semibold mt-[.75rem] lg:group-hover:text-theme-white transition-all duration-1000 ease-in-out md:hidden lg:group-hover:block">
                  FGITO also provides subscription-based delivery services. Where you can schedule monthly meal plans and enjoy hassle-free delivery on time.
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-theme-green transition-transform duration-1000 ease-in-out lg:group-hover:translate-y-0 translate-y-full z-0"></div>
                <button className="px-[1rem] py-[.25rem] bg-theme-red-200 rounded text-theme-white uppercase text-xl lg:text-[1rem] font-bold absolute top-2 right-2 hidden">
                  info
                </button>
              </div>
              <div className="group w-full sm:my-4 sm:w-[45%] lg:w-[24%] h-fit sm:h-[500px] border-[.6px] border-opacity-[.6] rounded-sm border-theme-black py-4 sm:py-[.25rem] px-[.125rem] relative overflow-hidden">
                <div className="sm:absolute bottom-[2rem] md:bottom-0 py-[.75rem] px-[.5rem] z-10 transition-all duration-1000 ease-in-out">
                  <div className="transition-transform duration-1000 ease-in-out lg:group-hover:scale-105">
                    <Image
                      src={"/services/Cvendor.png"}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="text-theme-black text-xl lg:text-[1.25rem] leading-6 font-bold uppercase mt-[.75rem] transition-all duration-1000 ease-in-out">
                    <span className="text-theme-red-100 transition-all duration-1000 ease-in-out">
                      Corporate
                    </span>{" "}
                    <br />
                    <span className="lg:group-hover:text-theme-white transition-all duration-1000 ease-in-out">
                      Vendoring
                    </span>
                  </div>
                  <div className="text-theme-black text-base lg:text-[.75rem] leading-[26px] lg:leading-[20px] font-semibold mt-[.75rem] lg:group-hover:text-theme-white transition-all duration-1000 ease-in-out md:hidden group-hover:block">
                    Treat your employees with healthy and delicious meals. Give
                    no reason for low energetic days with food prepared by our
                    home chefs. Best cleaning and hygiene practices are
                    maintained to replicate the exact love and taste of home.
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full lg:bg-theme-green transition-transform duration-1000 ease-in-out group-hover:translate-y-0 translate-y-full z-0"></div>
                <button className="px-[1rem] py-[.25rem] bg-theme-red-200 rounded hidden text-theme-white uppercase text-xl lg:text-[1rem] font-bold absolute top-2 right-2">
                  info
                </button>
              </div>
              <div className="group w-full  sm:my-4 sm:w-[45%] lg:w-[24%] h-fit sm:h-[500px] border-[.6px] border-opacity-[.6] rounded-sm border-theme-black py-4 sm:py-[.25rem] px-[.125rem] relative overflow-hidden">
                <div className="sm:absolute bottom-[2rem] md:bottom-0 py-[.75rem] px-[.5rem] z-10 transition-all duration-1000 ease-in-out">
                  <div className="transition-transform duration-1000 ease-in-out lg:group-hover:scale-105">
                    <Image src={"/services/apps.png"} width={80} height={80} />
                  </div>
                  <div className="text-theme-black text-xl lg:text-[1.25rem] leading-6 font-bold uppercase mt-[.75rem] transition-all duration-1000 ease-in-out">
                    <span className="text-theme-red-100 transition-all duration-1000 ease-in-out">
                      Order
                    </span>{" "}
                    <br />
                    <span className="lg:group-hover:text-theme-white transition-all duration-1000 ease-in-out">
                      on-demand
                    </span>
                  </div>
                  <div className="text-theme-black text-base lg:text-[0.75rem] leading-[20px] font-semibold mt-[.75rem] lg:group-hover:text-theme-white transition-all duration-1000 ease-in-out md:hidden group-hover:block">
                  Get your home-cooked food whenever you need it with our efficient on-demand ordering service.
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full lg:bg-theme-green transition-transform duration-1000 ease-in-out group-hover:translate-y-0 translate-y-full z-0"></div>
                <button className="px-[1rem] py-[.25rem] bg-theme-red-200 rounded hidden text-theme-white uppercase text-xl lg:text-[1rem] font-bold absolute top-2 right-2 ">
                  info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
