import React from "react";
import Header from "./components/layout/Header";
import bannerBg from "../resource/images/bannerBg.png";
import Image from "next/image";
import Carousel from "./components/resource/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="relative">
      <main className="">
        <div className="">
          <Image src={bannerBg} alt="bannerBg" className=" md:visible hidden" />
        </div>
        <div className="relative md:bottom-[70vh] bottom-0 md:right-[26vw] right-0md:top-0 top-20">
          <Carousel />
        </div>
      </main>
    </div>
  );
}

export default Home;
