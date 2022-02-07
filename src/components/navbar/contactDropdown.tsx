import React, { useState } from "react";
import { usePopper } from "react-popper";
import { Popover, Portal, Transition } from "@headlessui/react";
import { SocialIcon } from 'react-social-icons';

export default function ContactDropdown() {
    const popperElRef = React.useRef(null);
    const [ targetElement, setTargetElement ] = useState()
    const [ popperElement, setPopperElement ] = useState()
    const { styles, attributes } = usePopper(targetElement, popperElement, {
        placement: "bottom",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0,8]
                }
            }
        ]
    })

    return (
        <Popover>
            <Popover.Button ref={(ref: any) => setTargetElement(ref)}
                            className={"px-3 py-2 rounded-lg text-sm font-medium hover:bg-indigo-100"}>
                Contact me <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                <path fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"/>
            </svg>
            </Popover.Button>
            <Portal>
                <div ref={popperElRef}
                     style={styles.popper}
                     {...attributes.popper}
                >
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        // @ts-ignore
                        beforeEnter={() => setPopperElement(popperElRef.current)}
                        // @ts-ignore
                        afterLeave={() => setPopperElement(null)}
                    >
                        <Popover.Panel>
                            <div className={"bg-white border border-slate-300 shadow rounded-xl divide-y"}>
                                {/* eslint-disable-next-line no-script-url */}
                                <a href={"javascript:window.location.href=atob('bWFpbHRvOmJqb3JuLnBpam5hY2tlckBnbWFpbC5jb20=')"}
                                   target={"_blank"}
                                   className={"block pl-7 pr-8 py-4 text-sm text-gray-700 hover:bg-slate-100"}>
                                    <SocialIcon network={"email"} className={"w-8 h-8 mr-3"}/> Email
                                </a>
                                <a href={"https://github.com/bjornpijnacker"} target={"_blank"}
                                   className={"block pl-7 pr-8 py-4 text-sm text-gray-700 hover:bg-slate-100"}>
                                    <SocialIcon network={"github"} className={"w-8 h-8 mr-3"}/> GitHub
                                </a>
                                <a href={"https://twitter.com/BPijnacker"} target={"_blank"}
                                   className={"block pl-7 pr-8 py-4 text-sm text-gray-700 hover:bg-slate-100"}>
                                    <SocialIcon network={"twitter"} className={"w-8 h-8 mr-3"}/> Twitter
                                </a>
                                <a href={"https://www.instagram.com/bjornpijnacker/"} target={"_blank"}
                                   className={"block pl-7 pr-8 py-4 text-sm text-gray-700 hover:bg-slate-100"}>
                                    <SocialIcon network={"instagram"} className={"w-8 h-8 mr-3"}/> Instagram
                                </a>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </div>
            </Portal>
        </Popover>
    )
}