import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <div className="flex justify-between items-center py-4 flex-wrap">
        <nav className="space-x-12">
          <a href="">All Product</a>
          <Link href="/price" passHref>
            <a>Pricing</a>
          </Link>
          <Link href="/" passHref>
            <a>Faq</a>
          </Link>
        </nav>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="bg-lightblueTwo text-base font-light mr-8 py-2 pl-3 rounded-[10px] focus:outline-none   placeholder:text-gray-500"
          />
          <Link href="/">
            <a href="#" className="pr-5">
              Login
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="bg-blue text-base font-medium text-white px-6 py-3 inline-block rounded-[11px]">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
