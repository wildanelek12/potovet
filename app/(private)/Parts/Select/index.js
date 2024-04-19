import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { cn } from "@/utils";

export default function Select({ labelClassname, label, onChange, options, value, defaultValue, selected }) {
  return (
    <div className="flex flex-col w-full gap-1">
      {label && <label className={cn("capitalize font-semibold", labelClassname)}>{label}</label>}

      <Listbox value={value ?? defaultValue} onChange={(e) => onChange(e)}>
        <div className="relative">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-[#CCCED1] rounded-sm cursor-pointer">
            <span className="block text-base truncate">{selected.name ?? "Select Categories"}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute z-50 w-full py-1 mt-1 bg-white rounded-sm shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 !outline-none">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) => cn("relative cursor-default select-none py-2 pl-2 pr-8", active ? "bg-white text-amber-900" : "text-gray-900")}
                  value={option}
                >
                  {({ selected }) => <span className={cn("block truncate", selected ? "font-medium" : "font-normal")}>{option.name}</span>}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
