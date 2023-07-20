import { roboto_300, roboto_500, roboto_700 } from "@/app/fonts";
import classNames from "classnames";
import React from "react";

const Usp = () => {
  return (
    <>
      <div className={classNames("mt-[70px] px-[80px]")}>
        <div className="flex justify-center">
          <div>
            <h2
              className={classNames(
                "text-center text-[28px] text-theme-black",
                roboto_700
              )}
            >
              Why we are different?
            </h2>
            <div
              className={classNames(
                "flex justify-center items-center gap-2 text-[14px] text-theme-green",
                roboto_500.className
              )}
            >
              <div className="bg-theme-red w-[40px] h-[2px]"></div>
              <div>our usp</div>
              <div className="bg-theme-red w-[40px] h-[2px]"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 mt-[10px]">
          <div className="col-span-2 w-full flex justify-center items-center">
            <div
              className={classNames(
                "w-[400px] h-[250px] bg-theme-gray rounded-[10px] p-[20px]"
              )}
            >
              <div className={classNames("w-full  flex justify-center")}>
                <img className={classNames("h-[170px]")} src="/img/usp1.png" />
              </div>
              <div
                className={classNames(
                  "w-ful text-center text-[12px] text-theme-green"
                )}
              >
                Creating an Opportunity for Housewives to start their journey
                from Homemaker to Homepreneur
              </div>
            </div>
          </div>
          <div className="col-span-2 w-full flex justify-center items-center">
            <div className="w-[420px] h-[370px] rounded-[10px] flex justify-center items-center bg-[url('/img/homeBannerBg.svg')]">
              <div>
                <div className={classNames("w-full flex justify-center")}>
                  <img
                    className={classNames("h-[170px]")}
                    src="/img/usp2.png"
                  />
                </div>
                <div
                  className={classNames(
                    "w-ful text-center text-[12px] mt-[10px] text-theme-green"
                  )}
                >
                  Bringing you Ghar ka Khana in an affordable prices
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 w-full flex justify-center items-center">
            <div
              className={classNames(
                "w-[400px] h-[250px] bg-theme-gray rounded-[10px] p-[20px]"
              )}
            >
              <div className={classNames("w-full  flex justify-center")}>
                <img className={classNames("h-[170px]")} src="/img/usp3.png" />
              </div>
              <div
                className={classNames(
                  "w-ful text-center text-[12px] text-theme-green"
                )}
              >
                Flexible delivery same time different jagah as per your
                Availability
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usp;
