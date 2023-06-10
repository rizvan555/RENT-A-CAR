import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [navMenu, setNavMenu] = useState([
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/searchContainer" },
    { id: 4, name: "Vehicles", path: "/catalog" },
    { id: 5, name: "Client", path: "/customers" },
    { id: 6, name: "Contact", path: "/contact" },
  ]);
  return (
    <nav className="">
      <ul className="flex gap-12">
        {navMenu.map((nav) => {
          return (
            <li key={nav.id}>
              <Link href={nav.path} passHref legacyBehavior>
                <a className="md:text-lg text-[10px] text-slate-100 font-bold focus:scale-90 focus:text-slate-400 focus:font-normal transition-all">
                  {nav.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Navbar;
