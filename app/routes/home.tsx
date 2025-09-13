import { Header } from "~/components/Header";
import type { Route } from "./+types/home";
import { RecipeCard } from "~/components/RecipeCard";
import { RecipeGrid } from "~/components/RecipeGrid";
import dummyData from "../../dummyData.json"
import type { IRecipeCard } from "~/models/Recipe";
import { Filter } from "~/components/Filter";
import { FilterPill } from "~/components/FilterPill";
import { useState } from "react";
import { Category } from "~/models/Categories";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Anwars Saved Recipes" },
		{ name: "description", content: "Welcome to Anwars Recipes!" },
	];
}

const dataDummy = dummyData as unknown as IRecipeCard[];

export default function Home() {
	const [activeFilter, setActiveFilter] = useState<Category>(Category.All);

	const filterData = activeFilter === Category.All ? dataDummy : dataDummy.filter(data => data.category === activeFilter)

	return <>
		<Header />
		<div className="w-[798px] mt-20 mx-auto">
			<div className="mb-10 flex">
				<Filter>
					<FilterPill text="All" active={activeFilter === Category.All} onClick={() => setActiveFilter(Category.All)} />
					<FilterPill text="Chicken" active={activeFilter === Category.Chicken} onClick={() => setActiveFilter(Category.Chicken)} />
					<FilterPill text="Meat" active={activeFilter === Category.Meat} onClick={() => setActiveFilter(Category.Meat)} />
					<FilterPill text="Soup" active={activeFilter === Category.Soup} onClick={() => setActiveFilter(Category.Soup)} />
					<FilterPill text="Dessert" active={activeFilter === Category.Dessert} onClick={() => setActiveFilter(Category.Dessert)} />
					<FilterPill text="Pasta" active={activeFilter === Category.Pasta} onClick={() => setActiveFilter(Category.Pasta)} />
				</Filter>
			</div>
			<RecipeGrid>
				{
					filterData.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
				}
			</RecipeGrid>
		</div>
	</>;
}
