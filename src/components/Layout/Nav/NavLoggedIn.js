import Link from "next/link";
import React, { useState } from "react";
import AllProducts from "./AllProduct";
import { BsSearch } from "react-icons/bs";
import {
  RiMenuLine,
  RiCloseLine,
  RiVipCrownLine,
  RiArrowDownSFill,
  RiLogoutBoxLine,
  RiUserLine,
} from "react-icons/ri";

import MiniCart from "../../MiniCart";
import Avatar from "/public/assets/img/avatar.png";
import Image from "next/image";
import SignInModal from "../../login-signup/SignInModal";
import SignUpModal from "../../login-signup/SignUpModal";

export default function NavLoggedIn({ bgLight }) {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showDropdown = () => setDropdown(!dropdown);
  return (
    <>
      <header>
        <div
          className={`w-full px-10 lg:px-16 lg:flex items-center py-4 hidden justify-center ${
            bgLight ? "bg-[#F6F6F6]" : ""
          }`}
        >
          <div className="w-32">
            <Link href="/" passHref>
              <a className="text-xl text-blue">Logo</a>
            </Link>
          </div>
          <div className="w-96">
            <nav className="flex gap-x-10">
              <AllProducts />
              <Link href="/price" passHref>
                <a className="text-base">Pricing</a>
              </Link>
              <Link href="/" passHref>
                <a className="text-base">Faq</a>
              </Link>
            </nav>
          </div>
          <div className="flex items-center ml-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search.."
                className="bg-lightblueTwo text-base font-light mr-5 py-2 bor pl-3 rounded-[10px] border-transparent focus:border-transparent focus:ring-0 placeholder:text-gray-500 w-[270px] h-[50px]"
              />
              <BsSearch className="absolute right-12 text-blue" />
            </div>
            <MiniCart />
          </div>
          <div className="flex items-center gap-x-4">
            <Link href="/">
              <a className="bg-orange text-white px-5 py-3 rounded-sm flex items-center text-base flex-shrink-0">
                <RiVipCrownLine className="mr-2" />
                <span>Upgrade Now</span>
              </a>
            </Link>
            <div className="flex items-center gap-x-1 relative">
              <Image
                src={Avatar}
                width={40}
                height={40}
                alt="Avatar"
                className="mb-6"
              />
              <RiArrowDownSFill
                onClick={showDropdown}
                className="cursor-pointer"
              />
              <div
                className={`${
                  dropdown
                    ? "bg-white shadow-sm p-4 flex flex-col w-40 absolute top-16 rounded-md right-1 space-y-2 z-10"
                    : "hidden "
                }`}
              >
                <Link href="/userprofile">
                  <a className="flex gap-x-2 items-center font-medium">
                    <RiUserLine />
                    <span>Profile</span>
                  </a>
                </Link>
                <Link href="/userprofile">
                  <a className="flex gap-x-2 items-center font-medium">
                    <RiLogoutBoxLine />
                    <span>Dashboard</span>
                  </a>
                </Link>
                <Link href="/">
                  <a className="flex gap-x-2 items-center font-medium">
                    <RiLogoutBoxLine />
                    <span>Logout</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-16 flex justify-between items-center px-4 lg:hidden shadow-sm">
          <div className="mobile-logo">
            <Link href="/">
              <a className="text-blue text-lg font-semibold">UiBucket</a>
            </Link>
          </div>
          <div>
            <RiMenuLine
              className={`text-blue text-lg cursor-pointer`}
              onClick={showSidebar}
            />
          </div>
        </div>

        <div
          className={`fixed w-[250px] h-screen bg-white  z-10 top-0 transition-transform ${
            sidebar ? "left-0" : "-translate-x-full"
          }`}
        >
          <div className="px-5 pt-12">
            <div className="flex justify-between items-center border-b-1 border-gray pb-5">
              <div className="mobile-logo">
                <Link href="/">
                  <a className="text-blue text-lg font-semibold">UiBucket</a>
                </Link>
              </div>
              <div className="w-6 h-6 bg-blue flex justify-center items-center rounded-full text-white cursor-pointer">
                <RiCloseLine onClick={showSidebar} />
              </div>
            </div>
            <nav className="flex flex-col space-y-4 pt-5">
              <AllProducts />
              <Link href="/price" passHref>
                <a className="text-base">Pricing</a>
              </Link>
              <Link href="/" passHref>
                <a className="text-base">Faq</a>
              </Link>
            </nav>
            <div className="flex pt-4 flex-col gap-5">
              <SignInModal />
              <SignUpModal />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
