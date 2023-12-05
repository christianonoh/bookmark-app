"use client";

import Image from "next/image";
// import Logo from '@/public/images/logo-bookmark.svg'
import { cx, navLinks } from "@/utils";
import Link from "next/link";
import Button from "../shared/Button";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import { FacebookIcon, Logo, TwitterIcon } from "../icons";

const Header = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <header>
      <div className="relative max-w-6xl mx-auto flex items-center justify-between gap-8 px-5 py-12">
        <Logo className={cx(toggled ? "hidden" : "block", "h-8 w-auto")} />
        <Logo
          className={cx(toggled ? "block" : "hidden", "h-8 w-auto z-30")}
          fill="white"
        />
        <nav>
          {/* Desktop Navigation  */}
          <span className="hidden md:flex gap-12 items-center uppercase text-gray-dark text-xs tracking-widest font-semibold">
            {navLinks.map(({ name, path }) => (
              <Link href={path} key={name} className="hover:text-red transition-all duration-200 ease-in-out">
                {name}
              </Link>
            ))}
            <Button
              title="Login"
              link="/login"
              className="bg-red px-8 uppercase tracking-wider hover:bg-white hover:text-red hover:border-red"
            />
          </span>

          {/* Mobile Navigation  */}
          <span className="flex md:hidden gap-12 items-center uppercase text-gray-dark text-xs tracking-widest font-semibold">
            <span className={cx(toggled ? "text-white" : "", "text-dark z-30")}>
              <Hamburger
                toggled={toggled}
                toggle={setToggled}
                size={28}
              />
            </span>
            <div
              className={cx(
                toggled ? "scale-y-100 origin-top" : "scale-y-0 origin-top",
                "flex flex-col justify-around w-full bg-dark/60 shadow-sm absolute z-10 left-0 height__screen transform transition-transform duration-300 ease-in-out top-0"
              )}
            >
              <span className="max-w-sm mx-auto flex flex-col w-full tracking-wider font-bold text-white text-lg px-5 mt-20">
                {navLinks.map(({ name, path }) => (
                  <Link
                    href={path}
                    key={name}
                    className="py-6 text-center border-t border-white/20"
                  >
                    {name}
                  </Link>
                ))}
                <div className="border-t border-white/20 w-full" />
                <Button
                  title="Login"
                  link="/"
                  className="mt-8 bg-transparent border-2 border-white w-full px-8 uppercase tracking-wider text-lg hover:bg-white hover:text-dark"
                />
              </span>
              <span className="flex gap-8 items-center mt-12 mx-auto">
                <FacebookIcon className="h-6 w-auto" />
                <TwitterIcon className="h-6 w-auto" />
              </span>
            </div>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
