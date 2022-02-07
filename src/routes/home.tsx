import "../global.css";
import React from 'react';
import Navbar from '../components/navbar/navbar';

export default function Home() {
    return (
        <>
            <Navbar active={"Home"}/>
            <main className={"leading-relaxed"}>
                <div className={"container mx-auto py-4 my-4"}>
                    <div className={"text-center w-full"}>
                        <img src={"assets/me.jpg"} className={"w-1/4 rounded-full border border-slate-300 mx-auto p-1 my-4 shadow"}
                             alt={"Bjorn Pijnacker"}/>
                        <p className={"text-4xl font-bold"}>Bjorn Pijnacker</p>
                        <p className={"text-slate-500"}>Computing Science student at the University of Groningen</p>
                    </div>
                </div>
            </main>
        </>
    )
}