import React from "react";

export default function ButtonMain({ text }) {
  return (
    <button
      className="duration-500 px-4 py-4 lg:py-2 text-xl font-semibold text-white 
 rounded-full bg-orange-500 hover:bg-indigo-300 border-2 border-white"
    >
      {text}
    </button>
  );
}
