import { Link } from "react-router";

export const AddNewRecipeBtn = () => {
    return (
        <Link
            to="/new"
            className="px-6 py-2 flex items-center rounded-lg text-white bg-[#4b5563] hover:bg-[#374151] transition-colors cursor-pointer">
            <svg className="mr-2 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
            Add Recipe
        </Link>
    )
}