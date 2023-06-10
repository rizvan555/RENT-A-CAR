import Image from "next/image";
import React from "react";
import logo from "../../../resource/images/logo.png";
import Button from "../resource/Button";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-[#363636] p-10 flex flex-col items-center justify-center gap-4 text-slate-100">
      <div className="text-center mb-10">
        <Image src={logo} alt="logo" />
      </div>
      <div className="md:flex grid grid-cols-1 md:gap-9 gap-16 px-6">
        <div className="flex flex-col gap-3 leading-8">
          <h3 className="text-2xl font-bold mb-1">Subscribe Now</h3>
          <p>There are many variations of passages of Lorem Ipsum available</p>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-transparent border-b-2"
          />
          <Button className="bg-primary border-0 rounded py-2 px-2 text-base md:w-[14vw] w-[30vw] tracking-wider">
            SUBSCRIBE
          </Button>
        </div>
        <div className="flex flex-col gap-3 mb-6 leading-8">
          <h3 className="text-2xl font-bold">Information</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-6 leading-8">
          <h3 className="text-2xl font-bold">Helpful Links</h3>
          <p>
            Helpful LinksThere are many variations of passages of Lorem Ipsum
            available, but the majority
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-6 leading-8">
          <h3 className="text-2xl font-bold">Invesments</h3>
          <p>
            Helpful LinksThere are many variations of passages of Lorem Ipsum
            available, but the majority
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <ul className="flex flex-col justify-around text-slate-100 gap-2 mb-6 ">
            <li className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-all">
              <ImLocation2 />
              Location
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
      </div>
    </div>
  );
}

export default Footer;
