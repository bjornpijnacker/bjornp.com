import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";

interface SummaryDisclosureProps {
    title: string,
    children?: JSX.Element | JSX.Element[]
}

export default function SummaryDisclosure({ title, children }: SummaryDisclosureProps) {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button
                        className={"flex shadow mt-4 px-4 py-2 text-sm font-medium bg-indigo-200 hover:bg-indigo-300 w-full rounded-lg justify-between"}>
                        <span>{title}</span>
                        <ChevronDownIcon
                            className={"w-5 h-5" + (open ? " transform rotate-180" : "")}/>
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel>
                            {children}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}