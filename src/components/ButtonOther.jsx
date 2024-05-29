import React from "react";

export default function ButtonOther({ text }) {
  return (
    <button
      className="duration-500 min-w-100 px-4 py-4 lg:py-2 text-base font-semibold text-slate-700 
 rounded-full border-4 border-indigo-600 hover:border-orange-500"  
    >
      {text}
    </button>
  );
}
