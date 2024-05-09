
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: About page for Vision Coding Academy
 */

export default function AboutPage() {

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
                        <img src="../images/vision-coding-icon.jpg" className="md:h-[300px]" />
                        <h1 className="typo" contentEditable="true" spellCheck="false">Vision Coding Academy</h1>
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
                <section className="max-w-[1000px] mx-auto py-10">
                    <h3 className="pl-2 text-2xl md:text-6xl py-10 text-teal-300">Meet The Team</h3>
                </section>
                <section className="py-10 md:grid md:grid-cols-5 md:pl-20">
                    <div>
                        <img src="../images/jay2.jpg" alt="Jay" />
                        <h3 className="pl-2 text-2xl">Jay</h3>
                        <h2 className="pl-2 text-lg">DevOps Engineer</h2>
                    </div>
                    <div>
                        <img src="../images/danny.jpg" alt="Jay" />
                        <h3 className="pl-2 text-2xl">Danny</h3>
                        <h2 className="pl-2 text-lg">Branch Manager</h2>
                    </div>
                    <div>
                        <img src="../images/noicon.jpg" alt="Jay" />
                        <h3 className="pl-2 text-2xl">Hwanyong</h3>
                        <h2 className="pl-2 text-lg">Backend Engineer</h2>
                    </div>
                    <div>
                        <img src="../images/noicon.jpg" alt="Jay" />
                        <h3 className="pl-2 text-2xl">
                            Luke</h3>
                        <h2 className="pl-2 text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src="../images/noicon.jpg" alt="Jay" />
                        <h3 className="pl-2 text-2xl">Iktae</h3>
                        <h2 className="pl-2 text-lg">Automation Engineer</h2>
                    </div>
                    <div>
                        <img src="../images/noicon.jpg" alt="Jay" />
                        <h3 className="pl-2 text-2xl">
                            Sumi</h3>
                        <h2 className="pl-2 text-lg">UX / UI Deisgner</h2>
                    </div>
                    <div>
                        <img src="../images/noicon.jpg" alt="Jay" />
                        <h3 className="pl-2 text-2xl">Jee</h3>
                        <h2 className="pl-2 text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src="../images/noicon.jpg" alt="Jay" />
                        <h3 className="text-2xl">Taylor</h3>
                        <h2 className="text-lg">Full Stack Developer</h2>
                    </div>
                    <div>
                        <img src="../images/noicon.jpg" alt="Jay" />
                        <h3 className="pl-2 text-2xl">JK</h3>
                        <h2 className="pl-2 text-lg">Mentor @ Microsoft</h2>
                    </div>
                    <div>
                        <img src="../images/noicon.jpg" alt="Jay" />
                        <h3 className="pl-2 text-2xl">Andy</h3>
                        <h2 className="pl-2 text-lg">Mentor @ AWS amazon</h2>
                    </div>
                </section>
                <section className="py-10 max-w-[1000px] mx-auto">
                    <div className="py-5">
                        <h2 className="text-2xl md:text-6xl text-center py-5">Our Students</h2>
                        <p className="text-center md:text-lg">Testimonial reviews & comments</p>
                    </div>
                    <div className="md:flex mx-auto py-10">
                        <img src="../images/testimonial1.jpg" alt="Jay" className="rounded-full border w-[300px] h-[300px] md:w-[350px] md:h-[350px] md:mx-3" />
                        <img src="../images/testimonial2.jpg" alt="Jay" className="rounded-full border w-[300px] h-[300px] md:w-[350px] md:h-[350px] md:mx-3" />
                        <img src="../images/testimonial3.jpg" alt="Jay" className="rounded-full border w-[300px] h-[300px] md:w-[350px] md:h-[350px] md:mx-3" />
                    </div>
                </section>
                <section>
                    <h2 className="glow text-2xl md:text-6xl text-center py-10">Code with us</h2>
                    <div className="max-w-[1000px] mx-auto md:grid md:grid-cols-2">
                        <p className="py-10">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                        <p className="py-10">vision.coding</p>
                        <p className="py-10">+1 604-900-3707</p>
                        <p className="py-10">@visioncodingcqt</p>
                        <p className="py-10">visioncodingca@gmail.com</p>
                        <p className="py-10">6049003707</p>
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