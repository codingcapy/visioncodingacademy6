
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Header component for Vision Coding Academy
 */

import $ from 'jquery';
import { NavLink } from "react-router-dom"
import visionCodingIcon from "/yellow1.png"

export default function Header() {

    const $mainNav = $('#main-nav');
    const $mainNav2 = $('.main-nav');
    console.log($mainNav)
    console.log($mainNav2)
    $mainNav.hide();

    if (window.innerWidth > 700) {
        $mainNav.show();
    }

    function slideToggle() {
        $mainNav.slideToggle();
    }

    return (
        <header className="md:flex justify-between bg-black text-white sticky z-50 top-0">
            <div className="flex justify-between md:block px-2">
                <div className="flex"><img src={visionCodingIcon} className="w-[60px]" />
                    <NavLink to="/">
                        <div className="nav-element hidden md:block py-5 text-2xl">Vision Coding Academy</div>
                    </NavLink>
                    <NavLink to="/"><div className="md:hidden py-5 text-lg">Vision Coding</div></NavLink>
                </div>
                <button id="hamburger-menu" className="text-3xl md:hidden" onClick={slideToggle}>&#x2630;</button>
            </div>
            <nav id="main-nav">
                <ul className="md:flex">
                    <li
                        className="px-5 py-2 md:py-5 text-center rounded-md transition ease-in-out duration-300  md:hidden">
                        <NavLink to="/" onClick={() => { $mainNav.slideUp() }}>Home</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/about" onClick={() => { $mainNav.slideUp() }}>About</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/courses" onClick={() => { $mainNav.slideUp() }}>Courses</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/gallery" onClick={() => { $mainNav.slideUp() }}>Gallery</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/contact" onClick={() => { $mainNav.slideUp() }}>Contact</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/login" onClick={() => { $mainNav.slideUp() }}>Login</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/signup" onClick={() => { $mainNav.slideUp() }}>Signup</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex">
                <NavLink to="/login"
                    className="nav-element hidden px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                    Login
                </NavLink>
                <NavLink to="/signup"
                    className="nav-element hidden px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                    Signup
                </NavLink>
            </div>
        </header>
    )
}