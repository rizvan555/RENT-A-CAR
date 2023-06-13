import mongoose from "mongoose";
import { Schema } from "mongoose";

const carSchema = new Schema(
  {
    car: new Schema({
      _id: Number,
      img: String,
      model: String,
      price: String,
      brand: String,
      type: String,
    }),
  },
  { versionKey: false }
);
const carsData = [
  {
    car: {
      img: "/images/img1.png",
      model: "Mercedes-GL",
      price: "Start per day €200",
      brand: "GL classe",
      type: "SUV",
    },
  },
  {
    car: {
      img: "/images/img2.png",
      model: "Mercedes-S",
      price: "Start per day €250",
      brand: "S classe",
      type: "Sedan",
    },
  },
  {
    car: {
      img: "/images/img3.png",
      model: "Mercedes-ML",
      price: "Start per day €300",
      brand: "ML classe",
      type: "Crossover",
    },
  },
  {
    car: {
      img: "/images/img3.png",
      model: "Mercedes-ML",
      price: "Start per day €350",
      brand: "ML classe",
      type: "Crossover",
    },
  },
  {
    car: {
      img: "/images/img2.png",
      model: "Mercedes-S",
      price: "Start per day €400",
      brand: "S classe",
      type: "Sedan",
    },
  },
  {
    car: {
      img: "/images/img1.png",
      model: "Mercedes-GL",
      price: "Start per day €450",
      brand: "GL classe",
      type: "SUV",
    },
  },
];

export const Cars = mongoose.model("Cars", carSchema);

carsData.map((carData) => {
  return Cars.create(carData);
});
