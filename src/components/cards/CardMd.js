import React from "react";
import figIcon from "../../../public/assets/img/figma.svg";
import xdIcon from "../../../public/assets/img/xd.svg";
import bootsIcon from "../../../public/assets/img/bootstrap.svg";
import { FaHeart } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function CardMd({ productThumb, productTitle }) {
  return (
    <div className="code-temp rounded-lg">
      <div className="">
        <div className="relative cursor-pointer">
          <Image
            src={productThumb}
            width={320}
            height={290}
            layout="responsive"
          />
          <div className="flex flex-col items-center card-overlay">
            <div className="flex gap-2 absolute top-32">
              <Link href={`/product`} passHref>
                <a className="w-7 h-7 bg-white rounded-sm flex items-center justify-center flex-shrink-0">
                  <HiEye className="text-black" />
                </a>
              </Link>
              <button className="w-7 h-7 bg-white rounded-sm flex items-center justify-center flex-shrink-0">
                <FaHeart className="text-black" />
              </button>
            </div>
            <div className="flex items-center justify-center absolute bottom-4">
              <p className="pr-3 text-white">Available on: </p>
              <ul className="flex gap-x-2">
                <li className="w-6 h-6 bg-white flex justify-center items-center rounded-[5px]">
                  <Image src={figIcon} alt="figma" />
                </li>
                <li className="w-6 h-6 bg-white flex justify-center items-center rounded-[5px]">
                  <Image src={xdIcon} alt="xd" />
                </li>
                <li className="w-6 h-6 bg-white flex justify-center items-center rounded-[5px]">
                  <Image src={bootsIcon} alt="bootstrap" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link href="/product" passHref>
          <a className="text-base font-semibold">{productTitle}</a>
        </Link>
      </div>
    </div>
  );
}
