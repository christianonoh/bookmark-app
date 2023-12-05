import Image from "next/image";
import heroBg from "@/public/images/herobg.svg";
import Button from "../shared/Button";

interface FeatureProps {
  img: string;
  title: string;
  content: string;
}

const Feature = ({ img, title, content }: FeatureProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 h-full flex justify-end items-center relative px-5 md:pr-10 mb-24 md:mb-0">
        <Image src={img} alt="hero" className="object-contain w-10/12 h-auto max-h-96" />
        <Image
          src={heroBg}
          alt="hero"
          className="absolute -z-10 h-auto w-2/3 left-0 top-1/3 transform rotate-180"
        />
      </div>
      <div className="w-full md:w-1/2 px-5 md:pl-10">
        <div className="max-w-md mx-auto text-center md:text-left">
          <h4 className="text-2xl lg:text-3xl text-dark font-bold mb-8">
            {title}
          </h4>
          <p className="text-lg text-gray-medium leading-relaxed mb-8">
            {content}
          </p>
          <Button
            title="More Info"
            link="/"
            className="font-bold shadow-md hover:text-accent hover:border-accent hover:bg-transparent flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
