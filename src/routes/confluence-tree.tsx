import "../global.css"
import React from 'react';
import Navbar from '../components/navbar/navbar';
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

let result: string;

function populateConfluenceTree(html: string) {
    let elem = document.createElement('html');
    elem.innerHTML = html;
    const resultElem = document.getElementById("result")
    const resultElemContainer = document.getElementById("resultContainer")
    if (resultElem) {
        result = parseConfluenceTreeHTML(elem.querySelector('li'), 0);
        resultElem.innerText = result;
    }
    if (resultElemContainer)
        resultElemContainer.classList.remove("hidden");
}

function parseConfluenceTreeHTML(elem: any, level: number): string {
    let returnString = "";
    returnString += "\t".repeat(level);
    returnString += elem.querySelector('a').querySelector('span').innerHTML + '\n';
    let ul = elem.querySelector('ul');
    if (ul) {
        let children = ul.children;
        for (let i = 0; i < children.length; ++i) {
            if (children[i].nodeName === 'LI') {
                returnString += parseConfluenceTreeHTML(children[i], level + 1);
            }
        }
    }
    return returnString;
}

export default function ConfluenceTree() {
    return (
        <>
            <Navbar/>
            <main className={"leading-relaxed"}>
                <div className={"container mx-auto py-4 my-4"}>
                    <Explanation/>
                    <div className={"mt-4 bg-slate-100 rounded-xl shadow p-8"}>
                        <form className={"mx-auto"}>
                            <div className={"flex items-center space-x-4"}>
                                <div className={"w-full"}>
                                    <label className={"font-bold tracking-wide block uppercase text-xs mb-2"}>Please
                                        enter Confluence Tree HTML element as explained above</label>
                                    <textarea
                                        className={"w-full block rounded-lg py-3 px-4 mb-4 bg-slate-100 border focus:bg-white"}
                                        rows={10} id={"input-html"}/>
                                </div>
                            </div>
                            <div className={"w-full"}>
                                <button
                                    className={"w-full block rounded-lg py-3 px-4 mb-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-left"}
                                    type={'submit'}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        let elem = document.getElementById("input-html") as HTMLInputElement;
                                        if (elem) populateConfluenceTree(elem.value);
                                    }}>
                                    Submit
                                    {/*<svg className="animate-spin inline invisible ml-3 h-4 w-4 text-white" id={"spinner"}*/}
                                    {/*     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">*/}
                                    {/*    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>*/}
                                    {/*    <path className="opacity-75" fill="currentColor"*/}
                                    {/*          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>*/}
                                    {/*</svg>*/}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={"hidden mt-4 bg-slate-100 rounded-xl shadow p-8"} id={"resultContainer"}>
                        <p className={"font-bold tracking-wide block uppercase text-xs mb-2"}>Result:</p>
                        <pre id={"result"}/>
                    </div>
                </div>
            </main>
        </>
    )
}

function Explanation() {
    return (
        <Disclosure>
            {({ open }) => (
                <div className={"mt-4 bg-slate-100 rounded-xl shadow p-2"}>
                    <Disclosure.Button
                        className={"flex px-4 py-2 text-sm font-medium w-full rounded-lg justify-between"}>
                        <span>Explanation</span>
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
                            <div className={"mx-auto p-6 max-w-4xl"}>
                                <p className={"font-bold tracking-wide block uppercase text-xs mt-4 mb-2"}>Stap 1:</p>
                                <p>
                                    Ga naar <a className={"break-all underline text-slate-800 hover:text-black"}
                                               href={"https://nestorsupport.atlassian.net/wiki/pages/reorderpages.action?key=NESTORSUPP"}>
                                    https://nestorsupport.atlassian.net/wiki/pages/reorderpages.action?key=NESTORSUPP
                                </a>
                                </p>

                                <hr className={"mt-4 mb-4"}/>
                                <p className={"font-bold tracking-wide block uppercase text-xs"}>Stap 2:</p>
                                <p>
                                    Vouw alle child-pagina's uit voor de pagina waarvan je de organisatieboom wil kopieren. Pagina's die niet zichtbaar zijn op jouw scherm worden niet meegenomen in deze converter.</p>

                                <hr className={"mt-4 mb-4"}/>
                                <p className={"font-bold tracking-wide block uppercase text-xs"}>Stap 3:</p>
                                <p>
                                    Open Developer Tools in jouw browser naar keuze. Gebruik dan de element chooser (afbeelding 1) en ga met de muis op het kopje staan waaronder je alles wil exporteren. Zoek dan in de HTML boom naar het &lt;li&gt; element waarbij de gehele gewenste boom wordt geselecteerd wanneer je je muis er overheen houdt (afbeelding 2 en 3).
                                </p>
                                <a href={"assets/confluence-tree.png"} target={"_blank"}>
                                    <img className={"mt-4"} src={"assets/confluence-tree.png"}/>
                                </a>

                                <hr className={"mt-4 mb-4"}/>
                                <p className={"font-bold tracking-wide block uppercase text-xs mt-4"}>Stap 4:</p>
                                Rechtsklik op dit element en selecteer "Copy, Copy Element". Plak dit hieronder.
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </div>
            )}
        </Disclosure>
    )
}
