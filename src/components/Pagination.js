import React from "react";
import Link from "next/link";
import {
  HiOutlineChevronRight,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";

export default function Pagination() {
  return (
    <div className="mb-6">
      <ul className="flex gap-x-3">
        <li>
          <Link href="/" passHref>
            <a className="bg-lightblue text-[#222223] w-7 h-7 rounded-[5px]  inline-flex justify-center items-center font-semibold">
              1
            </a>
          </Link>
        </li>
        <li className="bg-lightblue rounded-[5px]">
          <Link href="/" passHref>
            <a className=" text-[#222223] w-7 h-7 inline-flex justify-center items-center font-semibold">
              2
            </a>
          </Link>
        </li>
        <li className="flex bg-lightblue rounded-[5px] justify-center items-center px-2 font-semibold">
          <Link href="/" passHref>
            <a className="text-[#222223]">Next</a>
          </Link>
          <div>
            <HiOutlineChevronRight />
          </div>
        </li>
        <li className="flex items-center bg-lightblue rounded-[5px] justify-center px-2 font-semibold">
          <Link href="/" passHref>
            <a className=" text-[#222223] text-[14px">Last</a>
          </Link>
          <HiOutlineChevronDoubleRight />
        </li>
      </ul>
    </div>
  );
}
