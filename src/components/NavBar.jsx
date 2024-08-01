import React from "react";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <>
      <ul className="flex justify-around bg-white px-1 py-8">
        <NavButton text="HOME" />
        <NavButton text="PROJECTS" />
        <NavButton text="CONTACT" />
      </ul>
    </>
  );
}
