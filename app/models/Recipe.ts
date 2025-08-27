export interface IRecipe {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string[];
    imageUrl: string;
    notes: string;
}

export interface IRecipeCard {
    id: string;
    title: string;
    imageUrl: string;
}