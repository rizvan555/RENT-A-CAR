import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Home from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return <Home />;
}
