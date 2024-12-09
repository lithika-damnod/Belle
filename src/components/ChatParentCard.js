import { ArrowUp } from "./icons"

export default function ChatParentCard({
    title = "",
    time = "",
    description = "",
}) {
    return (
        <div className="p-5 border-t-[1.5px] border-[#ffffff2b]">
            <div>
                <h4 className="text-[#ffffffc2] text-sm font-semibold">{time}</h4>
                <ArrowUp className="rotate-90 float-right" />
            </div>
            <h2 className="text-lg mt-1">{title}</h2>
            <h3 className="text-[#ffffffc2] leading-[1.6rem] w-[90%]">{description}</h3>
        </div>
    )
}