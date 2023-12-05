"use client";

import { useState } from "react";
import { ArrowDownIcon } from "../icons";
import { cx } from "@/utils";

interface QuestionProps {
  question: string;
  answer: string;
}

const Question = ({ question, answer }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" border-b border-gray-light mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="hover:text-red transition-all duration-200 ease-in-out">
          {question}
        </div>
        <div
          className={cx('transform ml-2', isOpen ? "rotate-180 text-red" : "rotate-0", 'transition duration-300')}
        >
          <ArrowDownIcon
            stroke={isOpen ? "#FA5959" : ""}
            className="w-[18px] h-auto"
          />
        </div>
      </div>
      {isOpen && <div className=" p-4">{answer}</div>}
    </div>
  );
};

export default Question;
