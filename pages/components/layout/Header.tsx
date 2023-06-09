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
      <div className="flex items-center justify-between py-4 px-16 bg-dark text-slate-100">
        <Link href="/" className="text-3xl fond-bold">
          <Image src={logo} alt="Logo" />
        </Link>
        <Navbar />
      </div>
      <ul className="flex justify-around text-slate-100 py-4 bg-primary ">
        <li className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-all">
          <Link href="/location">
            <ImLocation2 />
            Location
          </Link>
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-all">
          <FaPhoneAlt />
          (+49)12345678
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-all">
          <MdEmail />
          demo@gmail.com
        </li>
      </ul>
    </div>
  );
}

export default Header;
