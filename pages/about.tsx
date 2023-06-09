import React from "react";
import Button from "./components/resource/Button";
import aboutImg from "../resource/images/aboutImg.png";
import Image from "next/image";

function About() {
  return (
    <div className="flex gap-12 w-full h-[100vh] px-20 my-10">
      <div className="w-full h-full">
        <Image src={aboutImg} alt="aboutImg" />
      </div>
      <div className=" flex flex-col w-[70vw] gap-10">
        <h2 className="text-6xl font-bold">
          ABOUT <span className="text-primary">US</span>
        </h2>
        <p className="text-xl">
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
