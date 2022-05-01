import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import Link from "next/link";

export default function PricePack() {
  return (
    <>
      <section className="py-14 bg-waterLight">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-5">
              Buy once & be happy
            </h2>
            <p className="text-base mb-8 px-4 lg:px-0">
              Save money by one time purchase and get full access to future
              updates as well
            </p>
          </div>
          <div className="price-card max-w-4xl mx-auto">
            <div className="lg:flex justify-between gap-8 space-y-7 lg:space-y-0">
              <div className="lg:w-6/12 bg-white p-8 rounded-[30px]">
                <div className="flex items-start justify-between">
                  <div className="price">
                    <h3 className="text-xl lg:text-3xl leading-none text-blue font-bold mb-4">
                      $59.99
                    </h3>
                    <p className="font-semibold text-success">
                      <span className="line-through text-darkblue">$100</span>
                      (Save 40%)
                    </p>
                  </div>
                  <div>
                    <span className="bg-orange rounded-full px-3 py-1 text-base text-white font-semibold ">
                      Annual
                    </span>
                  </div>
                </div>
                <p className="text-base py-3 border-b-1 border-gray">
                  Per month, Billed annually. Cancel anytime
                </p>
                <ul className="mt-3 space-y-3">
                  <li className="flex items-center text-base">
                    <FaCheckCircle className="text-blue mr-2" />
                    Daily content updates
                  </li>
                  <li className="flex items-center text-base">
                    <FaCheckCircle className="text-blue mr-2" />
                    Unlimited PREMIUM downloads
                  </li>
                  <li className="flex items-center text-base">
                    <FaCheckCircle className="text-blue mr-2" />
                    Valid commercial licenses
                  </li>
                  <li className="flex items-center text-base">
                    <FaCheckCircle className="text-blue mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center text-base">
                    <BsCheckCircle className="text-[#454545] mr-2" />
                    Access to future product
                  </li>
                </ul>
                <Link href="/" passHref>
                  <a className="bg-blue block text-center mt-6 py-4 text-white rounded-[10px] font-semibold">
                    Purchase Now
                  </a>
                </Link>
              </div>
              <div className="lg:w-6/12 bg-white p-8 rounded-[30px]">
                <div className="flex items-start justify-between">
                  <div className="price">
                    <h3 className="text-xl lg:text-3xl leading-none text-blue font-bold mb-4">
                      $99.99
                    </h3>
                    <p className="font-semibold text-success">
                      <span className="line-through text-darkblue">$150</span>
                      (Save 40%)
                    </p>
                  </div>
                  <div>
                    <span className="bg-orange rounded-full leading-none px-3 py-1 text-base text-white font-semibold">
                      Life Time Access
                    </span>
                  </div>
                </div>
                <p className="text-base py-3 border-b-1 border-gray">
                  Unlimited Life Time Access
                </p>
                <ul className="mt-3 space-y-3">
                  <li className="flex items-center text-base">
                    <FaCheckCircle className="text-blue mr-2" />
                    Daily content updates
                  </li>
                  <li className="flex items-center text-base">
                    <FaCheckCircle className="text-blue mr-2" />
                    Unlimited PREMIUM downloads
                  </li>
                  <li className="flex items-center text-base">
                    <FaCheckCircle className="text-blue mr-2" />
                    Valid commercial licenses
                  </li>
                  <li className="flex items-center text-base">
                    <FaCheckCircle className="text-blue mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center text-base">
                    <FaCheckCircle className="text-blue mr-2" />
                    Access to future product
                  </li>
                </ul>
                <Link href="/" passHref>
                  <a className="bg-blue block text-center mt-6 py-4 text-white rounded-[10px] font-semibold">
                    Purchase Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
