export const PillTag = ({ text }: { text: string }) => {
    return (
        <span className="px-3 py-1 absolute bottom-4 left-4 rounded-full text-white text-sm bg-[#4b5563] shadow-md">
            {text}
        </span>
    )
}