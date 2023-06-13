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

const customerSchema = new Schema({
  customer: new Schema({
    name: String,
    email: String,
    text: String,
  }),
});

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

const customersData = [
  {
    customer: {
      name: "Hannery",
      email: "Hanneri@gmail.com",
      img: "/images/clientImg1.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  },
  {
    customer: {
      name: "Channery",
      email: "Channeri@gmail.com",
      img: "/images/clientImg2.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  },
  {
    customer: {
      name: "Cheng",
      email: "Cheng@gmail.com",
      img: "/images/clientImg2.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  },
  {
    customer: {
      name: "Jang",
      email: "Jang@gmail.com",
      img: "/images/clientImg1.png",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  },
];

export const Cars = mongoose.model("Cars", carSchema);
export const Customers = mongoose.model("Customers", customerSchema);

carsData.map((carData) => {
  return Cars.create(carData);
});
customersData.map((customerData) => {
  return Customers.create(customerData);
});
