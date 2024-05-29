import React from "react";

export default function SmallHeading({ text }) {
  return (
    <h1 className="text-4xl lg:text-6xl font-bold text-orange-500 mb-2">
      {text}
    </h1>
  );
}
