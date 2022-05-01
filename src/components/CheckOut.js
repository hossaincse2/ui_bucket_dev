import React from "react";
import { BsArrowRight, BsArrowRightShort } from "react-icons/bs";
import cartImg from "/public/assets/img/cart-product.png";
import Image from "next/image";
import Link from "next/link";
import { FaTimesCircle } from "react-icons/fa";
export default function CheckOut() {
  return (
    <section className="-top-450">
      <div className="container mx-auto px-8">
        <div className="max-w-full mx-auto">
          <div className="lg:flex mb-10 lg:mb-20 justify-between">
            <div className="">
              <h2 className="text-xl md:text-2xl lg:text-5xl text-white">
                Checkout
              </h2>
            </div>
            <div>
              <p className="text-lg text-white">Have any discount code? </p>
              <form>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter here.."
                    className="py-5 pl-8 border-1 placeholder:text-white placeholder:opacity-50 border-white focus:outline-none bg-transparent rounded-md"
                  />
                  <button className="-ml-5 bg-white rounded-r-lg px-5 py-6 font-semibold inline-flex items-center">
                    Apply
                    <BsArrowRightShort className="w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-full bg-white shadow-lg rounded-[30px] px-12 py-8">
          <div className="lg:flex gap-x-16">
            <div className="lg:w-1/2 w-full">
              <ul>
                <li className="grid grid-cols-3 border-b-half">
                  <span className="text-base2">Name</span>
                  <span className="ml-auto text-base2">Price</span>
                  <span className="ml-auto text-base2"></span>
                </li>
                <li className="py-5 grid grid-cols-3 items-center border-b-half">
                  <div className="single-cart-product flex">
                    <div className="product-thumb mr-4">
                      <Image src={cartImg} alt="Product" />
                    </div>
                    <div className="product-desc">
                      <h5 className="text-base font-semibold pr-4">
                        Mixkit - Design + Code Premuim Kit
                      </h5>
                      <span className="text-[11px]">
                        Product by Uibucket LLC
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span>$100</span>
                  </div>
                  <div className="ml-auto">
                    <button className="text-black text-[14px] font-semibold">
                      <FaTimesCircle className=" w-5 h-5" />
                    </button>
                  </div>
                </li>
                <li className="py-5 grid grid-cols-3 items-center border-b-half">
                  <div className="single-cart-product flex">
                    <div className="product-thumb mr-4">
                      <Image src={cartImg} alt="Product" />
                    </div>
                    <div className="product-desc">
                      <h5 className="text-base font-semibold pr-4">
                        Mixkit - Design + Code Premuim Kit
                      </h5>
                      <span className="text-[11px]">
                        Product by Uibucket LLC
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span>$100</span>
                  </div>
                  <div className="ml-auto">
                    <button className="text-black text-[14px] font-semibold">
                      <FaTimesCircle className=" w-5 h-5" />
                    </button>
                  </div>
                </li>
                <li className="py-5 grid grid-cols-3 items-center border-b-half">
                  <div className="single-cart-product flex">
                    <div className="product-thumb mr-4">
                      <Image src={cartImg} alt="Product" />
                    </div>
                    <div className="product-desc">
                      <h5 className="text-base font-semibold pr-4">
                        Mixkit - Design + Code Premuim Kit
                      </h5>
                      <span className="text-[11px]">
                        Product by Uibucket LLC
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span>$100</span>
                  </div>
                  <div className="ml-auto">
                    <button className="text-black text-[14px] font-semibold">
                      <FaTimesCircle className=" w-5 h-5" />
                    </button>
                  </div>
                </li>
                <li className="grid grid-cols-3 py-3">
                  <div className="font-semibold">Subtotal</div>
                  <div className="ml-auto">$300</div>
                  <div></div>
                </li>
                <li className="grid grid-cols-3 border-b-half py-3">
                  <div className="font-semibold">Tax</div>
                  <div className="ml-auto">$10</div>
                  <div className=""></div>
                </li>
                <li className="grid grid-cols-3 py-3">
                  <div className="font-semibold">Total</div>
                  <div className="ml-auto">$310</div>
                  <div className=""></div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 pt-6 w-full">
              <div className="pt-12 pb-10 px-10 bg-white border-1 rounded-md border-gray">
                <form action="" className="divide-y-1 divide-gray">
                  <div>
                    <label className="mb-2 inline-block">
                      Enter Emaill address
                    </label>
                    <input
                      type="text"
                      placeholder="hello@demo.co"
                      className="bg-[#F1F1F1] px-7 py-5 placeholder:text-black placeholder:opacity-50 w-full mb-6 rounded-md border-gray"
                    />
                  </div>
                  <div className="pt-6">
                    <button className="bg-blue flex w-full rounded-md items-center justify-center font-semibold py-5 text-white">
                      Purchase
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
