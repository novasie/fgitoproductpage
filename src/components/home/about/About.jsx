import { roboto_300, roboto_500, roboto_700 } from "@/app/fonts";
import classNames from "classnames";
import React from "react";

const About = () => {
  return (
    <>
      <div
        className={classNames(
          "lg:mt-[70px] sm1:mt-[30px] lg:px-[80px] sm1:px-[20px]"
        )}
      >
        <div className="flex justify-center">
          <div>
            <h2
              className={classNames(
                "text-center text-[28px] text-theme-black",
                roboto_700
              )}
            >
              About us
            </h2>
            <div
              className={classNames(
                "flex justify-center items-center gap-2 text-[14px] text-theme-green",
                roboto_500.className
              )}
            >
              <div className="bg-theme-red w-[40px] h-[2px]"></div>
              <div>who we are</div>
              <div className="bg-theme-red w-[40px] h-[2px]"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 mt-[10px]">
          <div className="lg:col-span-2 sm1:col-span-6"></div>
          <div
            className={classNames(
              "lg:col-span-4 sm1:col-span-6 text-theme-black text-[16px] text-justify",
              roboto_300
            )}
          >
            India being a multi-ethnic culture, there is a vast and wide range
            of food here. The specialty of the delicious and exotic cuisine of
            India is the subtle use of spices and herbs in it. But with rapid
            urbanisation, shifting millennial behavioural patterns, and shifting
            taste preferences, the junk food has taken over the home cooked
            meals. Nevertheless, a global crisis and two consecutive lock-downs
            have made people reconsider about their food choices. With many
            workplaces resuming work from offices, youngsters and employees are
            exhausted from opting junk food or preparing a full meal after
            returning home. While practically every food joint claims to deliver
            healthier food, but truth is one can’t really be sure.Don’t worry
            FGITO works as a bridge between home chefs and those who are missing
            home cooked meals. A healthy diet is extremely crucial to stay
            protected from any illness or virus and keep your immune system in
            top condition. So why not go for ‘Ghar ka Khana’! However, no one
            can deliver the exact taste like your mom, but we promise that its
            not going to be less than that.A busy lifestyle often interferes
            with maintaining a good health and opting for good food. You might
            be working long hours and hence most of the days depend on outside
            food. This is one of the main reasons why FGITO not just came up
            with a permanent solution to your problem, but also make sure that
            you are not losing out on some important nutrients.The contribution
            of housewives is no less than that of house owners who earn money,
            yet we all take their work lightly. It is time to bring these home
            chefs to forefront and let them connect with you through their
            delicious home cooked meals.Homemakers take full care of hygiene
            while preparing home made food. The oil, ghee and spices used are
            not just pure, but also make food completely perfect and delicious.
            Whereas restaurant, hotel, or street stalls all come under business
            food model which are purely based on earning profit and not
            considering the purity and hygiene.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
