import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import PrimaryNav from "../../components/Layout/Nav/PrimaryNav";
import PriceTab from "../../components/PriceTab";
import bigThumOne from "/public/assets/img/big-thumb-1.jpg";
import bigThumTwo from "/public/assets/img/big-thumb-2.jpg";
import bigThumThree from "/public/assets/img/big-thumb-3.jpg";
import {
  RiHeartFill,
  RiDownloadCloudFill,
  RiEyeFill,
  RiInstagramFill,
  RiPinterestFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiLinkM,
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiCloseLine,
} from "react-icons/ri";
import Image from "next/image";
import { cateIcons, relatedData } from "../api/data";
import CardMd from "../../components/cards/CardMd";

export default function product() {
  return (
    <Layout title="Letto premium elementor kit">
      <PrimaryNav />
      <div className="bg-[#fafafa]">
        <div className="container mx-auto">
          <div className="lg:flex justify-between pt-16 pb-10 items-center px-4">
            <div className="max-w-lg">
              <h3 className="text-xl lg:text-3xl mb-4 mb:lg-0">
                Letto premium Elementor kit
              </h3>
            </div>
            <div className="flex gap-x-5 cursor-pointer">
              <div className="bg-[#EFF4FF] flex justify-center items-center h-11 w-11 text-xl text-black hover:text-white hover:bg-blue rounded-[5px]">
                <RiArrowLeftSLine className=" text-opacity-70" />
              </div>
              <div className="bg-[#EFF4FF] flex justify-center items-center h-11 w-11 text-xl text-black hover:text-white hover:bg-blue rounded-[5px]">
                <RiArrowRightSLine className=" text-opacity-70" />
              </div>
              <div className="bg-[#EFF4FF] flex justify-center items-center h-11 w-11 text-xl text-black hover:text-white hover:bg-blue rounded-full  ml-14">
                <RiCloseLine />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-8 wrapper px-4 mb-12">
              <div className="block">
                <Image
                  src={bigThumOne}
                  alt=""
                  width={880}
                  height={550}
                  layout="responsive"
                />
              </div>
              <div className="block">
                <Image
                  src={bigThumTwo}
                  alt=""
                  width={880}
                  height={550}
                  layout="responsive"
                />
              </div>
              <div className="block">
                <Image
                  src={bigThumThree}
                  alt=""
                  width={880}
                  height={550}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="lg:col-span-4 wrapper bg-white px-7 py-16 relative">
              <div className="watcher bg-[#EFF4FF] rounded-bl-[17px] absolute right-0 top-0 w-[150px] flex px-4 py-2 justify-between">
                <div className="flex flex-col items-center">
                  <RiHeartFill />
                  <span className="text-[10px]">10</span>
                </div>
                <div className="flex flex-col items-center">
                  <RiDownloadCloudFill />
                  <span className="text-[10px]">10</span>
                </div>
                <div className="flex flex-col items-center">
                  <RiEyeFill />
                  <span className="text-[10px]">2.5k</span>
                </div>
              </div>
              <div className="product-title py-7 border-b-1 border-gray border-opacity-70">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  Sheeter UI Kit
                </h3>
                <p className="text-base font-medium">
                  This ui kit design by ecommerch and online shope
                </p>
              </div>
              <div className="social-media-share flex justify-between items-center py-5">
                <div className="md:flex space-x-2 gap-x-2">
                  <h4 className="font-bold text-base text-black">
                    Share With:
                  </h4>
                  <div className="h-6 w-6 bg-[#EFF4FF] rounded-[5px] inline-flex justify-center items-center">
                    {" "}
                    <RiPinterestFill />
                  </div>
                  <div className="h-6 w-6 bg-[#EFF4FF] rounded-[5px] inline-flex justify-center items-center">
                    <RiInstagramFill />
                  </div>
                  <div className="h-6 w-6 bg-[#EFF4FF] rounded-[5px] inline-flex justify-center items-center">
                    <RiTwitterFill />
                  </div>
                  <div className="h-6 w-6 bg-[#EFF4FF] rounded-[5px] inline-flex justify-center items-center">
                    <RiFacebookFill />
                  </div>
                  <div className="h-6 w-6 bg-[#EFF4FF] rounded-[5px] inline-flex justify-center items-center">
                    <RiLinkedinFill />
                  </div>
                </div>
                <div>
                  <button className="bg-[#EFF4FF] flex justify-center items-center p-1 rounded-[5px] font-semibold">
                    <RiLinkM />
                    Copy
                  </button>
                </div>
              </div>
              <div className="available-on flex pt-5 pb-3 border-b-1 border-gray border-opacity-70">
                <h4 className="font-bold text-md mr-3">Available On:</h4>
                <div className="flex gap-x-3">
                  {cateIcons.map((data, i) => (
                    <div key={i + 1}>
                      <Image
                        src={data.icon}
                        alt="Category"
                        width={20}
                        height={22}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-5 border-b-1 border-gray border-opacity-70">
                <div className="flex mb-3">
                  <div className="mr-3">
                    <input type="checkbox" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">
                      Subscribe & Save
                    </h4>
                    <p>From $30.99 to access 10 Premium Files</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3">
                    <input type="checkbox" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">
                      Purchase this product only
                    </h4>
                    <p>$20</p>
                  </div>
                </div>
              </div>
              <PriceTab />
              <div className="cart">
                <button className="border-1 border-gray w-full rounded-md py-4 font-medium flex justify-center items-center mb-5">
                  Add to cart
                </button>
              </div>
              <div className="flex justify-between gap-x-5 mb-6">
                <div className="w-full">
                  <select className="w-full rounded-md py-4 border-gray">
                    <option>Figma</option>
                    <option>Adobe XD</option>
                    <option>Sketch</option>
                  </select>
                </div>
                <div className="w-full">
                  <button className="flex justify-center items-center flex-shrink-0 text-white bg-blue py-4 px-11  rounded-md font-medium w-full">
                    Download
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-y-1 border-gray border-opacity-70 py-5 my-7">
                <h4 className="font-semibold">Collection</h4>
                <button className="font-semibold">+Save Now</button>
              </div>
              <div className="product-info">
                <div className="border-b-1 border-gray border-opacity-70">
                  <h4 className="text-xl font-semibold mb-4">Overview</h4>
                  <p className="text-black pb-7 text-base">
                    Molestie at elementum eu facilisis sed odio morbi quis
                    commodo. Congue mauris rhoncus aenean vel elit scelerisque
                    mauris. Fames ac turpis egestas maecenas pharetra convallis
                    posuere morbi. Leo duis ut diam quam nulla porttitor massa.{" "}
                  </p>
                </div>
                <div className="py-7 border-b-1 border-gray border-opacity-70">
                  <h4 className="text-base2 mb-4">Info</h4>
                  <ul className="font-bold space-y-2">
                    <li className="flex justify-between ">
                      <div>Blocks</div>
                      <div className="opacity-70 text-md">6</div>
                    </li>
                    <li className="flex justify-between ">
                      <div>Layouts</div>
                      <div className="opacity-70 text-md">
                        Deskto & Responsive
                      </div>
                    </li>
                    <li className="flex justify-between">
                      <div>Compatible with</div>
                      <div className="opacity-70 text-md">
                        Figma, Adobe XD, HTML
                      </div>
                    </li>
                    <li className="flex justify-between">
                      <div>Release</div>
                      <div className="opacity-70 text-md">22 January 2022</div>
                    </li>
                    <li className="flex justify-between">
                      <div>Last Update</div>
                      <div className="opacity-70 text-md">22 January 2022</div>
                    </li>
                    <li className="flex justify-between ">
                      <div>Product by</div>
                      <div className="opacity-70 text-md">Uibucket LLC</div>
                    </li>
                  </ul>
                </div>
                <div className="product-category-tag pt-7">
                  <h4 className="text-base2 mb-4">Tags</h4>
                  <ul className="inline-flex flex-wrap gap-3">
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex justify-center items-center w-[100px] h-[45px] rounded-md flex-shrink-0">
                          UI Kit
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex justify-center items-center w-[100px] h-[45px] rounded-md flex-shrink-0">
                          Web UI Kit
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex justify-center items-center w-[100px] h-[45px] rounded-md flex-shrink-0">
                          UI Design
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex justify-center items-center w-[100px] h-[45px] rounded-md flex-shrink-0">
                          UX Desing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex justify-center items-center w-[100px] h-[45px] rounded-md flex-shrink-0">
                          Web Apps
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex justify-center items-center w-[100px] h-[45px] rounded-md flex-shrink-0">
                          Design
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex justify-center items-center w-[100px] h-[45px] rounded-md flex-shrink-0">
                          Minimal
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex justify-center items-center w-[100px] h-[45px] rounded-md flex-shrink-0">
                          Creative
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex justify-center items-center w-[100px] h-[45px] rounded-md flex-shrink-0">
                          Logo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex justify-center items-center w-[100px] h-[45px] rounded-md flex-shrink-0">
                          App Design
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" passHref>
                        <a className="border-1 border-gray border-opacity-70 flex flex-shrink-0 justify-center items-center w-[100px] h-[45px] rounded-md">
                          Webflow
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="div">
            <h3 className="text-xl lg:text-3xl mb-7">You also may like</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {relatedData.map((data) => (
                <CardMd
                  productThumb={data.templateThumb}
                  productTitle={data.title}
                  key={data.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
