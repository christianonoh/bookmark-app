import { cx, extentions } from "@/utils";
import React from "react";
import ExtensionModal from "./ExtensionModal";

const ExtensionSection = () => {
  return (
    <section className="flex flex-col py-16 px-5 md:px-10 items-center">
      <h2 className="text-3xl capitalized font-bold mb-8 text-center">
        Download the extension
      </h2>
      <p className="text-lg text-gray-medium leading-relaxed mb-12 max-w-lg text-center px-5">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="flex flex-col md:flex-row gap-6 w-full  max-w-5xl mx-auto">
        {extentions.map((extention, index) => (
          <div className={cx("w-full md:w-1/3", `mt-${index * 8}`)}>
            <ExtensionModal
              key={index}
              img={extention.img}
              heading={extention.heading}
              min_version={extention.min_version}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtensionSection;
