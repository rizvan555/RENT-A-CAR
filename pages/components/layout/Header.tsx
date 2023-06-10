import React from "react";
import Link from "next/link";
import Navbar from "../resource/Navbar";
import logo from "../../../resource/images/logo.png";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

function Header() {
  return (
    <div>
      <div className="md:flex flex flex-col items-center md:justify-between justify-center py-4 md:px-16 bg-dark text-slate-100">
        <Link href="/" className="text-3xl fond-bold md:mb-0 mb-8">
          <Image src={logo} alt="Logo" />
        </Link>
        <Navbar />
      </div>
      <ul className="flex justify-around text-slate-100 py-4 bg-primary ">
        <li className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-all ">
          <Link
            href="/location"
            className="flex items-center gap-2 md:text-xl text-xs"
          >
            <ImLocation2 />
            Location
          </Link>
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-all">
          <Link
            href="/location"
            className="flex items-center gap-2 md:text-xl text-xs"
          >
            <FaPhoneAlt />
            (+49)12345678
          </Link>
        </li>

        <li className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-all">
          <Link
            href="/location"
            className="flex items-center gap-2 md:text-xl text-xs"
          >
            <MdEmail />
            demo@gmail.com
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
