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
              className={"px-3 py-2 rounded-lg text-sm font-medium" + (active ? " shadow hover:bg-indigo-500 bg-indigo-500 text-white" : " hover:bg-indigo-100")}>
            {name}</Link>
    );
}