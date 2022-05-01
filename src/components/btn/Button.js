import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-orange font-bold text-white py-4 px-5 rounded-[11px] text-base">
      {children}
    </button>
  );
}
