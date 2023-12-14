import { roboto_500, roboto_700 } from "@/app/fonts";
import clsx from "clsx";

const Usp = () => {
  return (
    <div className={clsx("mt-[70px] px-[80px]")}>
      <div className="flex justify-center">
        <div>
          <h2
            className={clsx(
              "text-center text-[28px] text-theme-black",
              roboto_700
            )}
          >
            Why we are different?
          </h2>
          <div
            className={clsx(
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
      <div class="grid grid-cols-1 md:grid-cols-6 gap-4 mt-2 md:mt-10">
        <div class="md:col-span-2 flex justify-center items-center">
          <div class="w-full max-w-[400px] min-h-[250px] bg-theme-gray rounded-[10px] p-5">
            <div class="flex justify-center">
              <img
                class="h-[170px]"
                src="/img/usp1.png"
                alt="Image Description"
              />
            </div>
            <div class="text-center text-[12px] text-theme-green">
              Creating an Opportunity for Housewives to start their journey from
              Homemaker to Homepreneur
            </div>
          </div>
        </div>

        <div class="md:col-span-2 flex justify-center items-center">
          <div class="w-full max-w-[420px] min-h-[370px] rounded-[10px] flex justify-center items-center bg-[url('/img/homeBannerBg.svg')]">
            <div>
              <div class="flex justify-center">
                <img
                  class="h-[170px]"
                  src="/img/usp2.png"
                  alt="Image Description"
                />
              </div>
              <div class="text-center text-[12px] mt-2.5 text-theme-green">
                Bringing you Ghar ka Khana in an affordable prices
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-2 flex justify-center items-center">
          <div class="w-full max-w-[400px] min-h-[250px] bg-theme-gray rounded-[10px] p-5">
            <div class="flex justify-center">
              <img
                class="h-[170px]"
                src="/img/usp3.png"
                alt="Image Description"
              />
            </div>
            <div class="text-center text-[12px] text-theme-green">
              Flexible delivery same time different jagah as per your
              Availability
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usp;
