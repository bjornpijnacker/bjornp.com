import React from "react";

interface SummaryProps {
    href: string,
    code: string,
    title: string
}

export default function Summary({ href, code, title }: SummaryProps) {
    return (
        <a href={href}>
            <div
                className={"w-full mt-4 px-4 py-2 bg-white shadow rounded-lg hover:text-black hover:bg-indigo-50 text-slate-800"}>
                <samp>{code}</samp> &mdash; {title}
            </div>
        </a>
    )
}