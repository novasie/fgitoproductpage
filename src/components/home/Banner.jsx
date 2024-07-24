'use client';
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { PrimaryButton } from "../common/Button";

const Banner = () => {
  const router = useRouter();
  const tryFgitoUrl = "https://wa.me/+918081221164";

  const scrollToHomechef = (e) => {
    e.preventDefault();
    const homechefSection = document.getElementById('HomechefSection');
    if (homechefSection) {
      homechefSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="w-full relative px-[2.7rem] py-[3rem] flex flex-col-reverse lg:flex-row justify-center items-center bg-theme-green-900 h-auto gap-10  lg:gap-[12rem] overflow-hidden ">
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
              <a href="#HomechefSection" onClick={scrollToHomechef}>
                <PrimaryButton name={"become homechef"}></PrimaryButton>
              </a>
            </div>
          </div>
        </div>
        <div className="z-[1] mt-[4rem] md:mt-0">
          <Image
            className="z-10"
            src="/coming_soon.png"
            height={500}
            width={500}
            alt="img"
          />
        </div>
        <Image
          className="absolute hidden lg:block z-[0] top-5 left-5 opacity-[1]"
          src={"/img/logo.png"}
          height={120}
          width={120}
          alt="logo"
        />
        <div className="w-full absolute top-0 left-0 lg:left-[80%] lg:top-[80%] z-[0] flex gap-1 items-start justify-start lg:items-center mt-[3rem] ml-[3rem] bottom-5 right-5 opacity-[1]">
          <Image
            className=""
            src={"/img/location.png"}
            height={20}
            width={20}
            alt="location"
          />
          <span className="text-theme-white font-bold text-[0.8rem] sm:text-[1.2rem] lg:text-[.75rem]">
            Only Available in Noida
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
