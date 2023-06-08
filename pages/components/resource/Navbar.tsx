import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [navMenu, setNavMenu] = useState([
    "Home",
    "About",
    "Services",
    "Vehicles",
    "Client",
    "Contact",
  ]);
  return (
    <nav className="">
      <ul className="flex gap-12">
        {navMenu.map((nav, index) => {
          return (
            <Link
              href=""
              key={index}
              className="text-lg text-slate-100 focus:scale-90 focus:text-slate-300 transition-all"
            >
              {nav}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
export default Navbar;
