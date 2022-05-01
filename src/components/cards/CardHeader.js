import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CardHeader({ templateType }) {
  return (
    <div className="flex justify-between items-center mb-10 md:mb-14">
      <h4 className="text-xl md:text-3xl font-semibold">{templateType}</h4>
      <Link href="/" passHref>
        <a className="inline-flex items-center text-blue flex-shrink-0 font-semibold text-base bg-blueTwo px-6 py-3 rounded-md">
          View All <FaArrowRight className="ml-1" />
        </a>
      </Link>
    </div>
  );
}
