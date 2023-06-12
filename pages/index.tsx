import { Inter } from "next/font/google";
import Catalog from "./catalog";
import InfoBar from "./infoBar";
import Customers from "./customers";
import Home from "./homePage";
import About from "./about";
import SearchContainer from "./searchContainer";
import Contact from "./contact";

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
      <Contact />
    </div>
  );
}
