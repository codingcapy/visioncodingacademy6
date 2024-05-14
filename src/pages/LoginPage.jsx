

export default function LoginPage() {

    return (
        <main class="flex-1 mx-auto">
            <div class="bg-black text-white flex flex-col mx-auto">
                <section class="max-w-[1000px] mx-auto py-5">
                    <h3 class="pl-2 text-5xl md:text-6xl py-5 text-center">Login</h3>
                    <p class="text-center md:text-lg">Login to take <span class="text-teal-300">full advantage</span>
                        of our <span class="text-teal-300">features</span></p>
                    <p class="text-center md:text-lg">as a member of <span class="text-teal-300">Vision Coding
                        Academy</span></p>
                </section>
                <section class="py-10 md:pl-20 mx-auto">
                    <form action="#" class="flex flex-col mx-auto">
                        <div class="flex flex-col">
                            <label for="title">Email</label>
                            <input type="text" name='title' id='title' placeholder="Email" required
                                class="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <div class="flex flex-col my-2">
                            <label for="content">Username</label>
                            <input type="text" name='content' id='content' placeholder='Username' required rows="10"
                                cols="40" class="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <div class="flex flex-col my-2">
                            <label for="content">Password</label>
                            <input type="text" name='content' id='content' placeholder='Password' required rows="10"
                                cols="40" class="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <div class="flex flex-col my-2">
                            <label for="content">Confirm Password</label>
                            <input type="text" name='content' id='content' placeholder='Confirm Password' required
                                rows="10" cols="40" class="px-2 border rounded-lg border-slate-700 py-1 w-[300px]" />
                        </div>
                        <button
                            class="px-3 py-3 my-7 border border-4 rounded border-yellow-300 text-yellow-300 font-bold md:text-2xl hover:bg-yellow-300 hover:text-black transition-all ease duration-500">Login</button>
                        <p class="text-lg text-center">New User? <a href="../signup/index.html"
                            class="text-teal-300 font-bold">Sign Up</a></p>
                        <p class="text-lg text-center">Forgot Password? <a href="#"
                            class="text-teal-300 font-bold">Recovery</a></p>
                    </form>
                </section>
            </div>
        </main>
    )
}