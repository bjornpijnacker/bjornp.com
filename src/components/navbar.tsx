import '../global.css';
import React, { useState } from 'react';
import { Disclosure, Popover } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { usePopper } from 'react-popper'
import { Link } from "react-router-dom";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Summaries', href: '/summaries' },
];

type MenuProps = {
    active: string;
};

type MenuToggleProps = {
    open: boolean;
};

type MenuItemProps = {
    name: string;
    href: string;
    active: boolean;
};

export default function Navbar({ active }: MenuProps) {
    return (
        <>
            <Disclosure as={"nav"} className={"bg-slate-100"}>
                {({ open }) => (
                    <>
                        <div className={"max-w-7xl mx-auto px-4"}>
                            <div className={"relative flex items-center justify-between h-16"}>
                                <MenuToggle open={open}/>
                                {/*  title element  */}
                                <div
                                    className={"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"}>
                                    <div className={"flex-shrink-0 flex items-center"}>
                                        <samp>bjornp.com</samp>
                                    </div>
                                    {/*  navbar buttons  */}
                                    <div className={"hidden sm:block sm:ml-6"}>
                                        <div className={"flex space-x-4"}>
                                            {
                                                navigation.map((item) => (
                                                    <MenuItem name={item.name} href={item.href}
                                                              active={item.name === active}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <div className={"ml-3 relative"}>
                                        <ContactDropdown/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className={"sm:hidden"}>
                            <div className={"px-4 pt-2 pb-4 space-y-1"}>
                                {
                                    navigation.map((item) => (
                                        <MenuItem name={item.name} href={item.href} active={item.name === active}/>
                                    ))
                                }
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}

function MenuToggle({ open }: MenuToggleProps) {
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

function MenuItem({ name, href, active }: MenuItemProps) {
    return (
        <Link to={href}
              className={"px-3 py-2 rounded-md text-sm font-medium" + (active ? " bg-slate-200" : "")}>
            {name}</Link>
    );
}

function ContactDropdown() {
    let [ referenceElement, setReferenceElement ] = useState()
    let [ popperElement, setPopperElement ] = useState()
    let { styles, attributes } = usePopper(referenceElement, popperElement)

    return (
        <Popover>
            <Popover.Button ref={(ref: any) => setReferenceElement(ref)}
                            className={"px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200"}>
                Contact me <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                <path fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"/>
            </svg>
            </Popover.Button>
            <Popover.Panel
                ref={(ref: any) => setPopperElement(ref)}
                style={styles.popper}
                {...attributes.popper}
            >
                <div className={"bg-white border border-slate-300 shadow rounded-md divide-y"}>
                    {/* eslint-disable-next-line no-script-url */}
                    <a href={"javascript:window.location.href=atob('bWFpbHRvOmJqb3JuLnBpam5hY2tlckBnbWFpbC5jb20=')"}
                       target={"_blank"}
                       className={"block px-8 py-4 text-sm text-gray-700 hover:bg-slate-100"}>
                        Email
                    </a>
                    <a href={"https://github.com/bjornpijnacker"} target={"_blank"}
                       className={"block px-8 py-4 text-sm text-gray-700 hover:bg-slate-100"}>
                        GitHub
                    </a>
                    <a href={"https://twitter.com/BPijnacker"} target={"_blank"}
                       className={"block px-8 py-4 text-sm text-gray-700 hover:bg-slate-100"}>
                        Twitter
                    </a>
                    <a href={"https://www.instagram.com/bjornpijnacker/"} target={"_blank"}
                       className={"block px-8 py-4 text-sm text-gray-700 hover:bg-slate-100"}>
                        Instagram
                    </a>
                </div>
            </Popover.Panel>
        </Popover>
    )
}