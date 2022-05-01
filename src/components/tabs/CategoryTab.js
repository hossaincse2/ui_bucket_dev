import React from "react";
import { Tab } from "@headlessui/react";
import figmaIcon from "../../../public/assets/img/figma.svg";
import xdIcon from "../../../public/assets/img/xd.svg";
import bootstrapIcon from "../../../public/assets/img/bootstrap.svg";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const categories = [
  {
    categoryName: "Feature Product",
  },
  { categoryName: "Web Template" },
  { categoryName: "UI Kit" },
  { categoryName: "Illustration" },
  { categoryName: "Lotty Animation" },
];

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

export default function CategoryTab() {
  return (
    <>
      <div className="container mx-auto px-5 lg:px-0 py-14">
        <Tab.Group>
          <Tab.List className="flex flex-col md:flex-row gap-x-16 gap-y-3 items-center">
            {categories.map((categorie, i) => (
              <Tab as={Fragment} key={i + 1}>
                {({ selected }) => (
                  <button
                    className={`pb-2 ${
                      selected ? "text-orange border-b-1 border-b-orange " : ""
                    }`}
                  >
                    {categorie.categoryName}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="pt-8">
            <Tab.Panel>
              <div className="tab-content grid gap-y-10 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
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
                          <h4 className="font-semibold">
                            {product.productTitle}
                          </h4>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="tab-content grid gap-y-10 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
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
                          <h4 className="font-semibold">
                            {product.productTitle}
                          </h4>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="tab-content grid gap-y-10 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
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
                          <h4 className="font-semibold">
                            {product.productTitle}
                          </h4>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="tab-content grid gap-y-10 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
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
                          <h4 className="font-semibold">
                            {product.productTitle}
                          </h4>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="tab-content grid gap-y-10 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
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
                          <h4 className="font-semibold">
                            {product.productTitle}
                          </h4>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
