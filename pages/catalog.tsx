import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./components/resource/Button";
import Image from "next/image";
// import img1 from "../resource/images/img1.png";
// import img2 from "../resource/images/img2.png";
// import img3 from "../resource/images/img3.png";

interface Car {
  car: {
    img: string;
    model: string;
    price: string;
  };
  _id: number;
}

function Catalog() {
  const [carCatalog, setCarCatalog] = useState<Car[]>([]);

  useEffect(() => {
    const getCarCatalog = async () => {
      try {
        const response = await axios.get("http://localhost:3001/cars/car");
        console.log(response.data);
        setCarCatalog(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCarCatalog();
  }, []);

  return (
    <div className="md:p-6 p-10">
      <h1 className="text-center md:text-5xl text-2xl font-bold my-10">
        OUR BEST OFFERS
      </h1>
      <ul className="md:grid grid-cols-3 flex flex-col gap-6">
        {carCatalog.map((catalog) => {
          return (
            <li
              className="border flex flex-col items-center justify-center py-5 md:gap-4 gap-2 rounded hover:scale-105 transition-all catalog"
              key={catalog._id}
            >
              <div className="md:w-[400px] w-[200px]">
                <Image
                  src={catalog.car.img}
                  alt="car-image"
                  width={400}
                  height={400}
                />
              </div>
              <h5 className="md:text-3xl text-xl font-bold">
                {catalog.car.model}
              </h5>
              <p className="md:text-xl text-[10px] text-primary font-bold ">
                {catalog.car.price}
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
