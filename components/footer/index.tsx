import React from "react";
import { FacebookIcon, Logo, TwitterIcon } from "../icons";
import { navLinks } from "@/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark px-5 md:px-10 py-16 md:py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:justify-between items-center">
        <span className="flex flex-col items-center md:flex-row gap-8 ">
          <Logo className="h-8 w-auto opacity-80" fill="white" />
          {navLinks.map(({ name, path }) => (
            <Link href={path} key={name} className="hover:text-gray-light text-gray-medium text-center uppercase">
              {name}
            </Link>
          ))}
        </span>
        <span className="flex gap-8 items-center mt-8 md:mt-0">
          <FacebookIcon className="h-6 w-auto" />
          <TwitterIcon className="h-6 w-auto" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
