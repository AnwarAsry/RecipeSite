import type { ReactNode } from "react"

export const Filter = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-fit h-fit px-3 py-2 flex flex-wrap items-center justify-between rounded-full bg-white">
            {children}
        </div>
    )
}