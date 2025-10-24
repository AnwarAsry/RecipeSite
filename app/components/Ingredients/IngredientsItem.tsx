export const IngredientsItem = ({ ingredient }: { ingredient: string }) => {
    return (
        <li className="flex items-center">
            <input type="checkbox" className="w-4 h-4 mr-3 rounded text-[#4b5563]" />
            <span className="text-[#374151]">{ingredient}</span>
        </li>
    )
}