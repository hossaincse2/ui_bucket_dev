import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaCcStripe,
  FaCcPaypal,
  FaLock,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="bg-darkblue pt-20">
        <div className="container mx-auto text-white px-4 lg:px-0">
          <div className="lg:flex">
            <div className="lg:w-1/5 md:w-1/2 w-full">
              <h4 className="text-xl font-semibold mb-10">Company</h4>
              <ul className="space-y-4 mb-10">
                <li>
                  <Link href="/" passHref>
                    <a className="text-base">Support</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a className="text-base">Open a Shop</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a className="text-base">Licensing & Terms</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a className="text-base">Cookie Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-2/5 md:w-2/2 w-full ">
              <h4 className="text-xl font-semibold mb-10">Product</h4>
              <ul className="mb-10 grid grid-cols-2">
                <li className="mb-4">
                  <Link href="/" passHref>
                    <a className="text-base">UI Kit</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a className="text-base">Animation</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" passHref>
                    <a className="text-base">Elementor Kit</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" passHref>
                    <a className="text-base">Adobe XD Template</a>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" passHref>
                    <a className="text-base">Bootstrap Template</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a className="text-base">Figma Template</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a className="text-base">Illustration</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-2/5 w-full md:w-2/2 lg:pl-5">
              <h4 className="text-xl font-semibold mb-10">Subscribe Now</h4>
              <form>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="px-4 py-4 bg-white rounded-lg w-full md:w-4/5 leading-none outline-none"
                  />
                  <BsArrowRightShort className="bg-blue rounded-full text-white h-8 w-8 -ml-12" />
                </div>
              </form>
              <div className="footer-social flex space-x-4 mt-6">
                <a
                  href="#"
                  className="h-8 w-8 bg-white rounded-[10px] text-[#919191] hover:text-blue flex items-center justify-center"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="h-8 w-8 bg-white rounded-[10px] text-[#919191] hover:text-blue flex items-center justify-center"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="h-8 w-8 bg-white rounded-[10px] text-[#919191] hover:text-blue flex items-center justify-center"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="h-8 w-8 bg-white rounded-[10px] text-[#919191] hover:text-blue flex items-center justify-center"
                >
                  <FaDribbble />
                </a>
                <a
                  href="#"
                  className="h-8 w-8 bg-white rounded-[10px] text-[#919191] hover:text-blue flex items-center justify-center"
                >
                  <FaBehance />
                </a>
              </div>
              <div className="payment-support flex items-center py-10 space-x-6">
                <a href="#" className="flex items-center text-base">
                  <FaLock className="mr-3" />
                  Secure Payment:
                </a>
                <a href="#">
                  <FaCcStripe className="h-12 w-12" />
                </a>
                <a href="#">
                  <FaCcPaypal className="h-12 w-12" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom flex justify-center py-5  border-softWhite border-t-1 relative">
            <p className="flex items-center text-base">
              Made with ♥ UIBucket &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
