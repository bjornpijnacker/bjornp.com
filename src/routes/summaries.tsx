import "../global.css";
import React from 'react';
import Navbar from '../components/navbar';

export default function Summaries() {
    return (
        <>
            <Navbar active={"Summaries"}/>
            <main className={"leading-relaxed"}>
                <div className={"container mx-auto py-4 my-4"}>
                    <div className={"text-justify mx-auto space-y-4"}>
                        <p className={"text-center text-4xl"}>Summaries</p>
                        <p>Below is a list of summaries I have written for you to enjoy. In case of questions, issues, or feedback, feel free to contact me!</p>
                        <p>All these summaries were based on the courses given at the University of Groningen in the BSc Computing Science. For more information about the courses, please see <a className="underline text-slate-800 hover:text-black" rel="noreferrer" target="_blank" href="https://www.rug.nl/ocasys/fwn/vak/showpos?opleiding=3256">the course catalog</a>. Be sure to select the correct year in the top-right, if applicable.</p>
                        <p>Note that some older summaries might be removed, since they may have mistakes. If any are found I would rather not mislead people.</p>
                    </div>

                    <div className="mx-auto flex flex-wrap justify-between mt-4 leading-loose">
                        <div className="p-4">
                            <p className="text-3xl text-center mb-4">2021 &ndash; 2022</p>
                            <p className="text-2xl">Semester Ia</p>
                            <ul className="list-disc list-inside">
                                <li><a className="underline text-slate-800 hover:text-black"
                                       href="assets/summaries/2122/information-security_WBCS004.pdf"><samp>WBCS004</samp> &mdash; Information
                                    Security</a></li>
                                <li><a className="underline text-slate-800 hover:text-black"
                                       href="assets/summaries/2122/introduction-to-machine-learning_WBCS032.pdf"><samp>WBCS032</samp> &mdash; Introduction
                                    to Machine Learning</a></li>
                                <li><a className="underline text-slate-800 hover:text-black"
                                       href="assets/summaries/2122/network-centric-systems_WBCS031.pdf"><samp>WBCS031</samp> &mdash; Network
                                    Centric Systems</a></li>
                            </ul>

                            <p className="text-2xl">Semester Ib</p>
                            <ul className="list-disc list-inside">
                                <li><a className="underline text-slate-800 hover:text-black"
                                       href="assets/summaries/2122/compiler-construction_WBCS039.pdf"><samp>WBCS039</samp> &mdash; Compiler
                                    Construction</a></li>
                            </ul>
                        </div>

                        <div className="p-4">
                            <p className="text-3xl text-center mb-4">2020 &ndash; 2021</p>
                            <p className="text-2xl">Semester Ib</p>
                            <ul className="list-disc list-inside">
                                <li><a className="underline text-slate-800 hover:text-black"
                                       href="assets/summaries/2021/signals-and-systems_WBAI016.pdf"><samp>WBAI016</samp> &mdash; Signals
                                    and Systems</a></li>
                            </ul>

                            <p className="text-2xl">Semester IIb</p>
                            <ul className="list-disc list-inside">
                                <li><a className="underline text-slate-800 hover:text-black"
                                       href="assets/summaries/2021/advanced-algorithms-and-datastructures_WBCS009.pdf"><samp>WBCS009</samp> &mdash; Advanced
                                    Algorithms and Datastructures</a></li>
                            </ul>
                        </div>

                        <div className="p-4">
                            <p className="text-3xl text-center mb-4">2019 &ndash; 2020</p>
                            <p className="text-2xl">Semester Ib</p>
                            <ul className="list-disc list-inside">
                                <li><a className="underline text-slate-800 hover:text-black"
                                       href="assets/summaries/1920/discrete-structures_INBDS-08.pdf"><samp>INBDS</samp> &mdash; Discrete
                                    Structures</a></li>
                            </ul>

                            <p className="text-2xl">Semester IIb</p>
                            <ul className="list-disc list-inside">
                                <li><a className="underline text-slate-800 hover:text-black"
                                       href="assets/summaries/1920/algorithms-and-datastructures-in-C_INBADC-09.pdf"><samp>INADC-09</samp> &mdash; Algorithms
                                    and Datastructures in C</a></li>
                                <li><a className="underline text-slate-800 hover:text-black"
                                       href="assets/summaries/1920/introduction-to-information-systems_INBIIS-08.pdf"><samp>INBIIS</samp> &mdash; Introduction
                                    to Information Systems</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}