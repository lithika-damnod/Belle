import ChatParentCard from "./ChatParentCard"
import { Search } from "./icons"

export default function ChatHistory() {
    return (
        <>
            <div className="px-5 border-t-[1.5px] border-[#ffffff2b]">
                <div className="flex justify-between items-center font-medium mt-5 mb-5">
                    <div className="flex items-center gap-3">
                        <h1 className="font-semibold text-xl">Chat History</h1>
                        <div className="flex items-center justify-center w-[28px] h-[28px] p-2 bg-[#ffffff1f] rounded-full text-[1.05rem] text-gray-300 font-[610]">3</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="bg-[#ffffff1f] py-[0.32rem] px-3 rounded-full text-[0.95rem] font-[450] opacity-90">Filter</button>
                        <button className="p-[0.25rem] bg-[#ffffff1f] rounded-full opacity-90">
                            <Search className="scale-[0.8]" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col font-medium">
                <ChatParentCard
                    title="Django API Project Structure"
                    description="Scrolling reveals transitions between milestones with subtle animations."
                    time="19 Hours Ago"
                />
                <ChatParentCard
                    title="Django API Project Structure"
                    description="Scrolling reveals transitions between milestones with subtle animations."
                    time="19 Hours Ago"
                />
                <ChatParentCard
                    title="Django API Project Structure"
                    description="Scrolling reveals transitions between milestones with subtle animations."
                    time="19 Hours Ago"
                />
            </div>
        </>
    )
}