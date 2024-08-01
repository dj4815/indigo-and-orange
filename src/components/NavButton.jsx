import React from "react";
export default function NavButton({ text }) {
  return (
    <div className="underline underline-offset-4 decoration-solid decoration-8 decoration-indigo-600 hover:decoration-orange-400 font-black text-2xl text-slate-700 duration-500">
      <li>
        <a href="#">{text}</a>
      </li>
    </div>
  );
}
