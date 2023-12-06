import Image from "next/image";
import React from "react";
import heroImage from "@/public/images/illustration-hero.svg";
import heroBg from "@/public/images/herobg.svg";
import Button from "../shared/Button";

const HomeCover = () => {
  return (
    <section className="h-full lg:h-[80vh] flex flex-col md:flex-row py-16 items-center gap-4 max-w-[1440px] mx-auto">
    <div className="w-full md:w-1/2 h-full flex justify-center relative px-5 md:pr-10 md:order-2 mb-24 md:mb-0">
      <Image src={heroImage} priority alt="hero" className="object-contain" />
      <Image
        src={heroBg}
        alt="hero"
        className="absolute -z-10 h-auto w-2/3 right-0 top-1/3 "
      />
    </div>
      <div className="w-full md:w-1/2 px-5 md:order-1 md:pl-10">
        <div className="max-w-lg mx-auto text-center md:text-left">
          <h1 className="text-3xl lg:text-5xl text-dark font-bold mb-8">
            A Simple Bookmark Manager
          </h1>
          <p className="text-lg text-gray-medium leading-relaxed mb-8">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex items-center gap-8 w-fit mx-auto">
            <Button title="Get it on Chrome" link="/" className="font-bold shadow-md hover:text-accent hover:border-accent hover:bg-transparent flex-1" />
            <Button title="Get it on Firefox" link="/" className="!font-bold shadow-md bg-gray-light/20 !text-dark/60 hover:border-dark/60 hover:bg-transparent flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCover;
