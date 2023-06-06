import React from "react";
import Header from "./components/Header";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import bannerBg from "../resource/images/bannerBg.png";
import Image from "next/image";
import Carousel from "./components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="relative">
        <ul className="flex justify-around text-slate-100 py-4 bg-primary z-10 ">
          <li className="flex items-center gap-2">
            <ImLocation2 />
            Location
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneAlt />
            (+49)12345678
          </li>
          <li className="flex items-center gap-2">
            <MdEmail />
            demo@gmail.com
          </li>
        </ul>
        <div className="z-0 absolute">
          <Image src={bannerBg} alt="bannerBg" className="" />
        </div>
        <div className="relative top-48 right-96">
          <Carousel />
        </div>
      </main>
    </div>
  );
}

export default Home;
