import React from "react";

export default function ButtonMain({ text }) {
  return (
    <button
      className="duration-500 px-4 py-4 lg:py-2 text-base font-semibold text-slate-100 
 rounded-full bg-indigo-600 hover:bg-indigo-400"
    >
      {text}
    </button>
  );
}
