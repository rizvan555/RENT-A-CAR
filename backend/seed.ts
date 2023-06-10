import mongoose from "mongoose";
import { Schema } from "mongoose";
import img1 from "../resource/images/img1.png";
import img2 from "../resource/images/img2.png";
import img3 from "../resource/images/img3.png";

const carSchema = new Schema({
  car: {
    img: String,
    model: String,
    price: Number,
  },
});

mongoose.connect("mongodb://localhost:27017/cars");
export const Cars = mongoose.model("Cars", carSchema);

Cars.create({
  car1: {
    img: { img1 },
    model: "Mercedes",
    price: "Start per day $4500",
  },
  car2: {
    img: { img2 },
    model: "Mercedes",
    price: "Start per day $5500",
  },
  car3: {
    img: { img3 },
    model: "Mercedes",
    price: "Start per day $6500",
  },
  car4: {
    img: { img3 },
    model: "Mercedes",
    price: "Start per day $7500",
  },
  car5: {
    img: { img2 },
    model: "Mercedes",
    price: "Start per day $8500",
  },
  car6: {
    img: { img1 },
    model: "Mercedes",
    price: "Start per day $9500",
  },
});
