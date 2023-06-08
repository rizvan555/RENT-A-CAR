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
      <h1 className="text-5xl font-bold text-center py-10">
        WHAT SAYS CUSTOMERS
      </h1>
      <Slider {...settings}>
        {slide ? (
          <div className="">
            <div className="flex justify-center items-center gap-10 px-10 py-24">
              {customers.map((customer) => {
                return (
                  <div
                    className="customer relative flex flex-col justify-center items-center border px-4 py-8 w-[25vw] text-center gap-8 hover:scale-105 transition-all"
                    key={customer.id}
                  >
                    <Image
                      src={customer.photo}
                      alt="customer-photo"
                      width={170}
                      height={170}
                      className="absolute -top-12"
                    />
                    <h3 className="text-2xl font-bold mt-28">
                      {customer.name}
                    </h3>
                    <p className="text-xl font-light">HALLO{customer.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="">
            <div className="flex justify-center items-center gap-10 px-10 py-24">
              {customers1.map((customer) => {
                return (
                  <div
                    className="customer relative flex flex-col justify-center items-center border px-4 py-8 w-[25vw] text-center gap-8 hover:scale-105 transition-all"
                    key={customer.id}
                  >
                    <Image
                      src={customer.photo}
                      alt="customer-photo"
                      width={170}
                      height={170}
                      className="absolute -top-12"
                    />
                    <h3 className="text-2xl font-bold mt-28">
                      {customer.name}
                    </h3>
                    <p className="text-xl font-light">{customer.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Slider>
      <button
        className="absolute left-44 bottom-72 cursor-pointer focus:scale-75 transition-all"
        onClick={() => setSlide(!slide)}
      >
        <BsArrowLeftSquare size={50} />
      </button>
      <button
        className="absolute right-48 bottom-72 cursor-pointer focus:scale-75 transition-all"
        onClick={() => setSlide(!slide)}
      >
        <BsArrowRightSquare size={50} />
      </button>
    </div>
  );
}

export default Customers;
