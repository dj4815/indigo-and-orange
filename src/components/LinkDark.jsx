import React from "react";

export default function LinkDark({ linktext }) {
  return (
    <a
      href="#"
      className="underline decoration-2 underline-offset-4 decoration-indigo-900 text-slate-700"
    >
      {linktext}
    </a>
  );
}
