import { Header } from "~/components/Header";
import { RecipeCard } from "~/components/RecipeCard";
import { RecipeGrid } from "~/components/RecipeGrid";
import { Filter } from "~/components/Filter";
import { FilterPill } from "~/components/FilterPill";
import { useState } from "react";
import { Category } from "~/models/Categories";
import type { Route } from "./+types/_index";
import { fetchAllRecipes } from "~/actions/Recipes";
import { UploadBtn } from "~/components/UploadBtn";

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
		<Header />
		<div className="mt-20 mb-10 mx-auto flex gap-4 justify-center">
			<Filter>
				{
					(Object.keys(Category) as Array<keyof typeof Category>)
						.map((key, i) => <FilterPill key={i} text={key} active={activeFilter === Category[key]} onClick={() => setActiveFilter(Category[key])} />)
				}
			</Filter>
			<UploadBtn />
		</div>
		<div className="w-fit my-10 mx-auto">
			<RecipeGrid>
				{
					filterData!.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
				}
			</RecipeGrid>
		</div>
	</>;
}
