import { Inter } from "next/font/google";
import Catalog from "./components/catalog";
import InfoBar from "./infoBar";
import Home from "./Home";
import About from "./About";
import SearchContainer from "./SearchContainer";
import Customers from "./customers";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <SearchContainer />
      <Catalog />
      <InfoBar />
      <Customers />
    </div>
  );
}
