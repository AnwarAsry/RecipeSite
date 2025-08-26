import { FaRegHeart } from "react-icons/fa"
import { HiOutlineClock } from "react-icons/hi"

export const RecipeCard = () => {
    return (
        <div className="relative max-w-3xs p-4 rounded-xl shadow-md overflow-visible bg-white">
            {/* Image */}
            <img
                className="w-full h-40 mb-4 object-cover rounded-md"
                src="../../public/stock.png"
                alt="Recipe Image" />

            {/* Content */}
            <div className="">
                {/* Title */}
                <a href="#" className="hover:underline">
                    <h3 className="text-md font-semibold text-gray-800">Spaghetti Carbonara</h3>
                </a>

                {/* Prep Time */}
                <div className="w-full mt-2 flex items-center gap-1">
                    <HiOutlineClock className="text-xl text-orange-400" />
                    <span>888 mins</span>
                </div>

                <div className="mt-3 flex justify-end">
                    {/* Heart */}
                    <FaRegHeart className="text-xl text-pink-500" />
                </div>
            </div>
        </div>
    )
}
