import Header from "@/components/shared/Header";
import React from "react";
import Content from "./Content";

const Banner = () => {
  return (
    <div className="bg-[url('/img/homeBannerBg.svg')] w-full ">
      <Header />
      <Content />
    </div>
  );
};

export default Banner;
