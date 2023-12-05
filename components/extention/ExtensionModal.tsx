import React from "react";
import Button from "../shared/Button";
import Image from "next/image";
import DottedLine from "@/public/images/bg-dots.svg";

interface ExtensionModalProps {
  img: string;
  heading: string;
  min_version: string;
}

const ExtensionModal = ({ img, heading, min_version }: ExtensionModalProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg py-5 w-full max-w-md mx-auto">
      <span className="px-5 flex flex-col items-center">
      <Image src={img} alt={heading} className="h-20 w-20 mb-8" />
      <p className="text-xl font-semi-bold text-dark px-5 mb-2">{heading}</p>
      <p className="text-lg whitespace-nowrap text-gray-medium leading-relaxed mb-8 px-5">
        {min_version}
      </p>
      </span>
      <Image src={DottedLine} alt="Dotted Line" className="mb-8 w-full" />
      <span className="px-5 flex flex-col">
      <Button
        title="Add & Install Extension"
        link="/"
        className="w-full font-semibold shadow-md hover:text-accent hover:border-accent hover:bg-transparent"
      />
      </span>
    </div>
  );
};

export default ExtensionModal;
