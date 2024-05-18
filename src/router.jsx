
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: router for Vision Coding Academy
 */

import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SIgnupPage";
import GalleryPage from "./pages/GalleryPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import SchedulePage from "./pages/SchedulePage";

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/comingsoon" element={<ComingSoonPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
            </Route>
        )
    )
    return router
}