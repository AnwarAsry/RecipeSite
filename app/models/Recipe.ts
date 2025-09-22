import type { Category } from "./Categories";

export interface IRecipe {
    id: string;
    category: Category;
    title: string;
    ingredients: string[];
    instructions: string[];
    image_url: string;
    notes: string;
}

export interface IRecipeCard {
    id: string;
    category: Category;
    title: string;
    image_url: string;
}

export interface IRecipeForm {
    category: Category;
    title: string;
    ingredients: string;
    instructions: string;
    imageFile: File;
    notes: string;
}