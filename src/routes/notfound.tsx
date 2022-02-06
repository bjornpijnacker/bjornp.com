import "../global.css";
import React from 'react';
import Navbar from '../components/navbar';

export default function NotFound() {
    return (
        <>
            <Navbar active={""}/>
            <main className={"leading-relaxed"}>
                <div className={"container mx-auto py-4 my-4"}>
                    <div className={"text-center w-full"}>
                        <p className={"text-slate-500"}>This page was not found... Sorry!</p>
                    </div>
                </div>
            </main>
        </>
    )
}
