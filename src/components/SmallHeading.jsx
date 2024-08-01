import React from "react";

export default function SmallHeading({ text }) {
  return (
    <h1 className="text-4xl font-bold text-orange-400 mt-8 mb-2">
      {text}
    </h1>
  );
}
