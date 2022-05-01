import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { menuData } from "../../../pages/api/data";

export default function MobileUiKit() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center items-center w-full  font-medium text-black  focus:outline-none text-base">
            Mobile Ui Kits
            <HiChevronDown
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 w-56 mt-7 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
            <div className="px-1 py-1 ">
              {menuData.map((menu, idx) => (
                <Menu.Item key={idx}>
                  {({ active }) => (
                    <Link href={menu.path} passHref>
                      <a
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {menu.name}
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
