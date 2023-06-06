import { Inter } from "next/font/google";
import Home from "./home";
import About from "./about";
import SearchContainer from "./searchContainer";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <SearchContainer />
    </div>
  );
}
