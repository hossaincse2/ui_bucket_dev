import React from "react";
import { FaStar } from "react-icons/fa";

export default function Rating() {
  return (
    <ul className="flex space-x-2">
      <li className="text-orange">
        <FaStar />
      </li>
      <li className="text-orange">
        <FaStar />
      </li>
      <li className="text-orange">
        <FaStar />
      </li>
      <li className="text-orange">
        <FaStar />
      </li>
      <li className="text-orange">
        <FaStar />
      </li>
    </ul>
  );
}
