import express from "express";
import mongoose from "mongoose";
import { Car, CatalogItems, Customers } from "./seed.ts";
import cors from "cors";

mongoose.connect("mongodb://localhost:27017/cars");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/cars/car", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (error) {
    res.status(500).json({ message: "You have an error" });
  }
});
app.post("/cars/car", async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(200).json(newCar);
  } catch (error) {
    console.log(error);
  }
});

app.get("/customers", async (req, res) => {
  try {
    const customers = await Customers.find();
    res.send(customers);
  } catch (error) {
    res.status(500).json({ message: "You have an error" });
  }
});
app.post("/customers", async (req, res) => {
  try {
    const newCar = await Customers.create(req.body);
    res.status(200).json(newCar);
  } catch (error) {
    console.log(error);
  }
});

app.get("/catalogitems", async (req, res) => {
  try {
    const catalogItem = await CatalogItems.find();
    res.send(catalogItem);
  } catch (error) {
    res.status(500).json({ message: "You have an error" });
  }
});
app.post("/catalogitems", async (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
