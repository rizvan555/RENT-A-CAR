import { Inter } from "next/font/google";
import Catalog from "./catalog";
import InfoBar from "./infoBar";
import Customers from "./customers";
import Home from "./homePage";
import About from "./about";
import SearchContainer from "./searchContainer";
import Contact from "./contact";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export default function HomePage() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.replace("/sign-up");
    }
  }, [user, router]);

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
