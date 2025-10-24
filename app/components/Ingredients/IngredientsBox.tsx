export const IngredientsBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-6 sticky top-8 rounded-xl bg-[#f9fafb]">
            {children}
        </div>
    )
}