
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Courses page for Vision Coding Academy
 */

import noIcon from "/noicon.jpg"

export default function CoursesPage() {

    return (
        <main class="flex-1 mx-auto">
            <div class="bg-black text-white flex flex-col">

                <section class="max-w-[1000px] mx-auto py-10">
                    <h3 class="pl-2 text-5xl md:text-6xl py-10 text-center">Vision Coding Courses</h3>
                    <p class="text-center md:text-lg">Each course is crafted for hands-on, practical learning,</p>
                    <p class="text-center md:text-lg">guided by our team of industry experts.</p>
                </section>
                <section class="py-10 md:grid md:grid-cols-4 md:pl-20">
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                    </div>
                    <div>
                        <img src={noIcon} alt="Jay" />
                        <h3 class="pl-2 text-2xl text-center">View Detail</h3>
                    </div>
                </section>
                <section>
                    <h2 class="glow text-2xl md:text-6xl text-center py-10">Code with us</h2>
                    <div class="max-w-[1000px] mx-auto md:grid md:grid-cols-2">
                        <p class="py-10">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                        <p class="py-10">vision.coding</p>
                        <p class="py-10">+1 604-900-3707</p>
                        <p class="py-10">@visioncodingcqt</p>
                        <p class="py-10">visioncodingca@gmail.com</p>
                        <p class="py-10">6049003707</p>
                    </div>
                </section>
            </div>
        </main>
    )
}