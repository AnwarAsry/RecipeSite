import type { Category } from "./Categories";

export interface IRecipe {
    id: string;
    category: Category;
    title: string;
    ingredients: string[];
    instructions: string[];
    imageUrl: string;
    notes: string;
}

export interface IRecipeCard {
    id: string;
    category: Category;
    title: string;
    imageUrl: string;
}

export interface IRecipeForm {
    category: Category;
    title: string;
    ingredients: string;
    instructions: string;
    imageFile: File;
    notes: string;
}