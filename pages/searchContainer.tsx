import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

interface Car {
  car: {
    img: string;
    model: string;
    price: string;
    brand: string;
    type: string;
  };
  _id: number;
}

function SearchContainer() {
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [carList, setCarList] = useState<Car[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get<Car[]>("http://localhost:3001/cars/car");
      const filteredCars = response.data.filter((car: Car) => {
        return (
          brand === "AnyBrands" ||
          car.car.brand === brand ||
          type === "AnyType" ||
          car.car.type === type ||
          price === "AnyPrice" ||
          car.car.price === price
        );
      });
      setCarList(filteredCars);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#363636] py-10 w-full h-full">
      <div className="text-slate-100 flex flex-col gap-4 md:text-start text-center">
        <h3 className="md:text-5xl text-2xl">Search Your Best Cars</h3>
        <p className="md:text-xl text-xs">
          Using Content here, content here, making it look like readable
        </p>
      </div>

      <div className="md:flex flex-col justify-center items-center md:text-start text-center gap-6 mt-10">
        <form action="" className="md:flex grid grid-cols-1 gap-6">
          <select
            className="flex gap-4 w-72 rounded md:text-xl text-[12px] px-4 py-3"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="AnyBrands">Any Brands</option>
            <option value="GL classe">GL classe</option>
            <option value="S classe">S classe</option>
            <option value="ML classe">ML classe</option>
          </select>

          <select
            className="flex gap-4 w-72 rounded md:text-xl text-[12px] px-4 py-3"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="AnyType">Any Type</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Crossover">Crossover</option>
          </select>

          <select
            className="flex gap-4 w-72 rounded md:text-xl text-[12px] px-4 py-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="Price">Price</option>
            <option value="Start per day €200">Start per day €200</option>
            <option value="Start per day €250">Start per day €250</option>
            <option value="Start per day €300">Start per day €300</option>
            <option value="Start per day €350">Start per day €350</option>
            <option value="Start per day €400">Start per day €400</option>
            <option value="Start per day €450">Start per day €450</option>
          </select>
        </form>
        <button
          className="bg-primary text-slate-100 border-0 rounded md:mt-0 mt-10 md:w-[15vw] w-[30vw] py-3"
          onClick={handleSearch}
        >
          SEARCH NOW
        </button>
      </div>
      <div className="mt-20 w-[90vw]">
        <ul className="flex gap-6 flex-wrap">
          {carList.map((car) => {
            return (
              <li
                className="border flex flex-col items-center justify-center bg-slate-100 py-6 md:gap-4 gap-2 rounded hover:scale-105 transition-all catalog"
                key={car._id}
              >
                <div className="md:w-[350px] w-[200px] ml-14">
                  <Image
                    src={car.car.img}
                    alt="car-image"
                    width={300}
                    height={300}
                  />
                </div>
                <h5 className="md:text-3xl text-xl font-bold">
                  {car.car.model}
                </h5>
                <p className="md:text-xl text-[10px] text-primary font-bold ">
                  {car.car.price}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchContainer;
