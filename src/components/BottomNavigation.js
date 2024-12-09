import { ArrowUp } from "./icons"

export default function BottomNavigation() {
    return (
        <>
            <div className="flex justify-center fixed bottom-0 w-full mb-16 z-50">
                <button className="flex items-center gap-2 bg-[#232323] py-[0.32rem] pl-3 pr-2 rounded-full text-[0.95rem] font-[450] border border-[#ffffff1f]">
                    Open New Chat
                    <ArrowUp className="rotate-45" />
                </button>
            </div>
            <div className="pointer-events-none flex justify-center fixed bottom-0 w-full h-[260px] z-40" style={{ background: "rgb(0,0,0)", background: "linear-gradient(180deg, rgba(255,255,255,0) -10%, rgba(0,0,0,1) 99%)" }} />
        </>
    )
}