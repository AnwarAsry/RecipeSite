export const NotesList = ({ children }: { children: React.ReactNode }) => {
    return (
        <ul className="pl-5 space-y-2 list-disc text-[#374151]">
            {children}
        </ul>
    )
}