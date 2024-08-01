import React from "react";

export default function Link({ linktext }) {
  return (
    <a
      href="#"
      className="underline decoration-2 underline-offset-4 decoration-orange-500 text-slate-100"
    >
      {linktext}
    </a>
  );
}
