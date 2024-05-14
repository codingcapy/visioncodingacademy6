
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Contact page for Vision Coding Academy
 */

export default function ContactPage() {

    return (
        <main class="flex-1 mx-auto">
            <section class="about">
                <h1 class="">
                    <span class="text-5xl md:text-9xl">Code With Us</span>
                </h1>
                <p class="text-2xl pt-5">Coding isn't just for computers,</p>
                <p class="text-2xl pt-5">it's the language of the <span class="text-teal-300 font-bold">future</span> ,
                    and your fluency begins <span class="text-teal-300 font-bold">now!</span></p>
                <p class="text-2xl pt-5">English / 한국어</p>
            </section>
            <div class="bg-black text-white flex flex-col">
                <section class="py-10 max-w-[1000px] mx-auto">
                    <div class="py-5">
                        <h2 class="text-2xl md:text-4xl text-center py-5 text-teal-300">Contact Info</h2>
                        <div class="max-w-[1000px] mx-auto md:grid md:grid-cols-2">
                            <p class="py-10 px-10">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                            <p class="py-10 px-10">vision.coding</p>
                            <p class="py-2 md:text-lg">2428 Haywood Ave, West Vancouver, BC V7V 1Y1</p>
                            <p class="py-10 px-10">+1 604-900-3707</p>
                            <p class="py-10 px-10">@visioncodingcqt</p>
                            <p class="py-10 px-10">visioncodingca@gmail.com</p>
                            <p class="py-10 px-10">6049003707</p>
                        </div>
                    </div>
                </section>
                <section class="mx-auto">
                    <form action="#" class="flex flex-col mx-auto">
                        <h1 class="text-center text-4xl">Questions?</h1>
                        <div class="flex flex-col">
                            <label for="title">First Name</label>
                            <input type="text" name='title' id='title' placeholder="First Name" required
                                class="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <div class="flex flex-col my-2">
                            <label for="content">Last Name</label>
                            <input type="text" name='content' id='content' placeholder='Last Name' required rows="10"
                                cols="40" class="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <div class="flex flex-col my-2">
                            <label for="content">Contact</label>
                            <input type="text" name='content' id='content' placeholder='Email or Phone #' required
                                rows="10" cols="40" class="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <div class="flex flex-col my-2">
                            <label for="content">Message</label>
                            <input type="text" name='content' id='content' placeholder='Message' required rows="10"
                                cols="40" class="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <button class="rounded-xl my-5 py-2 px-2 bg-slate-700 text-white mx-auto">Submit</button>
                    </form>
                </section>
                <section class="md:flex mx-auto py-10 w-[100%]">
                    <div class="mx-2 w-[100%]">
                        <h1 class="text-2xl py-2">Coquitlam Location</h1>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.918591896756!2d-122.80519882320316!3d49.27793977108967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678cc852829e7%3A0x417feb8745527bef!2s2885%20Barnet%20Hwy%2C%20Coquitlam%2C%20BC%20V3B%201C1!5e0!3m2!1sen!2sca!4v1715144121249!5m2!1sen!2sca"
                            width="300" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" class="map"></iframe>

                    </div>
                    <div class="mx-2 py-10 md:py-0 w-[100%]">
                        <h1 class="text-2xl py-2">West Vancouver Location</h1>
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