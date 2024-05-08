
import $ from 'jquery';
import visionCodingIcon from "/vision-coding-icon.jpg"

export default function Header() {

    const $mainNav = $('#main-nav');

    $mainNav.hide();

    if (window.innerWidth > 700) {
        $mainNav.show();
    }

    function slideToggle(){
            $mainNav.slideToggle();
    }

    return (
        <header className="md:flex justify-between px-5 py-5 bg-black bg-opacity-70 text-white sticky z-50 top-0">
            <div className="flex justify-between md:block px-2">
                <div className="flex"><img src={visionCodingIcon} className="" />
                    <a href="./index.html">
                        <div className="nav-element hidden md:block py-2 text-2xl">Vision Coding Academy</div>
                    </a>
                    <a href="./index.html"><div className="md:hidden py-2">Vision Coding</div></a>
                </div>
                <button id="hamburger-menu" className="text-3xl md:hidden" onClick={slideToggle}>&#x2630;</button>
            </div>
            <nav id="main-nav">
                <ul className="md:flex">
                    <li
                        className="px-5 py-3 text-center rounded-md transition ease-in-out duration-300  md:hidden">
                        <a href="../html/index.html">Home</a>
                    </li>
                    <li
                        className="px-5 py-3 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <a href="#">About</a>
                    </li>
                    <li
                        className="px-5 py-3 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <a href="#">Courses</a>
                    </li>
                    <li
                        className="px-5 py-3 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <a href="#">Forum</a>
                    </li>
                    <li
                        className="px-5 py-3 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <a href="#">Contact</a>
                    </li>
                    <li
                        className="px-5 py-3 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <a href="#">Login</a>
                    </li>
                    <li
                        className="px-5 py-3 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <a href="#">Signup</a>
                    </li>
                </ul>
            </nav>
            <div className="flex">
                <div
                    className="nav-element hidden px-5 py-3 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                    Login
                </div>
                <div
                    className="nav-element hidden px-5 py-3 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                    Signup
                </div>
            </div>
        </header>
    )
}