import Image from "next/image";
import Link from "next/link";
import React from "react";
import figmaIcon from "/public/assets/img/figma.svg";
import xdIcon from "/public/assets/img/xd.svg";
import bootstrapIcon from "/public/assets/img/bootstrap.svg";

const products = [
  {
    productThumb: "/assets/img/card-img-1.png",
    productTitle: "Brandy- Agency Landing Page",
  },
  {
    productThumb: "/assets/img/card-img-1.png",
    productTitle: "Brandy- Agency Landing Page",
  },
  {
    productThumb: "/assets/img/card-img-1.png",
    productTitle: "Brandy- Agency Landing Page",
  },
  {
    productThumb: "/assets/img/card-img-1.png",
    productTitle: "Brandy- Agency Landing Page",
  },
  {
    productThumb: "/assets/img/card-img-1.png",
    productTitle: "Brandy- Agency Landing Page",
  },
  {
    productThumb: "/assets/img/card-img-1.png",
    productTitle: "Brandy- Agency Landing Page",
  },
];

const MyCollections = () => {
  return (
    <div className="tab-content grid gap-y-10 gap-x-5 lg:grid-cols-2 xl:gap-x-10">
      {products.map((product, i) => (
        <Link href="/elementorkit" passHref key={i + 1}>
          <a>
            <div className="bg-white shadow-lg rounded-lg">
              <Image
                src={product.productThumb}
                className="w-full h-full object-fit lg:w-full lg:h-full"
                alt=""
                width={400}
                height={300}
                layout="responsive"
              />
              <div className="flex space-x-2 pl-5 -mt-5 relative z-20">
                <div className="bg-white w-7 h-7 leading-7 text-center shadow-sm rounded-sm">
                  {" "}
                  <Image src={figmaIcon} alt="" />
                </div>
                <div className="bg-white w-7 h-7 leading-7 text-center shadow-sm rounded-sm">
                  <Image src={xdIcon} alt="" />
                </div>
                <div className="bg-white w-7 h-7 leading-7 text-center shadow-sm rounded-sm">
                  <Image src={bootstrapIcon} alt="" />
                </div>
              </div>
              <div className="card-bottom p-5">
                <h4 className="font-semibold">{product.productTitle}</h4>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default MyCollections;
