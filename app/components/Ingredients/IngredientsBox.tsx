export const IngredientsBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-6 sticky top-8 rounded-xl bg-[#f9fafb]">
            <h3 className="mb-4 text-xl text-[#111827]">Ingredients</h3>
            {children}
        </div>
    )
}