import React from "react";
import icon1 from "../resource/images/icon1.png";
import icon2 from "../resource/images/icon2.png";
import icon3 from "../resource/images/icon3.png";
import Image from "next/image";

function InfoBar() {
  const infos = [
    {
      logo: icon1,
      title: "SAFETY & SECURITY",
      text: "variations of passages of Lorem Ipsum available, but the majority have",
    },
    {
      logo: icon2,
      title: "Online Booking",
      text: "variations of passages of Lorem Ipsum available, but the majority have",
    },
    {
      logo: icon3,
      title: "Best Drivers",
      text: "variations of passages of Lorem Ipsum available, but the majority have",
    },
  ];
  return (
    <div className="felx flex-col bg-[#363636] text-slate-100 py-10 md:px-28 px-10 ">
      <h1 className="md:text-5xl text-2xl md:text-start text-center mb-20 font-bold">
        WHY CHOOSE US
      </h1>
      <ul className="md:flex grid grid-cols-1 justify-center items-center gap-12">
        {infos.map((info, index) => {
          return (
            <li
              className="flex flex-col gap-4 md:w-[25vw] w-[70vw]"
              key={index}
            >
              <Image src={info.logo} alt="logos" width={50} height={50} />
              <h3 className="md:text-2xl text-xl font-bold">{info.title}</h3>
              <p className="md:text-xs text-[14px]">{info.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InfoBar;
