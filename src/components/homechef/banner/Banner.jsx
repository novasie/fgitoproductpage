import Header from "@/components/shared/Header";
import React from "react";
import Content from "./Content";

const Banner = () => {
  return (
    <div className="bg-white h-[600px] w-full">
      <Header />
      <Content />
    </div>
  );
};

export default Banner;
