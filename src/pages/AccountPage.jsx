import useAuthStore from "../store/AuthStore"


export default function AccountPage() {

    const { user } = useAuthStore((state) => state)

    return (
        <main className="flex-1 overflow-x-hidden">
            <h2 className="text-4xl md:text-6xl text-center py-5 text-yellow-200">Your Account</h2>
            <section className="flex flex-col mx-auto">
                <h2 className="mx-auto text-2xl">Username: <span className="py-5 text-yellow-200">{user.username}</span></h2>
                <button className="pb-2">Edit</button>
                <h2 className="mx-auto text-2xl">Password: <span className="py-5 text-yellow-200">••••••••••</span></h2>
                <button>Edit</button>
            </section>
        </main>
    )
}