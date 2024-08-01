import React from "react";

export default function ButtonSecondary({ text }) {
  return (
    <button
      className="duration-500 min-w-100 px-4 py-4 lg:py-2 text-xl font-semibold text-slate-100 
 rounded-full bg-orange-500 hover:bg-orange-400"  
    >
      {text}
    </button>
  );
}
