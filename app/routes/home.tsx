import { Header } from "~/components/Header";
import type { Route } from "./+types/home";
import { RecipeCard } from "~/components/RecipeCard";
import { RecipeGrid } from "~/components/RecipeGrid";
import dummyData from "../../dummyData.json"
import type { IRecipeCard } from "~/models/Recipe";
import { Filter } from "~/components/Filter";
import { FilterPill } from "~/components/FilterPill";

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
    <div className="w-fit mt-20 mx-auto">
      <div className="mb-10 flex">
        <Filter>
          <FilterPill text="All" />
          <FilterPill text="Chicken" />
          <FilterPill text="Meat" />
          <FilterPill text="Soups" />
          <FilterPill text="Desserts" />
        </Filter>
      </div>
      <RecipeGrid>
        {
          dataDummy.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
        }
      </RecipeGrid>
    </div>
  </>;
}
