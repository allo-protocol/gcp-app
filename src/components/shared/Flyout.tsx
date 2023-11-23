"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Flyout(props: {
  children: JSX.Element | JSX.Element[];
  label?: string;
}) {
  return (
    <Popover className="relative w-full">
      {/* <div className="flex justify-center items-center w-full"> */}
      <Popover.Button className="flex items-center justify-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>{props.label || "Show more"}</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>
      {/* </div> */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 mt-5 flex w-full px-4">
          {props.children}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
