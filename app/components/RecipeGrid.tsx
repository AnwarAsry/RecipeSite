import type { ReactNode } from "react"

export const RecipeGrid = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-fit grid grid-cols-3 gap-3">
            {children}
        </div>
    )
}