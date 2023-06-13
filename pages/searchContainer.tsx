import React, { useState } from "react";
import Button from "./components/resource/Button";
import axios from "axios";
import { type } from "os";

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
      console.log("Brand:", brand);
      console.log("Type:", type);
      console.log("Price:", price);
      const response = await axios.get<Car[]>("http://localhost:3001/cars/car");
      const filteredCars = response.data.filter((car: Car) => {
        return (
          (brand === "AnyBrands" || car.car.brand === brand) &&
          (type === "AnyType" || car.car.type === type) &&
          (price === "AnyPrice" || car.car.price === price)
        );
      });
      console.log(filteredCars);

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
            <option value="$200">$200</option>
            <option value="$250">$250</option>
            <option value="$300">$300</option>
            <option value="$350">$350</option>
            <option value="$400">$400</option>
            <option value="$450">$450</option>
          </select>
        </form>
        <button
          className="bg-primary text-slate-100 border-0 rounded md:mt-0 mt-10 md:w-[15vw] w-[30vw] py-3"
          onClick={handleSearch}
        >
          SEARCH NOW
        </button>
      </div>
      <div className="mt-20">
        <ul className="">
          {carList.map((car) => {
            return (
              <li key={car._id} className="border text-white">
                {car.car.model}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchContainer;
