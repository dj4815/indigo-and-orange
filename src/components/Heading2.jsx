import React from "react";

export default function Heading2({ text }) {
  return (
    <h1 className="text-5xl sm:text-5xl font-bold text-orange-400 mb-8">
      {text}
    </h1>
  );
}
