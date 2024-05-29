import React from "react";

export default function Heading1({ text }) {
  return (
    <h1 className="text-6xl lg:text-8xl font-bold text-indigo-600 mb-8">
      {text}
    </h1>
  );
}
