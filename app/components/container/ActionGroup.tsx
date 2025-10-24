export const ActionGroup = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center space-x-4">
            {children}
        </div>
    )
}