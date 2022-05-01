import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { RiSortDesc } from "react-icons/ri";

const category = [
  { name: "Short By" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
];

export default function ShortBy() {
  const [selected, setSelected] = useState(category[0]);
  return (
    <div className="w-42">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-3 px-5 border-1 border-black pr-10 text-left rounded-full cursor-pointer focus:outline-none sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <RiSortDesc
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
            <Listbox.Options className="absolute right-0 w-[200px] py-1 mt-5 overflow-auto text-base bg-white rounded-md text-right shadow-lg max-h-60 focus:outline-none sm:text-sm z-10">
              {category.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `cursor-default select-none relative py-1 pl-3 pr-4 ${
                      active ? "text-blue bg-light-blue" : "text-black"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
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
