import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import logo from "../../resource/images/logo.png";
import Image from "next/image";

function Header() {
  return (
    <div className="flex items-center justify-between py-4 px-16 bg-dark text-slate-100">
      <Link href="/" className="text-3xl fond-bold">
        <Image src={logo} alt="Logo" />
      </Link>
      <Navbar />
    </div>
  );
}

export default Header;
