export const BreadcrumbList = ({ children }: { children: React.ReactNode }) => {
    return (
        <nav className="mb-4 flex items-center text-sm text-[#6b7280]">
            {children}
        </nav>
    );
}