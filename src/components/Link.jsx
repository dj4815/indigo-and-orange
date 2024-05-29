import React from "react";

export default function Link({ linktext }) {
  return (
    <a
      href="#"
      className="underline decoration-2 underline-offset-4 decoration-indigo-600 hover:decoration-orange-500 text-slate-700 font-semibold duration-500"
    >
      {linktext}
    </a>
  );
}
