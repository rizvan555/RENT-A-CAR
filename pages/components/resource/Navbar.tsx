import React, { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

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
    <nav className="flex ">
      <ul className="flex items-center md:gap-12 gap-10">
        {navMenu.map((nav) => {
          return (
            <li key={nav.id}>
              <Link href={nav.path} passHref legacyBehavior>
                <a className="md:text-lg text-[12px] text-slate-100 font-bold focus:scale-90 focus:text-slate-400 focus:font-normal transition-all">
                  {nav.name}
                </a>
              </Link>
            </li>
          );
        })}
        <div className="flex gap-2 rounded items-center border py-2 px-3 bg-zinc-900  active:scale-95 transition-all cursor-pointer">
          <UserButton afterSignOutUrl="/" />
          <h4 className="text-[14px]">Sign Out</h4>
        </div>
      </ul>
    </nav>
  );
}
export default Navbar;
