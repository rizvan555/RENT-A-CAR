import mongoose from "mongoose";
import { Schema } from "mongoose";

const carSchema = new Schema(
  {
    car: {
      _id: Number,
      img: String,
      model: String,
      price: String,
    },
  },
  { versionKey: false }
);
const carsData = [
  {
    car: {
      img: "/images/img1.png",
      model: "Mercedes",
      price: "Start per day $4500",
    },
  },
  {
    car: {
      img: "/images/img2.png",
      model: "Mercedes",
      price: "Start per day $5500",
    },
  },
  {
    car: {
      img: "/images/img3.png",
      model: "Mercedes",
      price: "Start per day $6500",
    },
  },
  {
    car: {
      img: "/images/img3.png",
      model: "Mercedes",
      price: "Start per day $7500",
    },
  },
  {
    car: {
      img: "/images/img2.png",
      model: "Mercedes",
      price: "Start per day $8500",
    },
  },
  {
    car: {
      img: "/images/img1.png",
      model: "Mercedes",
      price: "Start per day $9500",
    },
  },
];

export const Cars = mongoose.model("Cars", carSchema);

carsData.map((carData) => {
  return Cars.create(carData);
});
