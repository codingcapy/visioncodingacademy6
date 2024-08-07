
import icon70 from "/icon70cpp.svg"

export default function CPlusPlusPage(){

    return(
        <main class="flex-1 md:pl-20 md:max-w-[1400px]">
            <div class="bg-black text-white md:flex md:pt-20 px-2">
                <section class="flex-1 mx-auto md:mx-20 py-10 md:px-10">
                    <h3 class="text-5xl md:text-6xl py-10 pb-2">C++</h3>
                    <h3 class="text-5xl md:text-6xl pb-5"></h3>
                    <p class="font-bold underline">Overview:</p>
                    <p class="text-lg">This course assumes a foundational understanding of C language concepts. We aim
                        to explore the concepts of object-oriented programming (polymorphism, abstraction, inheritance,
                        encapsulation). </p>
                </section>
                <section class="flex-1 py-10">
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 1: Introduction to Programming /
                            Input & Output / Variables and Data Types / Conditional Statements (if/else)</h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Basic introduction to programming in C++</li>
                            <li class="text-lg">Input and output operations using std::cout and std::cin</li>
                            <li class="text-lg">Understanding variables and various data types such as integers, floats,
                                booleans, and characters</li>
                            <li class="text-lg">Introduction to conditional statements, including if/else constructs
                            </li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7">
                            <li class="text-lg">Write programs to perform basic input and output operations using
                                std::cout and std::cin</li>
                            <li class="text-lg">Create programs to declare variables of different data types and perform
                                operations on them</li>
                            <li class="text-lg">Implement conditional statements to solve problems based on given
                                conditions</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 2: Concept of of class / static
                            function & variable</h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Introduction to the concept of classes in C++</li>
                            <li class="text-lg">Defining and using classes to encapsulate data and behavior</li>
                            <li class="text-lg">Understanding static member functions and variables within classes</li>
                            <li class="text-lg">Exploring the use cases and benefits of static functions and variables
                            </li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Implement classes to model real-world entities with appropriate data
                                members and member functions</li>
                            <li class="text-lg">Utilize static member functions and variables to maintain shared data
                                across class instances</li>
                            <li class="text-lg">Solve problems involving class design and static member usage to
                                reinforce understanding</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 3: Loops (for, while) Function
                            Pointer</h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px] md:my-2"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Understanding the usage of for loops for definite iteration in C++</li>
                            <li class="text-lg">Exploring while loops for indefinite iteration and condition-based
                                looping</li>
                            <li class="text-lg">Introduction to function pointers and their role in C++ programming</li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Write programs that utilize for loops to perform repetitive tasks with a
                                known number of iterations</li>
                            <li class="text-lg">Implement while loops to handle situations where the number of
                                iterations is determined by a condition</li>
                            <li class="text-lg">Explore the use of function pointers to pass functions as arguments to
                                other functions and invoke them dynamically</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 4: Functions (Defining and Calling
                            Functions) & Array Function Pointers</h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Defining functions in C++ and understanding function prototypes</li>
                            <li class="text-lg">Calling functions with different parameter types and return values</li>
                            <li class="text-lg">Exploring the concept of function pointers and their usage in C++</li>
                            <li class="text-lg">Introduction to array function pointers and their application</li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Write programs to define functions for specific tasks and call them from
                                the main program</li>
                            <li class="text-lg">Explore different parameter types and return values in function
                                definitions</li>
                            <li class="text-lg">Implement array function pointers to dynamically invoke functions stored
                                in arrays</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 5: Constructors and Destructors</h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Constructors, destructors, default constructors, parameterized
                                constructors</li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Write a program that behaves like phonebook software</li>
                            <li class="text-lg">Implement classes with constructors and destructors to manage object
                                initialization and cleanup</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 6: Polymorphism</h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Polymorphism, virtual functions, function overriding, function hiding
                            </li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Write programs that takes variable parameters</li>
                            <li class="text-lg">Create classes with virtual functions and derive subclasses to
                                demonstrate runtime polymorphism</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 7: Inheritance</h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Inheritance, base classes, derived classes, access specifiers (public,
                                protected, private)</li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Implement inheritance hierarchies to model relationships between classes
                            </li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 8: Abstract Classes and Interfaces
                        </h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Abstract classes, pure virtual functions, interfaces</li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Define abstract classes with pure virtual functions and implement
                                concrete subclasses</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 9: Exception Handling (try, catch)
                        </h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Exception handling, try-catch blocks, throw statement</li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Write programs to handle runtime errors and exceptional conditions using
                                try-catch blocks.</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 10: Type Casting
                        </h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Type casting, static_cast, dynamic_cast, const_cast, reinterpret_cast
                            </li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Perform type conversions between different data types using various
                                casting operators</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 11: Templates
                        </h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Function templates, class templates, template specialization</li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Create generic functions and classes using templates to support multiple
                                data types</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 12: STL Libraries
                        </h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Templated containers (vector, list, map, set), STL algorithms</li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Utilize STL containers and algorithms to solve common programming tasks
                                with templated data structures.</li>
                        </ul>
                    </ul>
                    <div class="py-10 ">
                        <h3 class="text-xl text-yellow-400 md:border-l-2 pl-5">Week 13: Review and Projects
                        </h3>
                        <img src={icon70} alt="logo" class="mx-auto md:float-right w-[75px]"/>
                    </div>
                    <ul class="list-disc list-inside pl-2 md:pl-5">
                        <li class="text-lg">Topics:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Comprehensive review of C++ concepts covered throughout the course,
                                final project development</li>
                        </ul>
                        <li class="text-lg">Practice Problems:</li>
                        <ul class="list-disc list-inside pl-7 pb-5">
                            <li class="text-lg">Provide practice problems and exercises to assess students'
                                understanding and reinforce key concepts</li>
                            <li class="text-lg">Allocate time for students to work on their final projects, providing
                                guidance and support as needed</li>
                        </ul>
                    </ul>
                </section>
            </div>
            <div class="fixed bottom-2 right-2 md:bottom-16 md:right-16 bg-transparent">
                <div class="py-2 bg-transparent z-10">
                    <a href="https://www.instagram.com/vision.coding/"
                        class="nav-element py-2 text-lg md:text-2xl bg-transparent" target="_blank">
                        <div class="bg-yellow-300 rounded-full h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
                            <svg fill="#000000" width="65px" height="65px" viewBox="0 0 256 256" id="Flat"
                                xmlns="http://www.w3.org/2000/svg" class="hidden md:block mx-auto pt-2">
                                <path
                                    d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z" />
                            </svg>
                            <svg fill="#000000" width="50px" height="50px" viewBox="0 0 256 256" id="Flat"
                                xmlns="http://www.w3.org/2000/svg" class="hidden md:block mx-auto">
                                <path
                                    d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div class="py-2">
                    <a href="https://www.facebook.com/profile.php?id=61556365105748" target="_blank"
                        class="nav-element py-2 text-lg md:text-2xl">
                        <div class="bg-yellow-300 rounded-full h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
                            <svg fill="#000000" height="65px" width="65px" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 310 310" xml:space="preserve" class="hidden md:block mx-auto pt-2">
                                <g id="XMLID_834_">
                                    <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                                c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                                V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                                C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                                c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
                                </g>
                            </svg>
                            <svg fill="#000000" height="45px" width="45px" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 310 310" xml:space="preserve" class="md:hidden mx-auto pt-2">
                                <g id="XMLID_834_">
                                    <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                                c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                                V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                                C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                                c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
                                </g>
                            </svg>
                        </div>
                    </a>
                </div>
                <div class="py-2">
                    <a href="http://pf.kakao.com/_LaRxfxj" target="_blank" class="nav-element py-2 text-lg md:text-2xl">
                        <div class="bg-yellow-300 rounded-full h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
                            <svg fill="#000000" width="100px" height="100px" viewBox="0 0 24 24" role="img"
                                xmlns="http://www.w3.org/2000/svg" class="hidden md:block ml-1 pt-2">
                                <path
                                    d="m8 2c3.866 0 7 2.44267 7 5.45667 0 3.01333-3.134 5.45603-7 5.45603-.38495.0002-.76952-.0243-1.15133-.0734l-2.93867 1.922c-.334.1767-.452.1574-.31467-.2753l.59467-2.452c-1.92-.9733-3.19-2.66-3.19-4.57733 0-3.01334 3.134-5.45667 7-5.45667zm3.938 5.37333.98-.94933c.0565-.05873.0881-.13711.088-.21864-.0001-.08152-.0318-.15983-.0885-.21842s-.1339-.09289-.2154-.09568-.1609.02616-.2214.08074l-1.2854 1.244v-1.028c0-.08346-.0331-.16349-.0921-.2225s-.1391-.09217-.2225-.09217c-.0835 0-.1635.03316-.2225.09217s-.0922.13904-.0922.2225v1.70467c-.0118.04862-.0118.09937 0 .148v.95933c0 .08345.0332.16349.0922.2225s.139.09217.2225.09217c.0834 0 .1635-.03316.2225-.09217s.0921-.13905.0921-.2225v-.90867l.2847-.27533.952 1.35533c.0238.03384.054.06266.0889.08483s.0738.03724.1146.04436c.0407.00712.0824.00614.1228-.00287.0403-.00901.0785-.02588.1124-.04965.0338-.02377.0626-.05397.0848-.08888s.0372-.07384.0444-.11458c.0071-.04073.0061-.08247-.0029-.12282-.009-.04036-.0259-.07855-.0497-.11239l-1.0093-1.43666zm-1.972 1.28267h-.97333v-2.458c-.00373-.08086-.03847-.15718-.09701-.21308-.05854-.05591-.13638-.08711-.21733-.08711-.08094 0-.15878.0312-.21732.08711-.05854.0559-.09329.13222-.09701.21308v2.77267c0 .17333.14.31466.314.31466h1.288c.0835 0 .1635-.03315.2225-.09216s.0922-.13905.0922-.2225c0-.08346-.0332-.1635-.0922-.22251s-.139-.09216-.2225-.09216zm-3.90467-.728.464-1.138.42534 1.138zm1.682.32533.00134-.01066c-.00016-.07928-.03042-.15553-.08467-.21334l-.69733-1.86666c-.02923-.08896-.08492-.16687-.15961-.22334s-.16484-.08879-.25839-.09266c-.09424-.00042-.18638.02787-.26414.08111-.07777.05323-.13748.12888-.1712.21689l-1.10733 2.71666c-.01563.03826-.02357.07922-.02336.12055.0002.04133.00854.08221.02454.12031.01601.0381.03936.07268.06872.10176.02937.02908.06417.05209.10243.06772.03826.01562.07922.02356.12055.02336s.08221-.00854.12031-.02455c.0381-.016.07268-.03935.10176-.06872.02908-.02936.05209-.06417.06772-.10243l.22-.542h1.38l.19933.53334c.01355.03986.03497.0766.06298.10804s.06204.05694.10009.07498c.03804.01805.07932.02827.12138.03008.04207.0018.08407-.00486.12352-.01959.03945-.01472.07554-.03722.10613-.06614.0306-.02893.05508-.06371.07199-.10227s.02592-.08012.02647-.12222c.00056-.0421-.00734-.08389-.02323-.12288zm-2.21466-2.052c0-.08334-.03306-.16327-.09193-.22226-.05887-.059-.13873-.09223-.22207-.0924h-2.16334c-.08345 0-.16349.03315-.2225.09216s-.09216.13905-.09216.2225c0 .08346.03315.16349.09216.22251.05901.05901.13905.09216.2225.09216h.77334v2.49067c0 .08345.03315.16349.09216.2225s.13905.09216.2225.09216c.08346 0 .16349-.03315.22251-.09216.05901-.05901.09216-.13905.09216-.2225v-2.49067h.76c.174 0 .31467-.14133.31467-.31467z"
                                    fill="#001018" />
                            </svg>
                            <svg fill="#000000" width="60px" height="60px" viewBox="0 0 24 24" role="img"
                                xmlns="http://www.w3.org/2000/svg" class="md:hidden ml-1 pt-2">
                                <path
                                    d="m8 2c3.866 0 7 2.44267 7 5.45667 0 3.01333-3.134 5.45603-7 5.45603-.38495.0002-.76952-.0243-1.15133-.0734l-2.93867 1.922c-.334.1767-.452.1574-.31467-.2753l.59467-2.452c-1.92-.9733-3.19-2.66-3.19-4.57733 0-3.01334 3.134-5.45667 7-5.45667zm3.938 5.37333.98-.94933c.0565-.05873.0881-.13711.088-.21864-.0001-.08152-.0318-.15983-.0885-.21842s-.1339-.09289-.2154-.09568-.1609.02616-.2214.08074l-1.2854 1.244v-1.028c0-.08346-.0331-.16349-.0921-.2225s-.1391-.09217-.2225-.09217c-.0835 0-.1635.03316-.2225.09217s-.0922.13904-.0922.2225v1.70467c-.0118.04862-.0118.09937 0 .148v.95933c0 .08345.0332.16349.0922.2225s.139.09217.2225.09217c.0834 0 .1635-.03316.2225-.09217s.0921-.13905.0921-.2225v-.90867l.2847-.27533.952 1.35533c.0238.03384.054.06266.0889.08483s.0738.03724.1146.04436c.0407.00712.0824.00614.1228-.00287.0403-.00901.0785-.02588.1124-.04965.0338-.02377.0626-.05397.0848-.08888s.0372-.07384.0444-.11458c.0071-.04073.0061-.08247-.0029-.12282-.009-.04036-.0259-.07855-.0497-.11239l-1.0093-1.43666zm-1.972 1.28267h-.97333v-2.458c-.00373-.08086-.03847-.15718-.09701-.21308-.05854-.05591-.13638-.08711-.21733-.08711-.08094 0-.15878.0312-.21732.08711-.05854.0559-.09329.13222-.09701.21308v2.77267c0 .17333.14.31466.314.31466h1.288c.0835 0 .1635-.03315.2225-.09216s.0922-.13905.0922-.2225c0-.08346-.0332-.1635-.0922-.22251s-.139-.09216-.2225-.09216zm-3.90467-.728.464-1.138.42534 1.138zm1.682.32533.00134-.01066c-.00016-.07928-.03042-.15553-.08467-.21334l-.69733-1.86666c-.02923-.08896-.08492-.16687-.15961-.22334s-.16484-.08879-.25839-.09266c-.09424-.00042-.18638.02787-.26414.08111-.07777.05323-.13748.12888-.1712.21689l-1.10733 2.71666c-.01563.03826-.02357.07922-.02336.12055.0002.04133.00854.08221.02454.12031.01601.0381.03936.07268.06872.10176.02937.02908.06417.05209.10243.06772.03826.01562.07922.02356.12055.02336s.08221-.00854.12031-.02455c.0381-.016.07268-.03935.10176-.06872.02908-.02936.05209-.06417.06772-.10243l.22-.542h1.38l.19933.53334c.01355.03986.03497.0766.06298.10804s.06204.05694.10009.07498c.03804.01805.07932.02827.12138.03008.04207.0018.08407-.00486.12352-.01959.03945-.01472.07554-.03722.10613-.06614.0306-.02893.05508-.06371.07199-.10227s.02592-.08012.02647-.12222c.00056-.0421-.00734-.08389-.02323-.12288zm-2.21466-2.052c0-.08334-.03306-.16327-.09193-.22226-.05887-.059-.13873-.09223-.22207-.0924h-2.16334c-.08345 0-.16349.03315-.2225.09216s-.09216.13905-.09216.2225c0 .08346.03315.16349.09216.22251.05901.05901.13905.09216.2225.09216h.77334v2.49067c0 .08345.03315.16349.09216.2225s.13905.09216.2225.09216c.08346 0 .16349-.03315.22251-.09216.05901-.05901.09216-.13905.09216-.2225v-2.49067h.76c.174 0 .31467-.14133.31467-.31467z"
                                    fill="#001018" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div class="py-2">
                    <a href="http://wa.me/+16049003707" target="_blank" class="nav-element py-2 text-lg md:text-2xl">
                        <div class="bg-yellow-300 rounded-full h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
                            <svg fill="#000000" height="60px" width="60px" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 308 308" xml:space="preserve" class="hidden md:block mx-auto pt-2">
                                <g id="XMLID_468_">
                                    <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
                                c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
                                c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
                                c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
                                c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
                                c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
                                c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
                                c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
                                c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
                                C233.168,179.508,230.845,178.393,227.904,176.981z" />
                                    <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
                                c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
                                c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
                                 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
                                l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
                                c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
                                C276.546,215.678,222.799,268.994,156.734,268.994z" />
                                </g>
                            </svg>
                            <svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 308 308" xml:space="preserve" class="md:hidden mx-auto pt-2">
                                <g id="XMLID_468_">
                                    <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
                                c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
                                c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
                                c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
                                c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
                                c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
                                c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
                                c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
                                c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
                                C233.168,179.508,230.845,178.393,227.904,176.981z" />
                                    <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
                                c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
                                c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
                                 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
                                l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
                                c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
                                C276.546,215.678,222.799,268.994,156.734,268.994z" />
                                </g>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </main>
    )
}