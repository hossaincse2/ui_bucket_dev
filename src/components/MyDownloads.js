import Image from "next/image";
import Link from "next/link";
import React from "react";
import downloadProuduct from "/public/assets/img/download-1.png";

const MyDownloads = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="grid grid-cols-4 gap-x-5 items-center">
        <div className="">
          <div className="md:shrink-0">
            <Image
              src={downloadProuduct}
              className="h-48 w-full object-cover md:h-full md:w-48"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="">
            <Link href="/">
              <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                <h5 className="text-base">Web Dashboard Interface UI Kit</h5>
              </a>
            </Link>
            <p className="text-[12px]">Commercial License</p>
          </div>
        </div>
        <div className="hidden md:block text-center">
          <Link href="">
            <a className="bg-blue text-white rounded-md px-5 py-3 inline-flex flex-shrink-0">
              Download
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyDownloads;
