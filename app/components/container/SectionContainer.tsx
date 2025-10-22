export const SectionContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mb-8 p-8 rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
            {children}
        </div>
    );
}