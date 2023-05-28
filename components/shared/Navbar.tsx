import Link from "next/link";
import React from "react";
import { ImSearch } from "react-icons/im";

function Navbar() {
  return (
    <nav className="border-gray-200 p-5">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex gap-2">
          <img src="/icon-a.png" height={50} width={50} />
          <span className="self-center text-lg font-semibold whitespace-nowrap">
            Music World
          </span>
        </Link>
        <Link href="/search">
          <ImSearch size={25} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
