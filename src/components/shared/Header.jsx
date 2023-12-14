"use client";
import React, { useState } from "react";
import { roboto_500 } from "@/app/fonts";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState("hidden");

  const toggleMobileMenu = () => {
    if (mobileMenu === "hidden") {
      setMobileMenu("block");
    } else if (mobileMenu === "block") {
      setMobileMenu("hidden");
    }
  };
  return (
    <>
      <div className="lg:block hidden w-full">
        <div className="w-full">
          <div className="grid grid-cols-4 px-20 py-[10px]">
            <div className="col-span-1 flex justify-start items-center gap-[25px]">
              <div className="rounded-full overflow-hidden">
                <a href="/">
                  <img height={100} width={100} src="/img/logo.png" />
                </a>
              </div>
              <div
                className={clsx(
                  "text-[25px] border-b-[2px] border-theme-red px-[2px]",
                  roboto_500.className
                )}
              >
                <a href="/">FGITO</a>
              </div>
            </div>
            <div
              className={clsx(
                "col-span-3 flex justify-end items-center gap-[60px] text-[18px] font-[500]",
                roboto_500.className
              )}
            >
              <a
                className={clsx(
                  "px-[2px] ",
                  pathname === "/"
                    ? "border-b-[2px] border-theme-red"
                    : "animate-border"
                )}
                href="/"
              >
                Home
              </a>
              <a
                className={clsx(
                  "px-[2px] ",
                  pathname === "/homechef"
                    ? "border-b-[2px] border-theme-red"
                    : "animate-border"
                )}
                href="/homechef"
              >
                HomeChef
              </a>
              <a
                className={clsx(
                  "px-[2px] ",
                  pathname === "/services"
                    ? "border-b-[2px] border-theme-red"
                    : "animate-border"
                )}
                href="/services"
              >
                Food Services
              </a>
              <a
                className={clsx(
                  "px-[2px] ",
                  pathname === "/help"
                    ? "border-b-[2px] border-theme-red"
                    : "animate-border"
                )}
                href="/help"
              >
                Help
              </a>
              <a
                className={clsx(
                  "px-[2px] ",
                  pathname === "/contact"
                    ? "border-b-[2px] border-theme-red"
                    : "animate-border"
                )}
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sm1:block lg:hidden">
        <div
          onClick={() => toggleMobileMenu()}
          className="w-full flex justify-between items-center cursor-pointer"
        >
          <div className="col-span-1 flex justify-start items-center gap-[10px]">
            <div className="rounded-full overflow-hidden">
              <a href="/">
                <img height={100} width={100} src="/img/logo.png" />
              </a>
            </div>
            <div
              className={clsx(
                "text-[25px] border-b-[2px] border-theme-red px-[2px]",
                roboto_500.className
              )}
            >
              <a href="/">FGITO</a>
            </div>
          </div>
          <img
            className="h-[42px] w-[42px] mx-5 cursor-pointer"
            src="/img/icons/hamburger.svg"
          />
        </div>
        <div
          className={clsx(
            "bg-theme-green h-[100vh] w-[200px] absolute right-0 top-0",
            mobileMenu
          )}
        >
          <div className="w-full py-2 flex flex-col">
            <div
              onClick={() => toggleMobileMenu()}
              className="flex justify-end mx-4 text-theme-white my-2 text-xl cursor-pointer"
            >
              X
            </div>
            <div>
              <div
                className={clsx(
                  "col-span-3 flex flex-col justify-end items-center gap-[60px] text-[18px] text-theme-white font-[400]",
                  roboto_500.className
                )}
              >
                <a
                  className={clsx(
                    "px-[2px] ",
                    pathname === "/"
                      ? "text-[20px] font-[800]"
                      : "animate-border"
                  )}
                  href="/"
                >
                  Home
                </a>
                <a
                  className={clsx(
                    "px-[2px] ",
                    pathname === "/homechef"
                      ? "text-[20px] font-[800]"
                      : "animate-border"
                  )}
                  href="/homechef"
                >
                  HomeChef
                </a>
                <a
                  className={clsx(
                    "px-[2px] ",
                    pathname === "/services"
                      ? "text-[20px] font-[800]"
                      : "animate-border"
                  )}
                  href="/services"
                >
                  Food Services
                </a>
                <a
                  className={clsx(
                    "px-[2px] ",
                    pathname === "/help"
                      ? "text-[20px] font-[800]"
                      : "animate-border"
                  )}
                  href="/help"
                >
                  Help
                </a>
                <a
                  className={clsx(
                    "px-[2px] ",
                    pathname === "/contact"
                      ? "text-[20px] font-[800]"
                      : "animate-border"
                  )}
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 left-0">jehjk</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
