import type { IRecipe, IRecipeCard, IRecipeForm } from "~/models/Recipe";
import type { ServerAction, ServerActionResponse } from "~/models/responses/ServerAction";
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

export const postRecipe = async (recipe: IRecipeForm): Promise<ServerAction> => {
    try {
        const { title, category, ingredients, instructions, notes, imageFile } = recipe;

        // This creates a unique file path for the image
        // Making sure we don't overwrite existing images with the same name
        const filePath = `recipes/${crypto.randomUUID()}-${imageFile.name}`;

        // Upload image to Supabase Storage
        const { error: uploadError } = await supabase.storage
            .from("recipe-images")
            .upload(filePath, imageFile);
        if (uploadError) throw uploadError;

        // Get public URL of the uploaded image
        const { data } = supabase.storage
            .from("recipe-images")
            .getPublicUrl(filePath);

        // Insert into DB
        const { error: dbError } = await supabase.from("recipes").insert({
            title,
            category,
            ingredients: ingredients.split("\n"),
            instructions: instructions.split("\n"),
            image_url: data.publicUrl,
            notes,
        });
        if (dbError) throw dbError;

        return { success: true, message: "Recipe added!" }
    } catch (e) {
        return { success: false, message: `FAILED TO UPLOAD RECIPE: ${e}` }
    }
}