
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Footer component for Vision Coding Academy
 */

import { NavLink } from "react-router-dom"
import visionCodingIcon from "/vision-coding-icon.jpg"

export default function Footer() {

    return (
        <footer className="px-5 py-10 md:py-20 max-w-[1000px] mx-auto">
            <div className="py-10 md:grid md:grid-cols-4">
                <div>
                    <img src={visionCodingIcon} className="" />
                    <NavLink to="/">
                        <div className="nav-element py-2 text-2xl">Vision Coding Academy</div>
                    </NavLink>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-2xl md:text-4xl pb-5">Menu</h3>
                    <NavLink to="/" className="nav-element py-2 md:text-lg">Home</NavLink>
                    <NavLink to="/courses" className="nav-element py-2 md:text-lg">Courses</NavLink>
                    <NavLink to="/about" className="nav-element py-2 md:text-lg">About Us</NavLink>
                    <NavLink to="/contact" className="nav-element py-2 md:text-lg">Contact</NavLink>
                </div>
                <div>
                    <h3 className="text-2xl md:text-4xl pb-5">Contact Us</h3>
                    <p className="py-2 md:text-lg">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                    <p className="py-2 md:text-lg">2428 Haywood Ave, West Vancouver, BC V7V 1Y1</p>
                    <p className="py-2 md:text-lg">+1 604-900-3707</p>
                    <p className="py-2 md:text-lg">visioncodingca@gmail.com</p>
                </div>
                <div className="md:pl-32">
                    <h3 className="text-2xl md:text-4xl pb-5">Socials</h3>
                    <p className="py-2 md:text-lg">Instagram</p>
                    <p className="py-2 md:text-lg">Facebook</p>
                    <p className="py-2 md:text-lg">Kakaotalk</p>
                    <p className="py-2 md:text-lg">WhatsApp</p>
                </div>
            </div>
            <div className="text-center pt-5">
                &copy; 2024 by Vision Coding Academy.
            </div>
        </footer>
    )
}