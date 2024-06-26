
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Contact page for Vision Coding Academy
 */

import { useEffect } from 'react';
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {

    useEffect(() => {
        document.title = 'Contact | Vision Coding';
    }, []);

    return (
        <>
            <section className="about">
                <h1 className="">
                    <span className="text-5xl md:text-9xl">Code With Us</span>
                </h1>
                <p className="text-2xl pt-5">Coding isn't just for computers,</p>
                <p className="text-2xl pt-5">it's the language of the <span className="text-teal-300 font-bold">future</span> ,
                    and your fluency begins <span className="text-teal-300 font-bold">now!</span></p>
                <p className="text-2xl pt-5">English / 한국어</p>
            </section>
            <main className="flex-1 mx-auto">
                <div className="bg-black text-white flex flex-col">
                    <section className="py-10 border-b">
                        <h2 className="text-2xl md:text-4xl text-center py-5 text-teal-300">Contact Info</h2>
                        <div className="max-w-[1000px] mx-auto md:grid md:grid-cols-2 px-2">
                            <div className="flex md:py-7">
                                <LuMapPin size={25} />
                                <p className="text-lg pl-2">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                            </div>
                            <div className="flex py-7">
                                <LuMapPin size={25} />
                                <p className="text-lg pl-2">2428 Haywood Ave, West Vancouver, BC V7V 1Y1</p>
                            </div>
                            <div className="flex md:py-7">
                                <FaInstagram size={25} />
                                <p className="text-lg pl-2">vision.coding</p>
                            </div>
                            <div className="flex py-7">
                                <FaPhoneAlt size={25} />
                                <p className=" text-lg pl-2">+1 604-900-3707</p>
                            </div>
                            <div className="flex md:py-7">
                                <RiKakaoTalkFill size={25} />
                                <p className="text-lg pl-2">@visioncodingcqt</p>
                            </div>
                            <div className="flex py-7">
                                <TfiEmail size={25} />
                                <p className="text-lg pl-2">visioncodingca@gmail.com</p>
                            </div>
                            <div className="flex md:py-7">
                                <FaWhatsapp size={25} />
                                <p className="text-lg pl-2">6049003707</p>
                            </div>
                        </div>
                    </section>
                    <section className="mx-auto">
                        <form action="#" className="flex flex-col mx-auto">
                            <h1 className="text-center text-4xl">Questions?</h1>
                            <div className="flex flex-col">
                                <label htmlFor="title">First Name</label>
                                <input type="text" name='title' id='title' placeholder="First Name" required
                                    className="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="content">Last Name</label>
                                <input type="text" name='content' id='content' placeholder='Last Name' required rows="10"
                                    cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="content">Contact</label>
                                <input type="text" name='content' id='content' placeholder='Email or Phone #' required
                                    rows="10" cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="content">Message</label>
                                <input type="text" name='content' id='content' placeholder='Message' required rows="10"
                                    cols="40" className="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                            </div>
                            <button className="rounded-xl my-5 py-2 px-2 bg-slate-700 text-white mx-auto">Submit</button>
                        </form>
                    </section>
                    <section className="md:flex mx-auto py-10 w-[100%]">
                        <div className="mx-2 w-[100%]">
                            <h1 className="text-2xl py-2">Coquitlam Location</h1>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.918591896756!2d-122.80519882320316!3d49.27793977108967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678cc852829e7%3A0x417feb8745527bef!2s2885%20Barnet%20Hwy%2C%20Coquitlam%2C%20BC%20V3B%201C1!5e0!3m2!1sen!2sca!4v1715144121249!5m2!1sen!2sca"
                                width="300" height="450" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>

                        </div>
                        <div className="mx-2 py-10 md:py-0 w-[100%]">
                            <h1 className="text-2xl py-2">West Vancouver Location</h1>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83196.59938726886!2d-123.33264520273437!3d49.33523070000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866f5e357e6601%3A0xfe3a1182e56f9edb!2sVision%20Coding%20Academy!5e0!3m2!1sen!2sca!4v1715361821515!5m2!1sen!2sca"
                                width="300" height="450" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}