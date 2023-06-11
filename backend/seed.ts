import mongoose from "mongoose";
import { Schema } from "mongoose";

const carSchema = new Schema(
  {
    car: {
      id: Number,
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
      id: 1,
      img: "./resource/images/img1.png",
      model: "Mercedes",
      price: "Start per day $4500",
    },
  },
  {
    car: {
      id: 2,
      img: "./resource/images/img2.png",
      model: "Mercedes",
      price: "Start per day $5500",
    },
  },
  {
    car: {
      id: 3,
      img: "./resource/images/img3.png",
      model: "Mercedes",
      price: "Start per day $6500",
    },
  },
  {
    car: {
      id: 4,
      img: "./resource/images/img3.png",
      model: "Mercedes",
      price: "Start per day $7500",
    },
  },
  {
    car: {
      id: 5,
      img: "./resource/images/img2.png",
      model: "Mercedes",
      price: "Start per day $8500",
    },
  },
  {
    car: {
      id: 6,
      img: "./resource/images/img1.png",
      model: "Mercedes",
      price: "Start per day $9500",
    },
  },
];

export const Cars = mongoose.model("Cars", carSchema);

{
  carsData.map((carData) => {
    return Cars.create(carData);
  });
}
