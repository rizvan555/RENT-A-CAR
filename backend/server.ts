import express from "express";
import mongoose from "mongoose";
import { Cars } from "./seed";

mongoose.connect("mongodb://localhost:27017/cars");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/cars/car", async (req, res) => {
  try {
    const cars = await Cars.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "You have an error" });
  }
});

app.post("/cars/car", async (req, res) => {
  const newCar = req.body;
  res.status(200).json(newCar);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
