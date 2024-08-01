import React from "react";

export default function ButtonMain({ text }) {
  return (
    <button
      className="duration-500 px-4 py-4 lg:py-2 text-xl font-semibold text-slate-100 
 rounded-full bg-indigo-700 hover:bg-indigo-900"
    >
      {text}
    </button>
  );
}
