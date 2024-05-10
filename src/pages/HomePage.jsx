
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Home page for Vision Coding Academy
 */

import $ from 'jquery';
import { NavLink } from "react-router-dom"
import ScrollReveal from 'scrollreveal'
import jayImg from "/jay.jpg"
import codingClass from "/coding-class1.jpg"
import techIcon from "/icon1.jpg"
import jayImg2 from "/jay2.jpg"
import danny from "/danny.jpg"
import noIcon from "/noicon.jpg"

export default function HomePage() {

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
        <main className="flex-1 mx-auto">
            <section className="hero-banner">
                <h1 className="timeline-content js--fadeInBottom">
                    <span className="glow text-5xl md:text-9xl">Code Your</span>
                    <span className="glow-teal pl-2 text-5xl md:text-9xl text-teal-300">Vision</span>
                </h1>
                <p className="text-2xl pt-5">Discover the Power to Transform the Future</p>
                <p className="text-2xl pb-5">with Every Line of Code</p>
                <button
                    className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">Vision
                    Coding
                    Courses</button>
            </section>
            <section className="intro py-20 md:py-32">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="timeline-content js--fadeInBottom text-2xl md:text-4xl pb-4 text-teal-300">Who we are
                    </h2>
                    <p className="timeline-content js--fadeInBottom pb-2 md:text-lg md:py-5">Welcome to Vision Coding
                        Academy,
                        where we fuel young minds with a passion for
                        coding
                        and
                        innovation. Our vibrant team of IT educators in Vancouver creates a dynamic learning environment
                        for students in Grades 1-12.</p>
                    <p className="timeline-content js--fadeInBottom py-2 md:text-lg md:py-10">We don't just teach coding; we
                        open doors to creativity and future
                        possibilities. Our
                        curriculum
                        is designed to be engaging, accessible, and tailored to each student's journey, from beginners
                        to advanced student. We aim to build the tech leaders of tomorrow through problem-solving,
                        critical thinking, and teamwork. Discover the joy of coding and the power of imagination with
                        us!</p>
                    <img src={codingClass} alt="Coding Class"
                        className="timeline-content js--fadeInBottom md:max-w-[400px] rounded-xl border-white border-4 float-left md:mr-5" />
                    <h3 className="timeline-content js--fadeInRight text-2xl pl-4 text-teal-300">Our Vision</h3>
                    <p className="timeline-content js--fadeInRight">To forge a future where our students become the leaders
                        of
                        technology, driving innovation and
                        creativity in the digital age.</p>
                    <h3 className="timeline-content js--fadeInRight text-2xl text-teal-300 py-5">Our Mission</h3>
                    <p className="timeline-content js--fadeInRight">Ignite a passion for technology in young minds and to
                        equip
                        them with the skills they need to
                        turn their most ambitious dreams into reality.</p>
                </div>
            </section>
            <div className="bg-black text-white flex flex-col">
                <section className="md:flex py-10 md:py-32">
                    <div className="ad1 px-2 md:px-20 md:py-20 md:h-96">
                        <h2 className="text-2xl md:text-4xl md:text-center">Industry Expertise in Every Classroom</h2>
                        <p className="md:text-center md:text-lg">Our strength is our diverse team of IT industry experts
                            from
                            various sectors. They bring a wealth
                            of real-world tech experience to our classrooms, ensuring that our students don't just learn
                            coding as a subject, but as a practical, applied skill relevant to today’s tech industry.
                        </p>
                    </div>
                    <div className="ad2 px-2 md:px-20 md:py-20 ">
                        <h2 className="text-2xl md:text-4xl md:text-center">Practical, Hands-On Curriculum</h2>
                        <p className="md:text-center md:text-lg">Our curriculum is specially handcrafted for practicality.
                            Every
                            lesson is designed for active,
                            hands-on learning, ensuring students don't just understand coding concepts but can apply
                            them
                            creatively in real-world scenarios.</p>
                    </div>
                    <div className="ad3 px-2 md:px-20 md:py-20 ">
                        <h2 className="text-2xl md:text-4xl md:text-center z-1">From Learning to Application</h2>
                        <p className="md:text-center md:text-lg">We bridge the gap between theory and practice. Our approach
                            involves project-based learning and
                            real-world case studies, preparing students to confidently tackle real tech challenges.</p>
                    </div>
                </section>
                <section className="py-10 max-w-[1000px] mx-auto">
                    <div className="py-5">
                        <h2 className="text-2xl md:text-4xl text-center py-5">Choose the Class That Fits You Best</h2>
                        <p className="text-center md:text-lg">Every course designed by IT professionals in Canada</p>
                    </div>
                    <div
                        className="border-2 py-5 px-5 my-5 hover:transform hover:scale-110 transition-all ease duration-300">
                        <h3 className="text-2xl">Advanced</h3>
                        <img src={techIcon} alt="tech-icon" className="md:float-left" />
                        <h2 className="text-2xl md:text-4xl text-teal-300">3 Month</h2>
                        <h3 className="md:text-lg">Intensive bootcamp course</h3>
                        <p className="md:text-lg">Elevate your knowledge through hands-on projects; app development and
                            creating
                            SAAS (Software as
                            a Service). Ideal for advanced students seeking to apply their coding skills in practical,
                            and
                            project-based environments.</p>
                    </div>
                    <div
                        className="border-2 py-5 px-5 my-5 hover:transform hover:scale-110 transition-all ease duration-300">
                        <h2 className="text-2xl">Beginner</h2>
                        <img src={techIcon} alt="tech-icon" className="md:float-right" />
                        <h2 className="text-2xl md:text-4xl text-teal-300">6 Month</h2>
                        <h3 className="md:text-lg">Learn the basics of Computer</h3>
                        <p className="md:text-lg">Learn the essentials of computer including hardware, software, internet,
                            programming languages,
                            and web design. It provides a comprehensive introduction to the digital world around us.</p>
                    </div>
                    <div
                        className="border-2 py-5 px-5 my-5 hover:transform hover:scale-110 transition-all ease duration-300">
                        <h2 className="text-2xl">Intermediate</h2>
                        <img src={techIcon} alt="tech-icon" className="md:float-left" />
                        <h2 className="text-2xl md:text-4xl text-teal-300">1 Year</h2>
                        <h3 className="md:text-lg">Deep dive into coding and AI</h3>
                        <p className="md:text-lg">Dive into the exciting world of computer science, exploring automation and
                            the
                            latest AI trends
                            such as image recognition, cloud services, and robotics. Suitable for beginners and
                            intermediate
                            learners eager to explore diverse aspects of technology.</p>
                    </div>
                    <div
                        className="border-2 py-5 px-5 my-5 hover:transform hover:scale-110 transition-all ease duration-300">
                        <h2 className="text-2xl">All levels</h2>
                        <img src={techIcon} alt="tech-icon" className="md:float-right" />
                        <h2 className="text-2xl md:text-4xl text-teal-300">Private Tutoring</h2>
                        <h3 className="md:text-lg">Custom tailored tutoring</h3>
                        <p className="md:text-lg">Geared towards students needing support with school projects (CS10, 11,
                            12,
                            and AP CS) or those
                            looking to build a personalized portfolio. This course offers guidance and expertise to help
                            bring your projects to life.</p>
                    </div>
                    <div
                        className="border-2 py-5 px-5 my-5 hover:transform hover:scale-110 transition-all ease duration-300">
                        <h2 className="text-2xl">All levels</h2>
                        <img src={techIcon} alt="tech-icon" className="md:float-left" />
                        <h2 className="text-2xl md:text-4xl text-teal-300">Education Consulting</h2>
                        <h3 className="md:text-lg">University prep and career reinforcement</h3>
                        <p className="md:text-lg">This customized consultation focuses on preparing students for university
                            applications with
                            focuse in Computer Science. It includes guidance on creating a compelling portfolio with
                            multiple GitHub projects and strategies for career advancement in the tech field.</p>
                    </div>
                    <button
                        className="px-3 py-3 my-7 border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">Click
                        for Details</button>
                </section>
                <section className="md:max-w-[1000px] mx-auto py-10">
                    <img src={jayImg} className="w-[250px] md:float-right" />
                    <h2 className="pl-2 text-4xl md:text-6xl py-10">Meet Our Director</h2>
                    <p className="pl-2 md:text-lg">At Vision Coding Academy, I, Jay, blend my tech know-how with educational
                        insights
                        to create a
                        dynamic learning environment. My journey in tech and teaching isn't just about imparting
                        knowledge;
                        it's about igniting a passion for innovation and problem-solving in our students.</p>
                </section>
                <section className="py-10 bg-gray-600 bg-opacity-70 text-yellow-300">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="">
                            <h3 className="pl-2 text-2xl md:text-4xl py-10">Our Approach</h3>
                            <p className="pl-2 md:text-lg">In over six years of teaching, I've learned that the key to
                                engaging
                                students is making
                                complex
                                subjects like coding and science relatable and exciting. As a self-taught DevOps
                                Engineer, I
                                bring
                                real-world tech applications into the classroom, ensuring our lessons are as practical
                                as
                                they
                                are
                                inspiring.</p>
                        </div>
                        <h3 className="pl-2 text-2xl md:text-4xl py-10">Educational Consulting</h3>
                        <p className="pl-2 md:text-lg">My experience in guiding students to top universities has taught me
                            the
                            importance of tailored
                            educational strategies. At Vision Coding Academy, we use these insights to help our students
                            not
                            just learn, but excel and prepare for their future academic and career paths.</p>
                        <h3 className="pl-2 text-2xl md:text-4xl py-10">Philosophy</h3>
                        <p className="pl-2 md:text-lg">We go beyond just coding; we're about nurturing the creators and
                            innovators of
                            tomorrow. Our goal
                            is
                            to equip students with the skills to make a real difference in the world. Our teaching team,
                            including myself, are all professionals from the IT industry. We bring our day-to-day tech
                            experiences into the classroom, offering students insights you can't find in textbooks. This
                            connection to the industry ensures that our teaching stays current and meaningful.</p>
                    </div>
                </section>
                <section className="max-w-[1000px] mx-auto py-10">
                    <h3 className="pl-2 text-2xl md:text-6xl py-10">Our Team</h3>
                    <p className="pl-2 md:text-lg">Meet the driving force behind Vision Coding Academy: a diverse team of IT
                        industry
                        experts
                        specializing in software, hardware, frontend, backend, automation, UI/UX, and web design. Each
                        member brings a unique blend of theoretical knowledge and practical experience, tailored to meet
                        the
                        individual needs and aspirations of our students. It's this wealth of expertise and personalized
                        approach that truly distinguishes Vision Coding Academy from others in the field.</p>
                </section>
                <section className="py-10 md:grid md:grid-cols-5 md:pl-20">
                    <div>
                        <img src={jayImg2} alt="Jay" />
                        <h3 className="pl-2 text-2xl">Jay</h3>
                        <h2 className="pl-2 text-lg">DevOps Engineer</h2>
                    </div>
                    <div>
                        <img src={danny} alt="Jay" />
                        <h3 className="pl-2 text-2xl">Danny</h3>
                        <h2 className="pl-2 text-lg">Branch Manager</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 className="pl-2 text-2xl">Hwanyong</h3>
                        <h2 className="pl-2 text-lg">Backend Engineer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 className="pl-2 text-2xl">
                            Luke</h3>
                        <h2 className="pl-2 text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 className="pl-2 text-2xl">Iktae</h3>
                        <h2 className="pl-2 text-lg">Automation Engineer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 className="pl-2 text-2xl">
                            Sumi</h3>
                        <h2 className="pl-2 text-lg">UX / UI Deisgner</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 className="pl-2 text-2xl">Jee</h3>
                        <h2 className="pl-2 text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 className="text-2xl">Taylor</h3>
                        <h2 className="text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 className="pl-2 text-2xl">JK</h3>
                        <h2 className="pl-2 text-lg">Mentor @ Microsoft</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 className="pl-2 text-2xl">Andy</h3>
                        <h2 className="pl-2 text-lg">Mentor @ AWS amazon</h2>
                    </div>
                </section>
                <section className="py-10">
                    <h2 className="text-2xl md:text-6xl text-center py-10 text-yellow-200">Our Future Goals</h2>
                    <div className="max-w-[1000px] mx-auto">
                        <div className="py-10">
                            <h3 className="pl-2 text-2xl md:text-4xl text-yellow-200">Expansion of our location</h3>
                            <p className="pl-2 md:text-lg">We are expecting new locations in Surrey, UBC, Langley and West
                                Vancouver in
                                2024 and more in
                                forthcoming years. </p>
                        </div>
                        <div className="py-10">
                            <h2 className="pl-2 md:pl-48 text-2xl md:text-4xl text-yellow-200">Expand Educational Reach</h2>
                            <p className="pl-2 md:pl-48 md:text-lg">Broaden our curriculum to include emerging technologies
                                like
                                AI, robotics, and
                                data science,
                                catering
                                to a wider range of interests and career paths.</p>
                        </div>
                        <div className="py-10">
                            <h2 className="pl-2 text-2xl md:text-4xl text-yellow-200">Enhance Online Learning Platforms</h2>
                            <p className="pl-2 md:text-lg">Develop a robust online learning platform to make our courses
                                accessible to
                                students beyond
                                Vancouver, reaching across Canada and potentially globally.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="glow text-2xl md:text-6xl text-center py-10">Code with us</h2>
                    <div className="max-w-[1000px] mx-auto md:grid md:grid-cols-2">
                        <p class="py-10 text-lg">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                        <p class="py-10 text-lg">vision.coding</p>
                        <p class="py-10 text-lg">2428 Haywood Ave, West Vancouver, BC V7V 1Y1</p>
                        <p class="py-10 text-lg">+1 604-900-3707</p>
                        <p class="py-10 text-lg">@visioncodingcqt</p>
                        <p class="py-10 text-lg">visioncodingca@gmail.com</p>
                        <p class="py-10 text-lg">6049003707</p>
                    </div>
                </section>
                <section className="md:flex mx-auto py-10 w-[100%]">
                    <div className="mx-2 w-[100%]">
                        <h1 className="text-2xl py-2">Coquitlam Location</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.918591896756!2d-122.80519882320316!3d49.27793977108967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678cc852829e7%3A0x417feb8745527bef!2s2885%20Barnet%20Hwy%2C%20Coquitlam%2C%20BC%20V3B%201C1!5e0!3m2!1sen!2sca!4v1715144121249!5m2!1sen!2sca"
                            width="300" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" class="map"></iframe>

                    </div>
                    <div className="mx-2 py-10 md:py-0 w-[100%]">
                        <h1 className="text-2xl py-2">West Vancouver Location</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83196.59938726886!2d-123.33264520273437!3d49.33523070000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866f5e357e6601%3A0xfe3a1182e56f9edb!2sVision%20Coding%20Academy!5e0!3m2!1sen!2sca!4v1715361821515!5m2!1sen!2sca"
                            width="300" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" class="map"></iframe>
                    </div>
                </section>
            </div>
        </main>
    )
}