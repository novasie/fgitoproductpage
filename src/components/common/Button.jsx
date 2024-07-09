import React from "react";

export const PrimaryButton = ({ name }) => {
  return (
    <>
      <button
        className={
          "px-[1rem] md:px-[2rem] w-[18rem] md:w-auto py-[1rem] text-[1rem] md:text-[1.25rem] bg-theme-red-100 text-theme-white uppercase font-bold tracking-[4px] rounded"
        }
      >
        {name}
      </button>
    </>
  );
};
