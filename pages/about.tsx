import React from "react";
import Button from "./components/resource/Button";
import aboutImg from "../resource/images/aboutImg.png";
import Image from "next/image";

function About() {
  return (
    <div className="md:flex grid grid-cols-1 items-center justify-center md:gap-12 gap-56 md:w-full w-[80vw]  md:px-20 px-10 md:mb-20 mb-2 md:mt-10 mx-auto">
      <div className="md:w-full w-[60vw] md:h-full h-[4vh] mx-auto  ">
        <Image src={aboutImg} alt="aboutImg" />
      </div>
      <div className=" flex flex-col md:w-[70vw] w-[70vw] md:gap-10 gap-4 md:text-start text-center md:-mt-4 md:mb-0 mb-20">
        <h2 className="md:text-6xl text-2xl font-bold mx-auto">
          ABOUT <span className="text-primary">US</span>
        </h2>
        <p className="md:text-xl text-[10px]">
          Going to use a passage of Lorem Ipsum, you need to be sure there is
          not anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined going to
          use a passage of Lorem Ipsum, you need to be sure there is not
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the Internet tend to repeat predefined
        </p>
        <div className="">
          <Button className="bg-primary text-slate-100 font-normal rounded">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
