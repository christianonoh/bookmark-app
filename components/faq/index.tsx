import { faqs } from "@/utils";
import React from "react";
import Question from "./Question";
import Button from "../shared/Button";

const FAQ = () => {
  return (
    <section className="flex flex-col py-16 px-5 md:px-10  max-w-lg mx-auto items-center">
      <h2 className="text-3xl capitalized font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-medium leading-relaxed mb-16 text-center px-5">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className="w-full">
        <div className="border-b w-full border-gray-light" />
        {
          faqs.map((faq, index) => (
            <Question key={index} question={faq.question} answer={faq.answer} />
          ))
        }
      </div>
      <Button
            title="More Info"
            link="/"
            className="font-bold shadow-md hover:text-accent hover:border-accent hover:bg-transparent flex-1 mt-8"
          />
    </section>
  );
};

export default FAQ;
