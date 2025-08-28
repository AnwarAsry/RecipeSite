export const FilterPill = ({ text }: { text: string }) => {
    return (
        <span className="min-w-20 h-fit px-6 py-1 inline-block rounded-full text-center text-slate-400 uppercase font-semibold border-slate-300 active:text-red-500 active:border hover:cursor-pointer">{text}</span>

    )
}