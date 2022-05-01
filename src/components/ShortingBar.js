import React from "react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import ListBoxx from "./ShortBy";
import Container from "./Container";
import ShortBy from "./ShortBy";

export default function ShortingBar({ catName, classes }) {
  return (
    <section className={`${classes}`}>
      <Container>
        <div className="bg-[#F0F4FF] p-5 rounded-md">
          <div className="md:flex justify-between items-center">
            <div className="left mb-4 md:mb-0">
              <h5 className="text-base font-semibold">{catName}</h5>
            </div>
            <div className="right">
              <div className="flex items-center gap-x-4">
                <div className="me-2">
                  <select
                    name=""
                    id=""
                    className="rounded-full px-4 py-3 border-1 border-r-2 border-gray w-32 focus:outline-none"
                  >
                    <option value="">Sort By</option>
                    <option value="">1</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <Link href="/" passHref>
                  <a className="bg-blue text-white py-3 px-5 inline-flex flex-shrink-0 rounded-full items-center">
                    <span>View All</span>
                    <BsArrowRightShort />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
