import React from "react";
import Button from "./components/resource/Button";
import aboutImg from "../resource/images/aboutImg.png";
import Image from "next/image";

function About() {
  return (
    <div className="md:flex flex flex-col items-center justify-center gap-12 w-full h-[100vh] md:px-20 px-10 md:my-10 my-32 ">
      <div className="md:w-full w-[50vw] md:h-full">
        <Image src={aboutImg} alt="aboutImg" />
      </div>
      <div className=" flex flex-col w-[70vw] gap-10 md:text-start text-center">
        <h2 className="md:text-6xl text-2xl font-bold">
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
