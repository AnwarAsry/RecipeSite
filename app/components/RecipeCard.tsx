import { FaRegHeart } from "react-icons/fa"
import { HiOutlineClock } from "react-icons/hi"
import { Link } from "react-router"
import type { IRecipeCard } from "~/models/Recipe"

export const RecipeCard = ({ recipe }: { recipe: IRecipeCard }) => {
    return (
        <div className="relative max-w-3xs p-4 rounded-xl shadow-md overflow-visible bg-white">
            {/* Image */}
            <img
                className="w-[224px] h-40 mb-4 object-cover rounded-md"
                src={recipe.image_url}
                alt="Recipe Image" />

            {/* Content */}
            <div>
                {/* Title */}
                <Link to={`/${recipe.id}`} className="hover:underline">
                    <h3 className="text-md font-semibold text-gray-800">{recipe.title}</h3>
                </Link>

                {/* Prep Time */}
                {/* <div className="w-full mt-2 flex items-center gap-1">
                    <HiOutlineClock className="text-xl text-orange-400" />
                    <span>{recipe.} mins</span>
                </div> */}

                <div className="mt-3 flex justify-end">
                    {/* Heart */}
                    <FaRegHeart className="text-xl text-pink-500" />
                </div>
            </div>
        </div>
    )
}
