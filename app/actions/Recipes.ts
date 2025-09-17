import type { IRecipe, IRecipeCard } from "~/models/Recipe";
import type { ServerActionResponse } from "~/models/responses/ServerAction";
import { supabase } from "~/lib/supabase";

export const fetchRecipeById = async (
    id: string
): Promise<ServerActionResponse<IRecipe | null>> => {
    try {
        const { data, error } = await supabase
            .from("recipes")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;

        return { success: true, data: data, message: "Recipe retrived!" }
    } catch (e) {
        return { success: false, data: null, message: `FAILED TO FETCH RECIPE BY ID: ${e}` }
    }
}

export const fetchAllRecipes = async (): Promise<ServerActionResponse<IRecipeCard[] | null>> => {
    try {
        const { data, error } = await supabase
            .from("recipes")
            .select("*");

        if (error) throw error;

        return { success: true, data: data, message: "Recipes retrived!" }
    } catch (e) {
        return { success: true, data: null, message: `FAILED TO FETCH RECIPES: ${e}` }
    }
}