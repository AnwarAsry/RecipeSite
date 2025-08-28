import type { ReactNode } from "react"

export const Filter = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-xl h-12 px-3 flex items-center justify-between rounded-full bg-white">
            {children}
        </div>
    )
}