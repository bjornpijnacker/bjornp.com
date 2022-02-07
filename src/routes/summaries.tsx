import "../global.css";
import React, { Fragment } from 'react';
import Navbar from '../components/navbar/navbar';
import { Disclosure, Tab } from '@headlessui/react';
import { ChevronDownIcon } from "@heroicons/react/solid";

import YearTab from "../components/summaries/yeartab";
import Summary from "../components/summaries/summary";
import SummaryDisclosure from "../components/summaries/summaryDisclosure";

export default function Summaries() {
    return (
        <>
            <Navbar active={"Summaries"}/>
            <main className={"leading-relaxed"}>
                <div className={"container max-w-5xl mx-auto p-4 my-4"}>
                    <div className={"text-justify mx-auto space-y-4 mb-8"}>
                        <p className={"text-center text-4xl"}>Summaries</p>
                        <p>Below is a list of summaries I have written for you to enjoy. In case of questions, issues,
                            or feedback, feel free to contact me!</p>
                        <p>All these summaries were based on the courses given at the University of Groningen in the BSc
                            Computing Science. For more information about the courses, please see <a
                                className="underline text-slate-800 hover:text-black" rel="noreferrer" target="_blank"
                                href="https://www.rug.nl/ocasys/fwn/vak/showpos?opleiding=3256">the course catalog</a>.
                            Be sure to select the correct year in the top-right, if applicable.</p>
                        <p>Note that some older summaries might be removed, since they may have mistakes. If any are
                            found I would rather not mislead people.</p>
                    </div>

                    <Tab.Group>
                        <Tab.List className={"w-full p-1 flex space-x-4 bg-slate-100 rounded-xl mb-4 shadow"}>
                            <YearTab title={"2021 \u2014 2022"}/>
                            <YearTab title={"2020 \u2014 2021"}/>
                            <YearTab title={"2019 \u2014 2020"}/>
                        </Tab.List>
                        <Tab.Panel>
                            <div className={"p-8 pt-4 bg-slate-100 rounded-xl shadow leading-loose"}>
                                <SummaryDisclosure title={"Semester Ia"}>
                                    <Summary href={"assets/summaries/2122/information-security_WBCS004.pdf"}
                                             code={"WBCS004"} title={"Information Security"}/>
                                    <Summary
                                        href={"assets/summaries/2122/introduction-to-machine-learning_WBCS032.pdf"}
                                        code={"WBCS032"} title={"Introduction to Machine Learning"}/>
                                    <Summary
                                        href={"assets/summaries/2122/network-centric-systems_WBCS031.pdf"}
                                        code={"WBCS031"} title={"Network Centric Systems"}/>
                                </SummaryDisclosure>
                                <SummaryDisclosure title={"Semester Ib"}>
                                    <Summary
                                        href={"assets/summaries/2122/compiler-construction_WBCS039.pdf"}
                                        code={"WBCS039"} title={"Compiler Construction"}/>
                                </SummaryDisclosure>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className={"p-8 pt-4 bg-slate-100 rounded-xl shadow leading-loose"}>
                                <SummaryDisclosure title={"Semester Ib"}>
                                    <Summary href={"assets/summaries/2021/signals-and-systems_WBAI016.pdf"}
                                             code={"WBAI016"} title={"Signals and Systems"}/>
                                </SummaryDisclosure>
                                <SummaryDisclosure title={"Semester IIb"}>
                                    <Summary
                                        href={"assets/summaries/2021/advanced-algorithms-and-datastructures_WBCS009.pdf"}
                                        code={"WBCS009"} title={"Advanced Algorithms and Datastructures"}/>
                                </SummaryDisclosure>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className={"p-8 pt-4 bg-slate-100 rounded-xl shadow leading-loose"}>
                                <SummaryDisclosure title={"Semester Ib"}>
                                    <Summary href={"assets/summaries/1920/discrete-structures_INBDS-08.pdf"}
                                             code={"INBDS-08"} title={"Discrete Structures"}/>
                                </SummaryDisclosure>
                                <SummaryDisclosure title={"Semester IIb"}>
                                    <Summary
                                        href={"assets/summaries/1920/algorithms-and-datastructures-in-C_INBADC-09.pdf"}
                                        code={"INADC-09"} title={"Algorithms and Datastructures in C"}/>
                                    <Summary
                                        href={"assets/summaries/1920/introduction-to-information-systems_INBIIS-08.pdf"}
                                        code={"INBIIS"} title={"Introduction to Information Systems"}/>
                                </SummaryDisclosure>
                            </div>
                        </Tab.Panel>
                    </Tab.Group>
                </div>
            </main>
        </>
    )
};





