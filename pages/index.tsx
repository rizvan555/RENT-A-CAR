import { Inter } from "next/font/google";
import Catalog from "./catalog";
import InfoBar from "./infoBar";

import Customers from "./customers";
import Home from "./home";
import About from "./about";
import SearchContainer from "./searchContainer";
import Contact from "./contact";
import Footer from "./components/layout/footer";

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
