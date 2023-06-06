import React from "react";
import Button from "./Button";
import Slider from "react-slick";

interface PropSetteings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
}
function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  } as PropSetteings;

  return (
    <Slider {...settings}>
      <div className="flex flex-col items-start text-white z-30 gap-y-20 w-[50vw]">
        <h1 className="flex flex-col text-center font-bold">
          <span className="text-dark text-7xl ">CAR RENT</span>
          <span className="text-red-500 text-7xl">FOR YOU</span>
        </h1>
        <p className="text-xl w-[35vw] mx-auto mt-6 text-slate-600">
          There are many variations of passages of Lorem Ipsum available, but
          the majority
        </p>
        <div className="flex justify-center gap-10 mt-12 text-slate-100">
          <Button className="bg-primary">Read More</Button>
          <Button className="bg-dark">Contact Us</Button>
        </div>
      </div>

      <div className=" relative text-white z-30  flex flex-col items-start gap-y-20 w-[50vw]">
        <h1 className="flex flex-col text-center font-bold">
          <span className="text-dark text-7xl ">CAR RENT</span>
          <span className="text-red-500 text-7xl">FOR YOU</span>
        </h1>
        <p className="text-xl w-[35vw] mx-auto mt-6 text-slate-600">
          There are many variations of passages of Lorem Ipsum available, but
          the majority
        </p>
        <div className="flex justify-center gap-10 mt-12 text-slate-100">
          <Button className="bg-primary">Read More</Button>
          <Button className="bg-dark">Contact Us</Button>
        </div>
      </div>
    </Slider>
  );
}

export default Carousel;
