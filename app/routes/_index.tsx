import { RecipeCard } from "~/components/RecipeCard";
import { RecipeGrid } from "~/components/RecipeGrid";
import { Filter } from "~/components/Filter";
import { FilterPill } from "~/components/FilterPill";

import { useState } from "react";
import { Category } from "~/models/Categories";
import type { Route } from "./+types/_index";
import { fetchAllRecipes } from "~/actions/Recipes";
import { SearchBar } from "~/components/SearchBar";
import type { IRecipe } from "~/models/Recipe";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Anwars Saved Recipes" },
		{ name: "description", content: "Welcome to Anwars Recipes!" },
	];
}

export async function loader() {
	const recipe = await fetchAllRecipes();

	return recipe.data;
}

export default function Home({
	loaderData,
}: Route.ComponentProps) {
	const [activeFilter, setActiveFilter] = useState<Category>(Category.All);

	const filterData = activeFilter === Category.All ? loaderData : loaderData!.filter(data => data.category === activeFilter)

	return <>
		<section className="max-w-4xl mx-auto px-6 py-20">
			<SearchBar />
			<Filter>
				{
					(Object.keys(Category) as Array<keyof typeof Category>)
						.map((key, i) => <FilterPill key={i} text={key} active={activeFilter === Category[key]} onClick={() => setActiveFilter(Category[key])} />)
				}
			</Filter>
		</section>
		<div className="max-w-7xl px-6 mx-auto">
			<RecipeGrid>
				{
					filterData && filterData.length !== 0 && filterData.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
				}
				{
					filterData && filterData.length === 0 && <p className="text-center col-span-full text-gray-500">No recipes found.</p>
				}
			</RecipeGrid>
		</div>
	</>;
}
