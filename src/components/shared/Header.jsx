"use client";
import React from "react";
import { roboto_500 } from "@/app/fonts";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-4 px-[80px] py-[10px]">
          <div className="col-span-1 flex justify-start items-center gap-[25px]">
            <div className="rounded-full overflow-hidden">
              <a href="/">
                <img height={100} width={100} src="/img/logo.png" />
              </a>
            </div>
            <div
              className={classNames(
                "text-[25px] border-b-[2px] border-theme-red px-[2px]",
                roboto_500.className
              )}
            >
              <a href="/">FGITO</a>
            </div>
          </div>
          <div
            className={classNames(
              "col-span-3 flex justify-end items-center gap-[60px] text-[18px] font-[500]",
              roboto_500.className
            )}
          >
            <a
              className={classNames(
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
              className={classNames(
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
              className={classNames(
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
              className={classNames(
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
              className={classNames(
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
    </>
  );
};

export default Header;
