import React from "react";
import Header from "./components/resource/Header";
import bannerBg from "../resource/images/bannerBg.png";
import Image from "next/image";
import Carousel from "./components/resource/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="">
        <div className="">
          <Image src={bannerBg} alt="bannerBg" className="" />
        </div>
        <div className="relative bottom-[70vh] right-[26vw]">
          <Carousel />
        </div>
      </main>
    </div>
  );
}

export default Home;
