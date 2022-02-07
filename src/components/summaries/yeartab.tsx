import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";

interface YearTabProps {
    title: string
}

export default function YearTab({ title }: YearTabProps) {
    return (
        <Tab as={Fragment}>{({ selected }) => (
            <button
                className={"w-full py-2 font-medium rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60" + (selected ? " bg-indigo-500 text-white" : "")}>{title}</button>
        )}</Tab>
    )
}