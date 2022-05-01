import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

const category = [
  { name: "Figma" },
  { name: "Tailwind" },
  { name: "Adobe XD" },
  { name: "Bootstrap" },
];

export default function CategorySelect() {
  const [selected, setSelected] = useState(category[0]);
  return (
    <div className="w-48">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full flex border-1 border-black py-4 pb-5 flex-shrink-0 items-center rounded-md px-5">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <BiChevronDown
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute right-0 w-[200px] py-2 overflow-auto px-3 mt-5 text-base bg-white rounded-md  shadow-lg max-h-60 focus:outline-none sm:text-sm z-10 left-0">
              {category.map((singleCat, singleIdx) => (
                <Listbox.Option
                  key={singleIdx}
                  className={({ active }) =>
                    `cursor-default select-none relative py-1  pl-3 pr-4 ${
                      active ? "text-blue bg-light-blue" : "text-black"
                    }`
                  }
                  value={singleCat}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {singleCat.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
