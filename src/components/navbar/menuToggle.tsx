import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

interface MenuToggleProps {
    open: boolean;
}

export default function MenuToggle({ open }: MenuToggleProps) {
    return (
        <div className={"absolute inset-y-0 left-0 flex items-center sm:hidden"}>
            <Disclosure.Button type={"button"} id={"mobile-navbar-button"}
                               className={"inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-black hover:bg-slate-200 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-slate-500"}>
                <span className={"sr-only"}>Open main menu</span>
                {
                    open ? (<XIcon className="block h-6 w-6" aria-hidden="true"/>)
                        : (<MenuIcon className={"block h-6 w-6"} aria-hidden={"true"}/>)
                }
            </Disclosure.Button>
        </div>
    );
}