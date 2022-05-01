import Image from "next/image";
import React from "react";
import { cateData } from "../pages/api/data";

const BrowseAllHeader = () => {
  return (
    <section className="pt-16">
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="max-w-4xl mx-auto text-center border pb-10 border-b-1 border-opacity-40">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#222223] mb-4">
            100+ Ready UI Kit & Web Template For Commercial Use
          </h2>
          <p className="text-base text-[#6B7B8A]">
            Our marketplace of digital assets helps independent designers earn a
            living doing what they love while giving you the perfect building
            blocks for your creative projects.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-0">
        <h6 className="text-base2 text-center my-5 font-semibold">
          Available On :
        </h6>
        <div className="w-full lg:w-9/12 mx-auto">
          <div className="flex gap-x-5 overflow-x-auto">
            {cateData.map((data) => (
              <div
                className="single-icon flex flex-col flex-shrink-0 justify-center items-center w-20 bg-white border-1 border-softWhite rounded-lg p-3"
                key={data.id}
              >
                <Image
                  src={data.catImg}
                  alt={data.name}
                  width={30}
                  height={30}
                />
                <small className="text-[10px] font-semibold mt-3">
                  {data.name}
                </small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseAllHeader;
