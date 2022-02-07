import React, { useState } from "react";
import { usePopper } from "react-popper";
import { Popover } from "@headlessui/react";

export default function ContactDropdown() {
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