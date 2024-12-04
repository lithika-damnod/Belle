import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

export default function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <div className="mt-5 px-5">
                <h2 className="font-medium text-xl">Chat History</h2>
            </div>
        </>
    )
}