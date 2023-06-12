import React from "react";
import Header from "./components/layout/Header";
import bannerBg from "../resource/images/bannerBg.png";
import Image from "next/image";
import Carousel from "./components/resource/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  return (
    <div className="relative ">
      <main className="">
        <div className="">
          <Image
            src={bannerBg}
            alt="bannerBg"
            className="lg:visible md:visible invisible "
          />
        </div>
        <div className="relative md:bottom-[70vh] bottom-56 md:right-[26vw] right-0 ">
          <Carousel />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
