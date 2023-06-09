import React from "react";

function Location() {
  return (
    <div className="p-20 ">
      <iframe
        src="https://goo.gl/maps/dgjKtNgid1Jrxs3Z7"
        referrerPolicy="no-referrer-when-downgrade"
        loading="lazy"
        className="md:w-[70vw] w-[370px] md:h-[450px] h-[200px]"
      ></iframe>
    </div>
  );
}

export default Location;
