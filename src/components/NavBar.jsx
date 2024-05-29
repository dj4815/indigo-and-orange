import React from "react";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <>
      <ul
        className="flex justify-around px-1 py-8 bg-indigo-50
      "
      >
        <NavButton text="HOME" />
        <NavButton text="PROJECTS" />
        <NavButton text="CONTACT" />
      </ul>
    </>
  );
}
