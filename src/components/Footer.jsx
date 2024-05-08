import visionCodingIcon from "/vision-coding-icon.jpg"

export default function Footer(){

    return(
        <footer class="px-5 py-10 md:py-20 max-w-[1000px] mx-auto">
            <div class="py-10 md:grid md:grid-cols-4">
                <div>
                    <img src={visionCodingIcon} class="" />
                    <a href="./index.html">
                        <div class="py-2 text-2xl">Vision Coding Academy</div>
                    </a>
                </div>
                <div>
                    <h3 class="text-2xl md:text-4xl pb-5">Menu</h3>
                    <p class="py-2 md:text-lg">Home</p>
                    <p class="py-2 md:text-lg">Courses</p>
                    <p class="py-2 md:text-lg">About Us</p>
                    <p class="py-2 md:text-lg">Contact</p>
                </div>
                <div>
                    <h3 class="text-2xl md:text-4xl pb-5">Contact Us</h3>
                    <p class="py-2 md:text-lg">Home</p>
                    <p class="py-2 md:text-lg">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                    <p class="py-2 md:text-lg">+1 604-900-3707</p>
                    <p class="py-2 md:text-lg">visioncodingca@gmail.com</p>
                </div>
                <div class="md:pl-32">
                    <h3 class="text-2xl md:text-4xl pb-5">Socials</h3>
                    <p class="py-2 md:text-lg">Instagram</p>
                    <p class="py-2 md:text-lg">Facebook</p>
                    <p class="py-2 md:text-lg">Kakaotalk</p>
                    <p class="py-2 md:text-lg">WhatsApp</p>
                </div>
            </div>
            <div class="text-center pt-5">
                &copy; 2024 by Vision Coding Academy.
            </div>
        </footer>
    )
}