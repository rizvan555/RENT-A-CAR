import React from "react";
import Button from "./components/resource/Button";
import img1 from "../resource/images/img1.png";
import img2 from "../resource/images/img2.png";
import img3 from "../resource/images/img3.png";
import Image from "next/image";

function Catalog() {
  const carCatalog = [
    {
      id: 1,
      image: img1,
      name: "Mercedes-Benz",
      price: "Start per day $4500",
    },
    {
      id: 2,
      image: img2,
      name: "Mercedes-Benz",
      price: "Start per day $5500",
    },
    {
      id: 3,
      image: img3,
      name: "Mercedes-Benz",
      price: "Start per day $6500",
    },
    {
      id: 4,
      image: img3,
      name: "Mercedes-Benz",
      price: "Start per day $7500",
    },
    {
      id: 5,
      image: img2,
      name: "Mercedes-Benz",
      price: "Start per day $8500",
    },
    {
      id: 6,
      image: img1,
      name: "Mercedes-Benz",
      price: "Start per day $9500",
    },
  ];
  return (
    <div className="md:p-6 p-10">
      <h1 className="text-center md:text-5xl text-2xl font-bold my-10">
        OUR BEST OFFERS
      </h1>
      <ul className="md:grid grid-cols-3 grid grid-cols-1 gap-6">
        {carCatalog.map((car) => {
          return (
            <li
              className="border flex flex-col items-center justify-center py-5 md:gap-4 gap-2 rounded hover:scale-105 transition-all catalog"
              key={car.id}
            >
              <div className="md:w-[400px] w-[200px]">
                <Image
                  src={car.image}
                  alt="car-image"
                  width={400}
                  height={400}
                />
              </div>
              <h5 className="md:text-3xl text-xl font-bold">{car.name} </h5>
              <p className="md:text-xl text-[10px] text-primary font-bold ">
                {car.price}
              </p>
              <div className="bg-primary text-slate-100 mt-5">
                <Button>Book Now</Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Catalog;
