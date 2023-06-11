import Image from "next/image";
import React, { useState } from "react";
import clientImg1 from "../resource/images/clientImg1.png";
import clientImg2 from "../resource/images/clientImg2.png";
import Slider from "react-slick";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

function Customers() {
  const [slide, setSlide] = useState(true);
  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  const customers = [
    {
      id: 1,
      photo: clientImg1,
      name: "Hannery",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      id: 2,
      photo: clientImg2,
      name: "Channery",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  ];
  const customers1 = [
    {
      id: 1,
      photo: clientImg2,
      name: "Cheng",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
    {
      id: 2,
      photo: clientImg1,
      name: "Jang",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  ];

  return (
    <div className="relative p-10">
      <h1 className="md:text-5xl text-2xl font-bold text-center py-10">
        WHAT SAYS CUSTOMERS
      </h1>
      <Slider {...settings}>
        {slide ? (
          <div className="">
            <div className="md:flex xs:flex-col justify-center items-center gap-10 md:px-10 pl-10 py-24 ">
              {customers.map((customer) => {
                return (
                  <div
                    className="customer relative flex flex-col justify-center items-center border px-4 md:pt-2 md:pb-6 py-8 md:w-[25vw] w-[70vw] text-center md:gap-4 gap-8 md:mb-0 mb-20 hover:scale-105 transition-all"
                    key={customer.id}
                  >
                    <div className="md:w-[170px] w-[80px] md:h-[170px] h-[80px]">
                      <Image
                        src={customer.photo}
                        alt="customer-photo"
                        className="absolute md:-top-12 -top-10 right-24"
                      />
                    </div>
                    <h3 className="md:text-2xl text-xl font-bold md:-mt-6 -mt-2">
                      {customer.name}
                    </h3>
                    <p className="md:text-xl text-[12px] font-light">
                      {customer.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="">
            <div className="md:flex xs:flex-col justify-center items-center gap-10 md:px-10 pl-10 py-24">
              {customers1.map((customer) => {
                return (
                  <div
                    className="customer relative flex flex-col justify-center items-center border px-4 md:pt-2 md:pb-6 py-8 md:w-[25vw] w-[70vw] text-center md:gap-4 gap-8 md:mb-0 mb-20 hover:scale-105 transition-all"
                    key={customer.id}
                  >
                    <div className="md:w-[170px] w-[80px] md:h-[170px] h-[80px]">
                      <Image
                        src={customer.photo}
                        alt="customer-photo"
                        className="absolute md:-top-12 -top-10 right-24"
                      />
                    </div>
                    <h3 className="md:text-2xl text-xl font-bold md:-mt-6 -mt-2">
                      {customer.name}
                    </h3>
                    <p className="md:text-xl text-[12px] font-light">
                      {customer.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Slider>
      <button
        className="md:visible invisible absolute left-44 bottom-72 cursor-pointer active:scale-90 transition-all"
        onClick={() => setSlide(!slide)}
      >
        <BsArrowLeftSquare size={50} />
      </button>
      <button
        className="md:visible invisible absolute right-48 bottom-72 cursor-pointer active:scale-90 transition-all"
        onClick={() => setSlide(!slide)}
      >
        <BsArrowRightSquare size={50} />
      </button>
    </div>
  );
}

export default Customers;
