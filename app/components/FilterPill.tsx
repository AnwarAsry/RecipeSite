interface FilterPillProps {
    text: string
    active?: boolean
    onClick?: () => void
}

export const FilterPill = ({ text, active, onClick }: FilterPillProps) => {
    return (
        <span
            className={`
                ${active ?
                    "bg-[#4b5563] hover:bg-[#374151] text-white" :
                    "border border-[#d1d5db] hover:bg-neutral-50 bg-white text-[#374151]"}
                px-6 py-2 rounded-full
                cursor-pointer
            `}
            onClick={onClick}
        >
            {text}
        </span>
    )
}