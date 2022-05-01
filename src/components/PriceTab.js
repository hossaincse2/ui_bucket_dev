import { useState } from "react";
import { Tab } from "@headlessui/react";
import { RiInformationFill } from "react-icons/ri";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PriceTab() {
  return (
    <div className="w-60 px-2 sm:px-0">
      <div className="flex items-center py-5">
        <h3 className=" mr-2 text-base font-bold">License</h3>
        <RiInformationFill />
      </div>
      <Tab.Group>
        <Tab.List className="flex p-2 space-x-1 bg-lightblue rounded-sm">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 px-5 font-medium rounded-[5px]",
                "focus:outline-none ",
                selected ? "bg-blue text-white" : "text-black"
              )
            }
          >
            Regular
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 px-5 font-medium rounded-[5px]",
                "focus:outline-none ",
                selected ? "bg-blue text-white" : "text-black"
              )
            }
          >
            Extended
          </Tab>
        </Tab.List>
        <Tab.Panels className="py-7">
          <Tab.Panel
            className={classNames("focus:outline-none flex items-end")}
          >
            <h2 className="text-3xl font-bold leading-none ">$20.99</h2>
            <span className="text-base2 font-medium text-black">/Monthly</span>
          </Tab.Panel>
          <Tab.Panel
            className={classNames("focus:outline-none flex items-end")}
          >
            <h2 className="text-3xl font-bold leading-none">$30.30</h2>
            <span className="text-base2 font-medium text-black">/Yearly</span>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
