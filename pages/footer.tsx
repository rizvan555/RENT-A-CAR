import Image from "next/image";
import React from "react";
import logo from "../resource/images/logo.png";
import Button from "./components/resource/Button";

function Footer() {
  return (
    <div className="bg-[#363636] p-10 flex flex-col items-center justify-center gap-4 text-slate-100">
      <div className="text-center mb-10">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex gap-8 px-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold mb-6">Subscribe Now</h3>
          <p>There are many variations of passages of Lorem Ipsum available</p>
          <input type="email" placeholder="Enter Your Email" />
          <Button className="bg-primary border-0">SUBSCRIBE</Button>
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <h3 className="text-2xl font-bold">Information</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <h3 className="text-2xl font-bold">Helpful Links</h3>
          <p>
            Helpful LinksThere are many variations of passages of Lorem Ipsum
            available, but the majority
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <h3 className="text-2xl font-bold">Invesments</h3>
          <p>
            Helpful LinksThere are many variations of passages of Lorem Ipsum
            available, but the majority
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p>
            Helpful LinksThere are many variations of passages of Lorem Ipsum
            available, but the majority
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
