import { TrashBtn } from "../Buttons/TrashBtn"
import { NumberStepLabel } from "../RecipePageComp/NumberStepLabel"

export const IngredientInput = () => {
    return (
        <div className="flex items-center space-x-3">
            <NumberStepLabel index={1} />
            <input id="ingredient-item" type="text" className="flex-1 p-3 rounded-lg border border-[#d1d5db] focus:border-[#4b5563] outline-none transition-colors" />
            <TrashBtn />
        </div>
    )
}