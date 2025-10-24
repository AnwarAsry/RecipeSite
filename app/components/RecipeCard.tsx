import { Link } from "react-router"
import type { IRecipeCard } from "~/models/Recipe"
import { ServingsLabel } from "./RecipePageComp/ServingsLabel"
import { TimeLabel } from "./RecipePageComp/TimeLabel"
import { PillTag } from "./PillTag"
import { LikeBtn } from "./Buttons/LikeBtn"

export const RecipeCard = ({ recipe }: { recipe: IRecipeCard }) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="h-48 relative">
                {/* Image */}
                <img
                    className="w-full h-full object-cover"
                    src={recipe.image_url}
                    alt="Recipe Image"
                />
                <LikeBtn liked={true} className="absolute top-4 right-4 shadow-sm !bg-white" />
                <div className="p-4 absolute bottom-0 left-0 flex justify-between items-end">
                    {/* Category */}
                    <PillTag text={recipe.category} />
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <Link to={`/${recipe.id}`} className="hover:underline">
                    <h3 className="mb-2 text-xl text-[#111827]">{recipe.title}</h3>
                </Link>
                {/* Labels */}
                <div className="flex items-center justify-between text-sm">
                    {/* <TimeLabel time={125} /> */}
                    {/* <ServingsLabel servings={24} /> */}
                </div>

            </div>
        </div>
    )
}
