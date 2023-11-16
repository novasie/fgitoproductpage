import { roboto_300, roboto_500, roboto_700 } from "@/app/fonts";
import { footerContact, socialMedia } from "@/config/Constant";
import clsx from "clsx";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className={clsx("mt-[70px] mb-[30px] px-[80px]")}>
        <div className="flex justify-center">
          <div>
            <h2
              className={clsx(
                "text-center text-[28px] text-theme-black",
                roboto_700
              )}
            >
              Contact us
            </h2>
            <div
              className={clsx(
                "flex justify-center items-center gap-2 text-[14px] text-theme-green",
                roboto_500.className
              )}
            >
              <div className="bg-theme-red w-[40px] h-[2px]"></div>
              <div>how you contact us</div>
              <div className="bg-theme-red w-[40px] h-[2px]"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-[10px]">
          <div className="col-span-1">
            <img src="/img/logowithslogan.png" />
            <div className="flex justify-center items-center gap-[20px] mt-[30px] ">
              {socialMedia.map((social) => {
                return (
                  <a href={social.url} alt={social.name} target="_blank">
                    {" "}
                    <img className="h-[42px] w-[42px]" src={social.icon} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div>
              {footerContact.map((item) => {
                return (
                  <div className="flex justify-start items-center mb-[50px] gap-[20px]">
                    <div>
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-[42px] w-[42px]"
                      />
                    </div>
                    <div className="">
                      <div
                        className={clsx(
                          "text-[15px] capitalize",
                          roboto_700.className
                        )}
                      >
                        {item.name}
                      </div>
                      <div
                        className={clsx("text-[15px]", roboto_500.className)}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
