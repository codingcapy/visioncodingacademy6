
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Courses page for Vision Coding Academy
 */

import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import noIcon from "/lightbulb-black.jpg"
import visionCodingIcon from "/yellow1.png"
import icon1 from "/icon1application.png"
import icon2 from "/icon2binary-code.png"
import icon3 from "/icon3idea.png"
import icon4 from "/icon4hammer.png"
import icon5 from "/icon5astronaut.png"
import icon6 from "/icon6app-settings.png"
import icon7 from "/icon7python.png"
import icon8 from "/icon8settings.png"
import icon9 from "/icon9creative.png"
import icon10 from "/icon10logo.png"
import icon11 from "/icon11graduation-hat.png"
import icon12 from "/icon2binary-code.png"


export default function CoursesPage() {

    $(function () {
        window.sr = ScrollReveal();
        if ($(window).width() < 768) {
            if ($('.timeline-content').hasClass('js--fadeInLeft')) {
                $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
            }
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        }
        else {
            sr.reveal('.js--fadeInLeft', {
                origin: 'left',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInBottom', {
                origin: 'bottom',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
            sr.reveal('.js--fadeInTop', {
                origin: 'top',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        }
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    });

    return (
        <main class="flex-1 mx-auto">
            <div class="bg-black text-white flex flex-col">
                <section class="max-w-[1000px] mx-auto py-10">
                    <h3 class="pl-2 text-5xl md:text-6xl py-10 pb-5 text-center">Vision Coding Courses</h3>
                    <img src={visionCodingIcon} alt="vision coding icon" class="mx-auto w-[100px]"/>
                    <p class="timeline-content js--fadeInLeft text-center md:text-lg">Each course is crafted for
                        hands-on, practical learning,</p>
                    <p class="timeline-content js--fadeInLeft text-center md:text-lg">guided by our team of industry
                        experts.</p>
                </section>
                <section class="py-10 md:grid md:grid-cols-4 md:pl-20">
                    <div class="timeline-content js--fadeInRight md:px-5 py-2">
                        <a href="./entry1.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">ENTRY</div>
                                <div class="text-xl font-bold">[G1-G3]</div>
                                <img src={icon1} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./advanced1.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">ADVANCED</div>
                                <div class="text-xl font-bold">[G1-G3]</div>
                                <img src={icon2} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./entry4.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">ENTRY</div>
                                <div class="text-xl font-bold">[G4-G10]</div>
                                <img src={icon3} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./comingsoon.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">INTERMEDIATE</div>
                                <div class="text-xl font-bold">[G4-G10]</div>
                                <img src={icon4} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./comingsoon.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">ADVANCED</div>
                                <div class="text-xl font-bold">[G1-G3]</div>
                                <img src={icon5} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./comingsoon.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">MOBILE APP DEVELOPMENT</div>
                                <img src={icon6} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./comingsoon.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-16 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">BEGINNER PYTHON</div>
                                <img src={icon7} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./comingsoon.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">EXTRA</div>
                                <div class="text-xl font-bold">CURRICULUMS</div>
                                <img src={icon8} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./comingsoon.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">Beginner</div>
                                <div class="text-xl font-bold">Artificial Intelligence</div>
                                <img src={icon9} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./comingsoon.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">AWS Cloud</div>
                                <div class="text-xl font-bold">Certification</div>
                                <img src={icon10} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./comingsoon.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">COLLEGE</div>
                                <div class="text-xl font-bold">Computer Science</div>
                                <img src={icon11} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                    <div class="timeline-content js--fadeInRight px-2 py-2">
                        <a href="./comingsoon.html">
                            <div
                                class="w-[250px] text-center border-2 rounded-full py-12 mb-5 mx-auto hover:transform hover:scale-110 hover:bg-yellow-100 text-yellow-100 hover:text-black transition-all ease duration-300">
                                <div class="text-xl font-bold">ROBLOX</div>
                                <div class="text-xl font-bold">Game Development</div>
                                <img src={icon12} alt="course1" class="w-[100px] mx-auto"/>
                            </div>
                            <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                        </a>
                    </div>
                </section>
                <section class="py-10 border-b">
                    <h2 class="glow text-2xl md:text-6xl text-center py-10">Code with us</h2>
                    <div class="max-w-[1000px] mx-auto md:grid md:grid-cols-2 px-2">
                        <div class="flex md:py-7">
                            <LuMapPin size={25} />
                            <p class="text-lg pl-2">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                        </div>
                        <div class="flex py-7">
                            <LuMapPin size={25} />
                            <p class="text-lg pl-2">2428 Haywood Ave, West Vancouver, BC V7V 1Y1</p>
                        </div>
                        <div class="flex md:py-7">
                            <FaInstagram size={25} />
                            <p class="text-lg pl-2">vision.coding</p>
                        </div>
                        <div class="flex py-7">
                            <FaPhoneAlt size={25} />
                            <p class=" text-lg pl-2">+1 604-900-3707</p>
                        </div>
                        <div class="flex md:py-7">
                            <RiKakaoTalkFill size={25} />
                            <p class="text-lg pl-2">@visioncodingcqt</p>
                        </div>
                        <div class="flex py-7">
                            <TfiEmail size={25} />
                            <p class="text-lg pl-2">visioncodingca@gmail.com</p>
                        </div>
                        <div class="flex md:py-7">
                            <FaWhatsapp size={25} />
                            <p class="text-lg pl-2">6049003707</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}