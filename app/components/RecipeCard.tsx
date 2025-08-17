import { FaRegHeart } from "react-icons/fa"
import { HiOutlineClock } from "react-icons/hi"

export const RecipeCard = () => {
    return (
        // <a href="#" className="w-fit h-fit">
        <div className="relative max-w-3xs rounded-xl shadow-md overflow-visible bg-white">
            {/* Image */}
            <img
                className="w-50 h-40 mx-auto object-cover rounded-xl "
                src="../../public/stock.png"
                alt="Recipe Image" />

            {/* Content */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-md font-semibold text-gray-800">Spaghetti Carbonara</h3>

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
        // </a>


        // <div className="relative bg-black text-white max-w-md w-full rounded-lg px-6 pb-8 pt-16">



        //     <img
        //         src="../../public/stock.png"
        //         alt="Example"
        //         className="absolute -top-22 left-1/2 -translate-x-1/2 w-3/4 rounded-md shadow-lg"
        //     />

        //     <p className="text-center text-lg leading-relaxed mt-26">
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        //         sed do eiusmod tempor incididunt ut labore et dolor
        //     </p>
        // </div>

    )
}
