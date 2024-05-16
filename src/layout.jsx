
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Layout for Vision Coding Academy
 */

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollToTop } from "../ScrollToTop";

export default function Layout() {

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}