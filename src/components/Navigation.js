import { Logo, Mic } from "./icons"

export default function Navigation() {
    return (
        <div className="sticky top-0 left-0 flex justify-between items-center w-full py-3.5 px-5 bg-black border-b-[1.5px] border-[#ffffff2b] z-50 text-white">
            <button>
                <Logo />
            </button>
            <div className="flex items-center gap-4">
                <p className="font-medium opacity-90">Good Morning, Lithika!</p>
                <button className="flex justify-center items-center bg-[#ffffff1f] w-[32px] h-[32px] rounded-full">
                    <Mic />
                </button>
            </div>
        </div>
    )
}