import React from "react";
import { classicNameResolver } from "typescript";

function Button({ children, className }: any) {
  return (
    <button
      className={`${className} font-bold border md:py-4 py-2 md:px-10 px-2 md:text-2xl text-[10px] active:scale-95 transition-all`}
    >
      {children}
    </button>
  );
}

export default Button;
