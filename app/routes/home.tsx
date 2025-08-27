import { Header } from "~/components/Header";
import type { Route } from "./+types/home";
import { RecipeCard } from "~/components/RecipeCard";
import { RecipeGrid } from "~/components/RecipeGrid";
import dummyData from "../../dummyData.json"
import type { IRecipeCard } from "~/models/Recipe";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Anwars Saved Recipes" },
    { name: "description", content: "Welcome to Anwars Recipes!" },
  ];
}

const dataDummy = dummyData as unknown as IRecipeCard[];

export default function Home() {
  return <>
    <Header />
    <RecipeGrid>
      {
        dataDummy.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
      }
    </RecipeGrid>
  </>;
}
