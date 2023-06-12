import React from "react";

function Location() {
  return (
    <div className="p-20">
      <iframe
        src="https://goo.gl/maps/dgjKtNgid1Jrxs3Z7"
        referrerPolicy="no-referrer-when-downgrade"
        loading="lazy"
        className="md:w-[90vw] w-[80vw] md:h-[500px] h-[40vh]"
      ></iframe>
    </div>
  );
}

export default Location;
