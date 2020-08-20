import React from "react";
import Link from "react-router-dom/modules/Link";

export const Header = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/">Categories</Link>
            <Link to="/">Admin</Link>
        </header>
    )
};