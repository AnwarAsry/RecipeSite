import type { IRecipe } from "~/models/Recipe";
import dummyData from "../../dummyData.json"
import type { ServerActionResponse } from "~/models/responses/ServerAction";

export const fetchRecipeById = async (
    id: string
): Promise<ServerActionResponse<IRecipe | null>> => {
    try {
        const dataDummy = dummyData[0] as unknown as IRecipe;

        return { success: true, data: dataDummy, message: "Recipe retrived!" }
    } catch (e) {
        return { success: false, data: null, message: `${e}` }
    }
}