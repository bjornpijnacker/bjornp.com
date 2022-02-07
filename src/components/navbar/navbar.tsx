import '../../global.css';
import React from 'react';
import { Disclosure } from '@headlessui/react'
import MenuToggle from "./menuToggle";
import MenuItem from "./menuItem";
import ContactDropdown from "./contactDropdown";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Summaries', href: '/summaries' },
];

type MenuProps = {
    active: string;
};

export default function Navbar({ active }: MenuProps) {
    return (
        <>
            <Disclosure as={"nav"} className={"bg-indigo-50 shadow"}>
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
