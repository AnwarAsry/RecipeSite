interface FilterPillProps {
    text: string
    active?: boolean
    onClick?: () => void
}

export const FilterPill = ({ text, active, onClick }: FilterPillProps) => {
    return (
        <span
            className={`
                ${active
                    ? "text-red-500 border" : "text-slate-400"}
                w-fit h-fit px-6 py-1 inline-block 
                rounded-full text-center uppercase 
                font-semibold border-slate-300 hover:cursor-pointer
            `}
            onClick={onClick}
        >
            {text}
        </span>
    )
}