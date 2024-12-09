import BottomNavigation from "../components/BottomNavigation";
import ChatHistory from "../components/ChatHistory";
import Hero from "../components/Hero";
import { ArrowUp, Search } from "../components/icons";
import Navigation from "../components/Navigation";

export default function Home() {
    return (
        <>
            <Navigation />
            <BottomNavigation />
            <Hero />
            <ChatHistory />
        </>
    )
}