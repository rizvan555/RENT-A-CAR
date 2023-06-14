import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import axios from "axios";

interface Customers {
  customer: {
    img: string;
    name: string;
    email: string;
    text: string;
  };
}
function Customers() {
  const [slide, setSlide] = useState(true);
  const [myCustomers, setMyCustomers] = useState<Customers[]>([]);

  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.get<Customers[]>(
          "http://localhost:3001/customers"
        );
        setMyCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleSearch();
  }, []);

  return (
    <div className="relative p-10">
      <h1 className="md:text-5xl text-2xl font-bold text-center py-10">
        WHAT SAYS CUSTOMERS
      </h1>
      <Slider {...settings}>
        <div className="">
          <div className="md:flex xs:flex-col justify-center items-center gap-10 md:px-10 pl-10 py-24 ">
            {myCustomers.map((myCustomer, index) => {
              return (
                <div
                  className="customer relative flex flex-col justify-center items-center border px-4 md:pt-2 md:pb-6 py-8 md:w-[25vw] w-[70vw] text-center md:gap-4 gap-8 md:mb-0 mb-20 hover:scale-105 transition-all"
                  key={index}
                >
                  <div className="md:w-[170px] w-[80px] md:h-[170px] h-[80px]">
                    <Image
                      src={myCustomer.customer.img}
                      alt="customer-photo"
                      className="absolute md:-top-12 -top-10 right-24"
                      width={170}
                      height={170}
                    />
                  </div>
                  <h3 className="md:text-2xl text-xl font-bold md:-mt-6 -mt-2">
                    {myCustomer.customer.name}
                  </h3>
                  <p className="md:text-xl text-[12px] font-light">
                    {myCustomer.customer.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
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
