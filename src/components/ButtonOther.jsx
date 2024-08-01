import React from "react";

export default function ButtonOther({ text }) {
  return (
    <button
      className="duration-500 min-w-100 px-4 py-4 lg:py-2 text-xl font-semibold text-white 
 rounded-full border-4 border-indigo-900 hover:bg-indigo-300"  
    >
      {text}
    </button>
  );
}
