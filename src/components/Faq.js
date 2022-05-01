import React from "react";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

export default function Faq() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-semibold px-4 lg:px-0">
            Frequently asked questions
          </h2>
        </div>
        <div className="max-w-4xl px-3 pt-16 mx-auto">
          <div className="w-full">
            <Disclosure>
              {({ open }) => (
                <>
                  <div
                    className={`${
                      open ? "border-1 border-blue " : ""
                    }bg-white shadow-sm p-5 rounded-lg mb-4`}
                  >
                    <Disclosure.Button className="flex justify-between w-full px-3 py-2 text-sm font-medium text-left text-purple-900">
                      <h5 className="text-lg lg:text-xl font-semibold">
                        Personal & Commercial use policy?
                      </h5>
                      <BsChevronDown
                        className={`${
                          open ? "transform rotate-180 text-blue" : ""
                        } w-5 h-5 font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-3 pt-4 pb-2 text-sm">
                      We don’t charge monthly or annually. You just need to pay
                      once and you will get Readyui’s unlimited access for
                      lifetime
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div
                    className={`${
                      open ? "border-1 border-blue " : ""
                    }bg-white shadow-sm p-5 rounded-lg mb-4`}
                  >
                    <Disclosure.Button className="flex justify-between w-full px-3 py-2 text-sm font-medium text-left text-purple-900">
                      <h5 className="text-lg lg:text-xl font-semibold">
                        What is your purchase plan?
                      </h5>
                      <BsChevronDown
                        className={`${
                          open ? "transform rotate-180 text-blue" : ""
                        } w-5 h-5 font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-3 pt-4 pb-2 text-sm">
                      We don’t charge monthly or annually. You just need to pay
                      once and you will get Readyui’s unlimited access for
                      lifetime
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div
                    className={`${
                      open ? "border-1 border-blue " : ""
                    }bg-white shadow-sm p-5 rounded-lg mb-4`}
                  >
                    <Disclosure.Button className="flex justify-between w-full px-3 py-2 text-sm font-medium text-left text-purple-900">
                      <h5 className="text-lg lg:text-xl font-semibold">
                        Can I resell your product?
                      </h5>
                      <BsChevronDown
                        className={`${
                          open ? "transform rotate-180 text-blue" : ""
                        } w-5 h-5 font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-3 pt-4 pb-2 text-sm">
                      We don’t charge monthly or annually. You just need to pay
                      once and you will get Readyui’s unlimited access for
                      lifetime
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div
                    className={`${
                      open ? "border-1 border-blue " : ""
                    }bg-white shadow-sm p-5 rounded-lg mb-4`}
                  >
                    <Disclosure.Button className="flex justify-between w-full px-3 py-2 text-sm font-medium text-left text-purple-900">
                      <h5 className="text-lg lg:text-xl font-semibold">
                        What is priority support?
                      </h5>
                      <BsChevronDown
                        className={`${
                          open ? "transform rotate-180 text-blue" : ""
                        } w-5 h-5 font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-3 pt-4 pb-2 text-sm">
                      We don’t charge monthly or annually. You just need to pay
                      once and you will get Readyui’s unlimited access for
                      lifetime
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div
                    className={`${
                      open ? "border-1 border-blue " : ""
                    }bg-white shadow-sm p-5 rounded-lg mb-4`}
                  >
                    <Disclosure.Button className="flex justify-between w-full px-3 py-2 text-sm font-medium text-left text-purple-900">
                      <h5 className="text-lg lg:text-xl font-semibold">
                        What is priority support?
                      </h5>
                      <BsChevronDown
                        className={`${
                          open ? "transform rotate-180 text-blue" : ""
                        } w-5 h-5 font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-3 pt-4 pb-2 text-sm">
                      We don’t charge monthly or annually. You just need to pay
                      once and you will get Readyui’s unlimited access for
                      lifetime
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section>
    </>
  );
}
