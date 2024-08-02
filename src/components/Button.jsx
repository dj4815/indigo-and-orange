import React from "react";

export default function Button({ text }) {
  return (
    <button
      className="duration-1000 p-4 text-2xl font-semibold text-slate-50 
 rounded-full xl:max-w-64 bg-indigo-700 hover:bg-indigo-500 border-white-2"
    >
      {text}
    </button>
  );
}
