import useAuthStore from "../store/AuthStore"
import visionCodingIcon from "/yellow1.png"

export default function AccountPage() {

    const { user } = useAuthStore((state) => state)

    return (
        <main className="flex-1 overflow-x-hidden">
            <h2 className="text-4xl md:text-6xl text-center pt-20 text-yellow-200">Your Account</h2>
            <div className="mt-20 h-[70px]">
                <div
                    className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                </div>
                <img src={visionCodingIcon} alt=""
                    className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
            </div>
            <section className="flex flex-col mx-auto">
                <h2 className="mx-auto text-2xl">Username: <span className="pb-5 text-yellow-200">{user.username}</span></h2>
                <button className="pb-2 text-2xl">Edit</button>
                <h2 className="mx-auto text-2xl">Password: <span className="py-5 text-yellow-200">••••••••••</span></h2>
                <button className="pb-2 text-2xl">Edit</button>
            </section>
            <div className="mt-20">
                <div
                    className="static bg-gradient-to-r from-black via-yellow-400 to-black h-[2px]">
                </div>
                <img src={visionCodingIcon} alt=""
                    className="relative bottom-[45px] md:bottom-[60px] left-[40%] md:left-[48%] w-[75px] md:w-[100px] bg-black" />
            </div>
        </main>
    )
}