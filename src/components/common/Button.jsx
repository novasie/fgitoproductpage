import React from "react";

export const PrimaryButton = ({ name }) => {
  return (
    <>
      <button
        className={
          "px-[2rem] w-full font-bold text-[.75rem] tracking-[3px]  md:w-auto py-[1rem]  md:text-[1.25rem] bg-theme-red-100 text-theme-white uppercase rounded"
        }
      >
        {name}
      </button>
    </>
  );
};
