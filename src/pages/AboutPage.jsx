
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: About page for Vision Coding Academy
 */

import $ from 'jquery';
import ScrollReveal from 'scrollreveal'
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import visionCodingLetters from "/vision-banner-letters.png"
import jayImg from "/member1_jay4.png"
import dannyImg from "/member2_danny4.png"
import uhdImg from "/member3_uhd3.png"
import lukeImg from "/member4_luke4.png"
import iktaeImg from "/member5_iktae2.png"
import noIcon from "/lightbulb-black.jpg"
import paulImg from "/member7_paul.jpg"
import taylorImg from "/member8_taylor3.png"
import testimonial1 from "/testimonial1.jpg"
import testimonial2 from "/testimonial2.jpg"
import testimonial3 from "/testimonial3.jpg"

export default function AboutPage() {

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

    const images = document.querySelectorAll('.image');

    images.forEach((image, index) => {
        image.addEventListener('click', (index) => {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');

            const fullSizeImage = document.createElement('img');
            fullSizeImage.src = image.src;
            fullSizeImage.classList.add('lightbox-image');
            lightbox.appendChild(fullSizeImage);

            const leftArrow = document.createElement('div');
            leftArrow.classList.add('arrow', 'left-arrow');
            leftArrow.innerHTML = '&lt;';
            lightbox.appendChild(leftArrow);

            const rightArrow = document.createElement('div');
            rightArrow.classList.add('arrow', 'right-arrow');
            rightArrow.innerHTML = '&gt;';
            lightbox.appendChild(rightArrow);

            let currentIndex = index;

            function showImage(index) {
                fullSizeImage.style.opacity = 0; // Fade out
                setTimeout(() => {
                    fullSizeImage.src = images[index].src;
                    fullSizeImage.style.opacity = 1; // Fade in
                }, 300); // Delay to allow fade out transition to complete
            }

            leftArrow.addEventListener('click', (event) => {
                event.stopPropagation();
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });

            rightArrow.addEventListener('click', (event) => {
                event.stopPropagation();
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });

            lightbox.addEventListener('click', (event) => {
                if (event.target === lightbox) {
                    lightbox.classList.add('fade-out');
                    setTimeout(() => {
                        document.body.removeChild(lightbox);
                    }, 500);
                }
            });

            document.body.appendChild(lightbox);

            setTimeout(() => {
                lightbox.classList.add('fade-in');
            }, 50);
        });
    });

    return (
        <main className="flex-1 mx-auto">
            <section className="about">
                <h1 className="">
                    <span className="text-5xl md:text-9xl">About Us</span>
                </h1>
                <p className="text-2xl pt-5">Code with <span className="text-teal-300 font-bold">passion</span> and <span className="text-teal-300 font-bold">excitement</span></p>
                <p className="md:text-2xl pt-5 max-w-[1000px] mx-auto">Welcome to Vision Coding Academy! Based in Vancouver, we are a dedicated team
                    of IT professionals and educators passionate about inspiring the next generation of tech leaders.
                    Our academy caters to students from Grades 1-12, offering a unique blend of coding education and
                    creative problem-solving. Led by Jay, our self-taught DevOps Engineer and director, we bring
                    real-world technology experiences into every lesson. Our approach is rooted in making coding
                    accessible and exciting, ensuring each student's journey is engaging and tailored to their
                    individual needs. At Vision Coding Academy, we don't just teach coding; we ignite a lifelong passion
                    for innovation and technology.</p>
            </section>
            <section className="intro py-20 md:py-32">
                <div className="max-w-[1000px] mx-auto">
                    <div className="heading timeline-content js--fadeInBottom ">
                        <img src={visionCodingLetters} />
                    </div>
                </div>
            </section>
            <div className="bg-black text-white flex flex-col">
                <section className="py-10 max-w-[1000px] mx-auto">
                    <div className="py-5">
                        <h2 className="text-2xl md:text-4xl text-center py-5 text-teal-300">Our Story</h2>
                        <p className="text-center md:text-lg">Vision Coding Academy's story began with a simple yet powerful vision: to transform the way young minds interact with technology. Our director, Jay, combined his extensive experience in tech and education to establish an academy where coding is more than a subject - it's a gateway to innovation and future possibilities. Over the years, our team of IT industry experts has expanded, each bringing their unique expertise to enrich our curriculum. Together, we have created a dynamic learning environment where students are encouraged to think critically, solve problems creatively, and prepare for a future where they can make a real difference in the world of technology</p>
                    </div>
                </section>
                <section className="md:max-w-[1000px] mx-auto py-10 md:py-20">
                    <div className="timeline-content js--fadeInRight md:float-right ml-10">
                        <img src={jayImg} className="w-[250px] mx-auto rounded-full" />
                        <div className="pl-2 text-2xl text-center">Jay</div>
                        <div className="pl-2 text-lg">Director and DevOps Engineer</div>
                    </div>
                    <h2 className="timeline-content js--fadeInLeft pl-2 text-4xl md:text-6xl py-10">Meet Our Director</h2>
                    <p className="timeline-content js--fadeInLeft pl-2 md:text-lg">At Vision Coding Academy, I, Jay, blend my tech know-how with educational
                        insights
                        to create a
                        dynamic learning environment. My journey in tech and teaching isn't just about imparting
                        knowledge;
                        it's about igniting a passion for innovation and problem-solving in our students.</p>
                </section>
                <section className="max-w-[1000px] mx-auto py-10">
                    <h3 className="pl-2 text-2xl md:text-6xl py-10 text-teal-300">Meet The Team</h3>
                </section>
                <section className="py-10 md:grid md:grid-cols-5 md:pl-20">
                    <div>
                        <img src={dannyImg} alt="Danny" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">Danny</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Branch Manager</h2>
                    </div>
                    <div>
                        <img src={uhdImg} alt="Hwanyong" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">Hwanyong</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Backend Engineer</h2>
                    </div>
                    <div>
                        <img src={lukeImg} alt="Luke" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">
                            Luke</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src={iktaeImg} alt="Iktae" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">Iktae</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Automation Engineer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Kay" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">
                            Kay</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Project Manager</h2>
                    </div>
                    <div>
                        <img src={paulImg} alt="Paul" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">Paul</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src={taylorImg} alt="Taylor" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight text-2xl">Taylor</h3>
                        <h2 className="timeline-content js--fadeInRight text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Madhu" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight text-2xl">Madhu</h3>
                        <h2 className="timeline-content js--fadeInRight text-lg">Software Engineer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Drew" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight text-2xl">Drew</h3>
                        <h2 className="timeline-content js--fadeInRight text-lg">Software Engineer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Sean" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight text-2xl">Sean</h3>
                        <h2 className="timeline-content js--fadeInRight text-lg">Software Engineer</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="JK" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">JK</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Mentor @ Microsoft</h2>
                    </div>
                    <div>
                        <img src={noIcon} alt="Andy" className="timeline-content js--fadeInRight image w-[250px] px-2 cursor-pointer" />
                        <h3 className="timeline-content js--fadeInRight pl-2 text-2xl">Andy</h3>
                        <h2 className="timeline-content js--fadeInRight pl-2 text-lg">Mentor @ AWS amazon</h2>
                    </div>
                </section>
                <section className="py-10 max-w-[1000px] mx-auto">
                    <div className="py-5">
                        <h2 className="text-2xl md:text-6xl text-center py-5">Our Students</h2>
                        <p className="text-center md:text-lg">Testimonial reviews & comments</p>
                    </div>
                    <div className="md:flex mx-auto py-10">
                        <img src={testimonial1} alt="Jay" className="rounded-full border w-[300px] h-[300px] md:w-[350px] md:h-[350px] md:mx-3 cursor-pointer" />
                        <img src={testimonial2} alt="Jay" className="rounded-full border w-[300px] h-[300px] md:w-[350px] md:h-[350px] md:mx-3 cursor-pointer" />
                        <img src={testimonial3} alt="Jay" className="rounded-full border w-[300px] h-[300px] md:w-[350px] md:h-[350px] md:mx-3 cursor-pointer" />
                    </div>
                </section>
                <section className="py-10 border-b">
                    <h2 className="glow text-2xl md:text-6xl text-center py-10">Code with us</h2>
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
                <section className="mx-2 py-10 border-t-2 border-b-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.918591896756!2d-122.80519882320316!3d49.27793977108967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678cc852829e7%3A0x417feb8745527bef!2s2885%20Barnet%20Hwy%2C%20Coquitlam%2C%20BC%20V3B%201C1!5e0!3m2!1sen!2sca!4v1715144121249!5m2!1sen!2sca"
                        width="300" height="450" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className="map mx-auto"></iframe>
                </section>
            </div>
        </main>
    )
}