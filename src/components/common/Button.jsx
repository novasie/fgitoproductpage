import React from "react";

export const PrimaryButton = ({ name }) => {
  return (
    <>
      <button
        className={
          "w-[300px] py-[1rem] text-[1.25rem] bg-theme-red-100 text-theme-white uppercase font-bold tracking-[4px] rounded"
        }
      >
        {name}
      </button>
    </>
  );
};
