import { Link } from "react-router-dom";
import React from "react";

interface MenuItemProps {
    name: string;
    href: string;
    active: boolean;
}

export default function MenuItem({ name, href, active }: MenuItemProps) {
    return (
        <Link to={href}
              className={"px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-200" + (active ? " hover:bg-indigo-500 bg-indigo-500 text-white" : "")}>
            {name}</Link>
    );
}