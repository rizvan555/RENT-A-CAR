import React from "react";
import { classicNameResolver } from "typescript";

function Button({ children, className }: any) {
  return (
    <button
      className={`${className} font-bold border py-4 px-10 text-2xl active:scale-95 transition-all`}
    >
      {children}
    </button>
  );
}

export default Button;
